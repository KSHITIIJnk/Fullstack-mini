const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');
const mongoose = require('mongoose');

// Get all tours with specific fields
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find({}, 'image name country city description price rating');
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single tour by ID with specific fields
router.get('/:id', async (req, res) => {
  console.log(`Fetching tour with ID: ${req.params.id}`); // Debugging

  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid tour ID format' });
    }

    const tour = await Tour.findById(req.params.id, 'image name country city description price rating');
    if (tour) {
      res.json(tour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (err) {
    console.error(err); // Debugging
    res.status(500).json({ message: err.message });
  }
});

// Create a new tour
router.post('/', async (req, res) => {
  const tour = new Tour(req.body);
  try {
    const newTour = await tour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a tour by ID
router.put('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid tour ID format' });
    }

    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (updatedTour) {
      res.json(updatedTour);
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a tour by ID
router.delete('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid tour ID format' });
    }

    const result = await Tour.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({ message: 'Tour deleted successfully' });
    } else {
      res.status(404).json({ message: 'Tour not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
