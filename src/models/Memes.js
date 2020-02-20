const schema = require('./memes-schema');
const Model = require('./mongo-model');

class Memes extends Model {
  constructor() {
    super(schema);
  }
  
}

module.exports = Memes;