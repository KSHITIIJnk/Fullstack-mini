// routes/contactRoutes.js

const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// POST /api/contactForms
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error saving contact' });
  }
});

module.exports = router;
