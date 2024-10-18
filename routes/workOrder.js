const express = require("express");
const WorkOrder = require("../models/WorkOrder");
const router = express.Router();

// Get all work orders
router.get("/", async (req, res) => {
    try {
        const workOrders = await WorkOrder.find();
        res.json(workOrders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new work order
router.post("/", async (req, res) => {
    const workOrder = new WorkOrder(req.body);
    try {
        const savedOrder = await workOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedOrder = await WorkOrder.findByIdAndDelete(id);
        
        if (!deletedOrder) {
            return res.status(404).json({ message: "Work order not found" });
        }
        
        res.json({ message: "Work order deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = router;
