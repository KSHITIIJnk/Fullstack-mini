const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
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
    min: 0,
    max: 5,
  },
  activities: [String], // Array of activities included in the tour
  tourType: {
    type: String, // e.g., Adventure, Cultural, Relaxation
    required: true,
  },
  availability: {
    type: Boolean,
    default: true, // Indicates if the tour is available or not
  },
});

module.exports = mongoose.model('Tour', TourSchema);