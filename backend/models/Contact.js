// models/Contact.js

const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
}, {
  collection: 'contactForms' // Explicitly set collection name
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
