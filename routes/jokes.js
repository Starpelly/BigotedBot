const express = require('express');
const router = express.Router();
const Joke = require('../models/joke');

// Getting all
router.get('/', async (req, res) => {
    try {
        const jokes = await Joke.find();
        res.json(jokes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Getting one
router.get('/:id', getJoke, (req, res) => {
    res.send(res.joke);
})

// Creating one
router.post('/', async (req, res) => {
    if (req.body.password == "sugmacock") {
        const joke = new Joke({
            message: req.body.message,
            pfp: req.body.pfp,
            username: req.body.username,
            media: req.body.media
        });
    
        try {
            const newJoke = await joke.save();
            res.status(201).json(newJoke);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    else
    {
        res.status(403).json({ message: "Password incorrect" });

    }
})

async function getJoke(req, res, next) {
    let joke;
    try {
        joke = await Joke.findById(req.params.id);
        if (joke == null) {
            return res.status(404).json({ message: 'Cannot find joke' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.joke = joke;
    next();
}

module.exports = router