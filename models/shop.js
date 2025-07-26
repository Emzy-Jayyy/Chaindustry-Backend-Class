const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        require: true
    },
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    brand: {
        type: String,
        require: true
    },
    
});

module.exports = mongoose.model('Shop', shopSchema);