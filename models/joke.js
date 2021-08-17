const mongoose = require('mongoose');

const jokeSchema = new mongoose.Schema({
    message: {
        type: String,
        required: false
    },
    pfp: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    media: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('joke', jokeSchema);