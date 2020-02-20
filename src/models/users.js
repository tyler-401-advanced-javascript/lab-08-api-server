const Model = require('../models/mongo-model') // this will be our super.
const userSchema = require('../models/users-schema'); // this will be the schema model that we pass into the constructor for the child class.

module.exports = class Users extends Model{
  constructor(schema) {
    super(schema)
  }
}