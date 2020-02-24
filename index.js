
//Entry point.

/**
 * @author Tyler Sayvetz
 */

const mongoose = require('mongoose');
require('dotenv').config();

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
const { MONGODB_URI, PORT } = process.env;
mongoose.connect(MONGODB_URI, mongooseOptions);

const server = require('./src/app.js');
server.start(PORT);

