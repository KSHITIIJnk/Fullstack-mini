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
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
const hotelsRoutes = require('./routes/hotels');
const toursRoutes = require('./routes/tours');
const cartRoutes = require('./routes/cart'); // Add this line

app.use('/api/hotels', hotelsRoutes);
app.use('/api/tours', toursRoutes);
app.use('/api/cart', cartRoutes); // Add this line

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
