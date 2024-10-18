const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  user: { type: String, required: true },
  date: { type: Date, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Activity', activitySchema);
