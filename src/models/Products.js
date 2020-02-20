const schema = require('./products-schema.js');
const Model = require('./mongo-model');

class Products extends Model {
  constructor() {
    super(schema);
  }
  
}

module.exports = Products;