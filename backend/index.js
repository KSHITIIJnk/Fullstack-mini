// index.js

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
const hotelRoutes = require('./routes/hotelRoutes');
const tourRoutes = require('./routes/tourRoutes');
const contactRoutes = require('./routes/contactRoutes');
const profileRoutes = require('./routes/profileRoutes'); // Import profile routes

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/travelbackend', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/hotels', hotelRoutes);
app.use('/tours', tourRoutes);
app.use('/api/contactForms', contactRoutes);
app.use('/profiles', profileRoutes); // Use profile routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
