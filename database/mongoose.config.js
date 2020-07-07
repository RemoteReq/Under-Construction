require('dotenv').config();
const mongoose = require('mongoose');

const { DB_ADDRESS } = process.env;

console.log('connecting to subscriber DB');

mongoose.connect('mongodb://localhost:27017/rrsubscribers', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => {
  console.log('Subscriber DB connection successful!');
});

module.exports = mongoose;