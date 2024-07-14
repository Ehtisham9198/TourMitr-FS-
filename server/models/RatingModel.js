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
  },
  userId: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Rating', ratingSchema);
