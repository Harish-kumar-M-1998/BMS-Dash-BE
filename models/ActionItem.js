const mongoose = require('mongoose');

const ActionItemSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Title of the action item
    description: { type: String }, // Description of the item
    type: { type: String, enum: ['Overdue Case', 'Insurance Expiring', 'Resident Update', 'Maintenance Schedule'], required: true }, // Type of action item
    dueDate: { type: Date, required: true }, // Due date for the action
    status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' }, // Status of the action item
}, { timestamps: true }); // Automatically add createdAt and updatedAt timestamps

const ActionItem = mongoose.model('ActionItem', ActionItemSchema);
module.exports = ActionItem;
