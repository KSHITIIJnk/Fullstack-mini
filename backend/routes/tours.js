const express = require('express');
const router = express.Router();
const Tour = require('../models /Tour');

// GET all tours
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET tour by ID
router.get('/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour == null) {
      return res.status(404).json({ message: 'Tour not found' });
    }
    res.json(tour);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new tour
router.post('/', async (req, res) => {
  const tour = new Tour({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    duration: req.body.duration
  });

  try {
    const newTour = await tour.save();
    res.status(201).json(newTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT (update) a tour by ID
router.put('/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour == null) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    if (req.body.title != null) {
      tour.title = req.body.title;
    }
    if (req.body.description != null) {
      tour.description = req.body.description;
    }
    if (req.body.price != null) {
      tour.price = req.body.price;
    }
    if (req.body.duration != null) {
      tour.duration = req.body.duration;
    }

    const updatedTour = await tour.save();
    res.json(updatedTour);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a tour by ID
router.delete('/:id', async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);
    if (tour == null) {
      return res.status(404).json({ message: 'Tour not found' });
    }

    await tour.remove();
    res.json({ message: 'Tour deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
