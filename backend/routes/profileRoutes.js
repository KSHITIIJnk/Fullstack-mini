// routes/profileRoutes.js

const express = require('express');
const router = express.Router();
const Profile = require('../models/profileModel');

// POST: Create a new profile
router.post('/', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).send(profile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET: Fetch all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.send(profiles);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET: Fetch a profile by ID
router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).send({ error: 'Profile not found' });
    }
    res.send(profile);
  } catch (err) {
    res.status(500).send(err);
  }
});

// PUT: Update a profile by ID
router.put('/:id', async (req, res) => {
  try {
    const profile = await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!profile) {
      return res.status(404).send({ error: 'Profile not found' });
    }
    res.send(profile);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE: Delete a profile by ID
router.delete('/:id', async (req, res) => {
  try {
    const profile = await Profile.findByIdAndDelete(req.params.id);
    if (!profile) {
      return res.status(404).send({ error: 'Profile not found' });
    }
    res.send(profile);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
