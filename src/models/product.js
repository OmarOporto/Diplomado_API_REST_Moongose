const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', userSchema);