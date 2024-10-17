const express = require('express');
const router = express.Router();
const Resident = require('../models/Resident');

// Get all residents
router.get('/', async (req, res) => {
    try {
        const residents = await Resident.find();
        res.status(200).json(residents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
