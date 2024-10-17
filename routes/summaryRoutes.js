const express = require('express');
const router = express.Router();
const Summary = require('../models/Summary'); // Ensure the path is correct based on your project structure

// Get the summary data
router.get('/', async (req, res) => {
    try {
        const summary = await Summary.findOne(); // Fetch the summary data
        if (!summary) {
            return res.status(404).json({ message: 'Summary data not found' });
        }
        res.json(summary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



module.exports = router;
