const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String },
  category: { type: String }
})

module.exports = mongoose.model('products', productSchema);