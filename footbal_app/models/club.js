const mongoose = require('mongoose');

const clubSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  players: {
    type: mongoose.Types.ObjectId,
    ref:'player' 
  },
  year: {
    type: String,
    required: true
  },
  town: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  league: {
    type: mongoose.Types.ObjectId,
    ref:'league'  
  },
  coaches: {
    type: mongoose.Types.ObjectId,
    ref:'coach'  
  }

}, { timestamps: true });

module.exports = mongoose.model('club', clubSchema);