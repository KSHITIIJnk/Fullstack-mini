// models/Tours.js
const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  tourName: {
    type: String,
    required: true
  },
  countryName: {
    type: String,
    required: true
  },
  location: {
    type: String
  },
  description: {
    type: String
  },
  rating: {
    type: Number
  },
  image: {
    type: String
  },
  price: {
    type: Number
  }
});

module.exports = mongoose.model('Tour', tourSchema);
