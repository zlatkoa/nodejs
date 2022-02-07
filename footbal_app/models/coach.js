const mongoose = require('mongoose');

const coachSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  }

}, { timestamps: true });

module.exports = mongoose.model('coach', coachSchema);