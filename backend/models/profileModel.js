// profileModel.js

const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,   
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String  // Assuming storing image URL
  }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
