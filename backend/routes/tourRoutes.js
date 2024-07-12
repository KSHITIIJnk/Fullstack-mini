const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');

// Get all tours
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific tour
router.get('/:id', getTour, (req, res) => {
  res.json(res.tour);
});

// Create a new tour
router.post('/', async (req, res) => {
  const tour = new Tour({
    tourName: req.body.tourName,
    countryName: req.body.countryName,
    location: req.body.location,
    description: req.body.description,
    rating: req.body.rating,
    image: req.body.image,
    price: req.body.price,
  });

  try {
    const newTour = await tour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a tour
router.patch('/:id', getTour, async (req, res) => {
  if (req.body.tourName != null) {
    res.tour.tourName = req.body.tourName;
  }
  if (req.body.countryName != null) {
    res.tour.countryName = req.body.countryName;
  }
  if (req.body.location != null) {
    res.tour.location = req.body.location;
  }
  if (req.body.description != null) {
    res.tour.description = req.body.description;
  }
  if (req.body.rating != null) {
    res.tour.rating = req.body.rating;
  }
  if (req.body.image != null) {
    res.tour.image = req.body.image;
  }
  if (req.body.price != null) {
    res.tour.price = req.body.price;
  }

  try {
    const updatedTour = await res.tour.save();
    res.json(updatedTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a tour
router.delete('/:id', getTour, async (req, res) => {
  try {
    await res.tour.remove();
    res.json({ message: 'Tour deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get tour by ID
async function getTour(req, res, next) {
  let tour;
  try {
    tour = await Tour.findById(req.params.id);
    if (tour == null) {
      return res.status(404).json({ message: 'Tour not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.tour = tour;
  next();
}

module.exports = router;
