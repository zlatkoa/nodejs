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
    ref:'club' ,
    type: mongoose.Types.ObjectId
    
  },
  agent: {
    ref:'agent',
    type: mongoose.Types.ObjectId
      
  }
}, { timestamps: true });

module.exports = mongoose.model('player', playerSchema);