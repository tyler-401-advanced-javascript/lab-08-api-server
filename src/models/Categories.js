const schema = require('./categories-schema');
const Model = require('./mongo-model');

class Categories extends Model {
  constructor() {
    super(schema);
  }
  
}

module.exports = Categories;