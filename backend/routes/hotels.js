const express = require('express');
const router = express.Router();
const Hotel = require('../models /Hotel');

// GET all hotels
router.get('/', async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET hotel by ID
router.get('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel == null) {
      return res.status(404).json({ message: 'Hotel not found' });
    }
    res.json(hotel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new hotel
router.post('/', async (req, res) => {
  const hotel = new Hotel({
    name: req.body.name,
    location: req.body.location,
    rating: req.body.rating,
    price: req.body.price
  });

  try {
    const newHotel = await hotel.save();
    res.status(201).json(newHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a hotel by ID
router.put('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel == null) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    if (req.body.name != null) {
      hotel.name = req.body.name;
    }
    if (req.body.location != null) {
      hotel.location = req.body.location;
    }
    if (req.body.rating != null) {
      hotel.rating = req.body.rating;
    }
    if (req.body.price != null) {
      hotel.price = req.body.price;
    }

    const updatedHotel = await hotel.save();
    res.json(updatedHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a hotel by ID
router.delete('/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (hotel == null) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    await hotel.remove();
    res.json({ message: 'Hotel deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
