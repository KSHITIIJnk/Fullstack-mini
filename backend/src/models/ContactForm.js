const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactFormSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { type: String, required: true },
  message: { type: String, required: true }
});

const ContactForm = mongoose.model('ContactForm', contactFormSchema);

module.exports = ContactForm;
