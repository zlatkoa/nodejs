const mongoose = require('mongoose');

const playerSchema = mongoose.Schema({
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
  },
  birth_date: {
    type: String,
    required: true
  },
  club: {
    type: mongoose.Types.ObjectId,
    ref:'club'  
  },
  agent: {
    type: mongoose.Types.ObjectId,
    ref:'agent'  
  }
}, { timestamps: true });

module.exports = mongoose.model('player', playerSchema);