const schema = require('./orders-schema');
const Model = require('./mongo-model');

class Orders extends Model {
  constructor() {
    super(schema)
  }
}

module.exports = Orders;