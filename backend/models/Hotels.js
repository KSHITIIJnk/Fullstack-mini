const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: { type: String },
  rating: { type: Number, default: 0 },
  image: { type: String }, // Assuming the image will be stored as a URL
  price: { type: Number }, // Adding price field
  // Add more fields as needed
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
