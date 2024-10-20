const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
});

const Resident = mongoose.model('Resident', residentSchema);
module.exports = Resident;
