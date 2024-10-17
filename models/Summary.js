// models/Summary.js
const mongoose = require("mongoose");

const SummarySchema = new mongoose.Schema({
  residents: { type: Number, required: true },
  assets: { type: Number, required: true },
  contractors: { type: Number, required: true },
  workOrders: { type: Number, required: true },
});

const Summary = mongoose.model("Summary", SummarySchema);
module.exports = Summary;
