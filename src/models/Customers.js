const schema = require('./customers-schema');
const Model = require('./mongo-model');

class Customers extends Model {
  constructor() {
    super(schema)
  }
}

module.exports = Customers