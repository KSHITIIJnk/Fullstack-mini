const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');

// POST route to handle form submission (Create)
router.post('/', async (req, res) => {
  try {
    const newContactForm = new ContactForm(req.body);
    await newContactForm.save();
    res.status(201).json({ message: 'Contact form submitted successfully', data: newContactForm });
  } catch (error) {
    console.error('Error saving contact form:', error);
    res.status(500).json({ message: 'Failed to submit contact form', error });
  }
});

// GET route to get all contact forms
router.get('/', async (req, res) => {
  try {
    const contactForms = await ContactForm.find();
    res.status(200).json(contactForms);
  } catch (error) {
    console.error('Error fetching contact forms:', error);
    res.status(500).json({ message: 'Failed to fetch contact forms', error });
  }
});

// GET route to get a single contact form by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const contactForm = await ContactForm.findById(id);
    if (!contactForm) {
      return res.status(404).json({ message: 'Contact form not found' });
    }
    res.status(200).json(contactForm);
  } catch (error) {
    console.error('Error fetching contact form:', error);
    res.status(500).json({ message: 'Failed to fetch contact form', error });
  }
});

// PUT route to update a contact form by ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContactForm = await ContactForm.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedContactForm) {
      return res.status(404).json({ message: 'Contact form not found' });
    }
    res.status(200).json({ message: 'Contact form updated successfully', data: updatedContactForm });
  } catch (error) {
    console.error('Error updating contact form:', error);
    res.status(500).json({ message: 'Failed to update contact form', error });
  }
});

// DELETE route to delete a contact form by ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContactForm = await ContactForm.findByIdAndDelete(id);
    if (!deletedContactForm) {
      return res.status(404).json({ message: 'Contact form not found' });
    }
    res.status(200).json({ message: 'Contact form deleted successfully', data: deletedContactForm });
  } catch (error) {
    console.error('Error deleting contact form:', error);
    res.status(500).json({ message: 'Failed to delete contact form', error });
  }
});

module.exports = router;
