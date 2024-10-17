const mongoose = require("mongoose");

const workOrderSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    dueDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
});

const WorkOrder = mongoose.model("WorkOrder", workOrderSchema);
module.exports = WorkOrder;
