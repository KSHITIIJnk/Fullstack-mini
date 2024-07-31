const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  availableRooms: {
    type: Number,
    required: true,
    min: [0, 'Available rooms cannot be negative'],
  },
});

module.exports = mongoose.model('Hotel', HotelSchema);
