const express = require('express');
const router = express.Router();
const { allGames, gamesByCategory, addComment, gameComments } = require('../services');
const { validComment } = require('../middleware');
const { errorHandler } = require('../utils')

// Fetch all games
router.get('/games', async (req, res) => {
    try {
        const [games] = await allGames();
        res.json(games);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Fetch game by category
router.get('/games/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const [results] = await gamesByCategory(category);
        res.json(results);
    } catch (err) {
        errorHandler(err, res);
    }
});

// Add comment to game
router.post('/comments', validComment, async (req, res) => {
    try {
        await addComment(req.body);
        res.sendStatus(200);
    } catch(err) {
        errorHandler(err, res)
    }
});

// Fetch Game's Comments
router.get('/comments/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [results] = await gameComments(id);
        res.json(results);
    } catch (err) {
        errorHandler(err, res);
    }
});

module.exports = router;