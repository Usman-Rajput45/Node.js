const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    taste: {
        type: String,
        enum: ["sweet", "savory", "spicy", "bitter", "sour", "umami"],
        required: true
    },
    is_drink: {
        type: Boolean,
        required: true
    },
    ingredient: {
        type: [String], // Array of strings
        required: true
    },
    num_sales: {
        type: Number,
        required: true,
        min: 0
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
