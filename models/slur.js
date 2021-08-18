const mongoose = require('mongoose');

const slurSchema = new mongoose.Schema({
    slur: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('slur', slurSchema);