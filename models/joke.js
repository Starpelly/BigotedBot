const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    message: {
        type: String,
        required: false
    },
    media: {
        type: String,
        required: false
    },
    userID: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('joke', jokeSchema);