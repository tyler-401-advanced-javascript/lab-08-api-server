const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  name: { type: String }

})

module.exports = mongoose.model('users', usersSchema);