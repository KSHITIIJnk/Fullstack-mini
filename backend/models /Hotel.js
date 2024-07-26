const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model('Hotel', hotelSchema);
