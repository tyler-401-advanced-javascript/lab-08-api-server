
//Entry point.
const mongoose = require('mongoose');
require('dotenv').config();

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
const { MONGO_DB_URL, PORT } = process.env;
mongoose.connect(MONGO_DB_URL, mongooseOptions);

const server = require('./src/app.js');
server.start(PORT);

