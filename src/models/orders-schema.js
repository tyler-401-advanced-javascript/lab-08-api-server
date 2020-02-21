const mongoose = require('mongoose');

const ordersSchema = mongoose.Schema({
  customer: { type: String, required: true },
  product: { type: [String], required: true },
  total: { type: Number, required: true },


})

module.exports = mongoose.model('orders', ordersSchema);