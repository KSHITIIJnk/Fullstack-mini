const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/travel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.json());

// Routes
const hotelsRouter = require('./routes/hotels');
const toursRouter = require('./routes/tours');

app.use('/api/hotels', hotelsRouter);
app.use('/api/tours', toursRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
