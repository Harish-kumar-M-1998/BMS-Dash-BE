// models/Case.js
const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
    category: { type: String, required: true },
    count: { type: Number, required: true },
});

module.exports = mongoose.model("Case", caseSchema);
