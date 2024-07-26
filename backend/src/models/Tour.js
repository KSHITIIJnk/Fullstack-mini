const mongoose = require('mongoose');

const TourSchema = new mongoose.Schema({
  name: String,
  destination: String,
  duration: Number,
  // Add more fields as needed
});

module.exports = mongoose.model('Tour', TourSchema);
