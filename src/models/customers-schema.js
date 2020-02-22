const mongoose = require('mongoose');

const customersSchema = mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String },
  leetLevel: { type: Number, required: true }
})

module.exports = mongoose.model('customers', customersSchema);