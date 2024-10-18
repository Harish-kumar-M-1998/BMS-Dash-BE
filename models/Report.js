const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  reportFile: { type: String, required: true } // This will store the download link
});

module.exports = mongoose.model("Report", reportSchema);
