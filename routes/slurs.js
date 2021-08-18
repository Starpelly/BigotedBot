const express = require('express');
const router = express.Router();
const Slur = require('../models/slur');

// Getting all
router.get('/', async (req, res) => {
    try {
        const slurs = await Slur.find({}, {_id:0, __v:0});
        res.json(slurs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Random
router.get('/random', async (req, res) => {
    try {
        const slurs = await Slur.find({}, {_id:0, __v:0});
        const random = Math.floor(Math.random() * slurs.length);
        res.json(slurs[random]);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router