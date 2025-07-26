const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    referredBy: {
        type: String,
        default: null
    },
    referralCode: {
        type: String
    },
    lastLogin: {
        type: Date
    },
    verificationToken: {
        type: String
    }
});

userSchema.methods.verifyPassword = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getJWTToken= async function(){
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
    return token
}

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    user.password = await bcrypt.hash(user.password, 8);
    next();
});

module.exports = mongoose.model('User', userSchema);