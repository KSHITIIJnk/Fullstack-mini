const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotels');

// Get all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific hotel
router.get('/:id', getHotel, (req, res) => {
  res.json(res.hotel);
});

// Create a new hotel
router.post('/', async (req, res) => {
  const hotel = new Hotel({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    rating: req.body.rating,
    image: req.body.image,
    price: req.body.price // Adding price here
  });

  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a hotel
router.patch('/:id', getHotel, async (req, res) => {
  if (req.body.name != null) {
    res.hotel.name = req.body.name;
  }
  if (req.body.description != null) {
    res.hotel.description = req.body.description;
  }
  if (req.body.location != null) {
    res.hotel.location = req.body.location;
  }
  if (req.body.rating != null) {
    res.hotel.rating = req.body.rating;
  }
  if (req.body.image != null) {
    res.hotel.image = req.body.image;
  }
  if (req.body.price != null) {
    res.hotel.price = req.body.price; // Updating price
  }

  try {
    const updatedHotel = await res.hotel.save();
    res.json(updatedHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a hotel
router.delete('/:id', getHotel, async (req, res) => {
  try {
    await res.hotel.remove();
    res.json({ message: 'Hotel deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get hotel by ID
async function getHotel(req, res, next) {
  let hotel;
  try {
    hotel = await Hotel.findById(req.params.id);
    if (hotel == null) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.hotel = hotel;
  next();
}

module.exports = router;
