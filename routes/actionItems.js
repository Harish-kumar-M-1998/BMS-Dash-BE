const express = require('express');
const router = express.Router();
const ActionItem = require('../models/ActionItem'); // Ensure the path is correct

// Get all action items
router.get('/', async (req, res) => {
    try {
        const actionItems = await ActionItem.find(); // Fetch all action items
        res.json(actionItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new action item
router.post('/', async (req, res) => {
    const { title, description, type, dueDate, status } = req.body;

    const actionItem = new ActionItem({
        title,
        description,
        type,
        dueDate,
        status,
    });

    try {
        const savedActionItem = await actionItem.save(); // Save the action item
        res.status(201).json(savedActionItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update an action item by ID
router.put('/:id', async (req, res) => {
    const { title, description, type, dueDate, status } = req.body;

    try {
        const updatedActionItem = await ActionItem.findByIdAndUpdate(
            req.params.id,
            { title, description, type, dueDate, status },
            { new: true } // Return the updated document
        );

        if (!updatedActionItem) {
            return res.status(404).json({ message: 'Action item not found' });
        }

        res.json(updatedActionItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an action item by ID
router.delete('/:id', async (req, res) => {
    try {
        const deletedActionItem = await ActionItem.findByIdAndDelete(req.params.id);

        if (!deletedActionItem) {
            return res.status(404).json({ message: 'Action item not found' });
        }

        res.json({ message: 'Action item deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
