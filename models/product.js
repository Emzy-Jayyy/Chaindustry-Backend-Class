const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    shop: {
        type: mongoose.Schema.ObjectId,
        ref: 'Shop'
    },
    name: {
        type: String
    },
    description: {
        type: String,
        default: "This is a test"
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number,
        default: 0
    },
    slug: [
        {type: String}
    ]
});

module.exports = mongoose.model('Product', productSchema);