const express = require("express");
const router = express.Router();
const Weather = require("../models/Weather");

// GET current weather and important numbers
router.get("/", async (req, res) => {
  try {
    const weatherData = await Weather.findOne(); // Fetching the first document, you can modify as needed
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
});

module.exports = router;
