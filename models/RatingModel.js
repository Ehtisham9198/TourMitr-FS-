// models/Rating.js
const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  placeId: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  }
});

module.exports = mongoose.model('Rating', ratingSchema);
