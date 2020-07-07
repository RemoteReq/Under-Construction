const mongoose = require('../mongoose.config.js');

const { Schema } = mongoose;

const subscriberSchema = new Schema({
  // name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const Subscribers = mongoose.model('Subscribers', subscriberSchema);

module.exports = Subscribers;