const mongoose = require('mongoose');

const agentSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  players: {
    type: mongoose.Types.ObjectId,
    ref:'player'  
  }

}, { timestamps: true });

module.exports = mongoose.model('agent', agentSchema);