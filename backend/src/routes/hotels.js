const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); // Add this line
const Hotel = require('../models/Hotel');

// Get all hotels with specific fields
router.get('/', async (req, res) => {
  try {
    // Projection to include only specific fields
    const hotels = await Hotel.find({}, 'image name location price rating');
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new hotel
router.post('/', async (req, res) => {
  const hotel = new Hotel(req.body);
  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a hotel by ID with specific fields
router.get('/:id', async (req, res) => {
  console.log(`Fetching hotel with ID: ${req.params.id}`); // Debugging

  try {
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid hotel ID format' });
    }

    // Projection to include only specific fields
    const hotel = await Hotel.findById(req.params.id, 'image name location description price rating');
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (err) {
    console.error(err); // Debugging
    res.status(500).json({ message: err.message });
  }
});

// Update a hotel by ID
router.put('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (hotel) {
      res.json(hotel);
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a hotel by ID
router.delete('/:id', async (req, res) => {
  try {
    const result = await Hotel.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: 'Hotel deleted successfully' });
    } else {
      res.status(404).json({ message: 'Hotel not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
