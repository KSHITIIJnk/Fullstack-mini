const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Remove email configuration and related code
// const nodemailer = require('nodemailer');
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // or another email service
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// Endpoint to send email - removed
// app.post('/api/send-confirmation-email', async (req, res) => {
//   const { email, bookingSummary } = req.body;

//   // Calculate number of days
//   const calculateDays = (checkInDate, checkOutDate) => {
//     const checkIn = new Date(checkInDate);
//     const checkOut = new Date(checkOutDate);
//     const timeDifference = checkOut - checkIn;
//     return timeDifference / (1000 * 3600 * 24);
//   };

//   const numberOfDays = calculateDays(bookingSummary.checkInDate, bookingSummary.checkOutDate);

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Hotel Booking Confirmation',
//     text: `Dear ${bookingSummary.name},\n\nYour booking at ${bookingSummary.hotelName} has been confirmed.\n\nDetails:\nHotel Name: ${bookingSummary.hotelName}\nCheck-In Date: ${bookingSummary.checkInDate}\nCheck-Out Date: ${bookingSummary.checkOutDate}\nTotal Price: $${bookingSummary.totalPrice}\nNumber of Rooms: ${bookingSummary.numberOfRooms}\nRoom Type: ${bookingSummary.roomType}\nNumber of Days: ${numberOfDays}\n\nThank you for booking with us!`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     res.status(500).send('Error sending email');
//   }
// });

// Routes
const hotelsRoutes = require('./routes/hotels');
const toursRoutes = require('./routes/tours');
const contactFormsRoutes = require('./routes/contactForms'); // Add this line

app.use('/api/hotels', hotelsRoutes);
app.use('/api/tours', toursRoutes);
app.use('/api/contactForms', contactFormsRoutes); // Add this line

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
