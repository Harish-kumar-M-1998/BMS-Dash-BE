const express = require("express");
const router = express.Router();
const Report = require("../models/Report");

// Get all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports", error });
  }
});

// Add a new report (for admin use)
router.post("/", async (req, res) => {
  const { title, description, reportFile } = req.body;
  try {
    const newReport = new Report({ title, description, reportFile });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: "Error adding report", error });
  }
});

module.exports = router;
