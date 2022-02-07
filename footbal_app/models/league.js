const mongoose = require('mongoose');

const leagueSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
  
}, { timestamps: true });

module.exports = mongoose.model('league', leagueSchema);