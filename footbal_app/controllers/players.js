const mongoose = require('mongoose');
const Player = require('../models/player');
const Agent = require('../models/agent');
const Club = require('../models/club')

module.exports ={
  getAllPlayers:
  async (req, res) => {
   const players = await Player.find().populate('agent');
   res.render('players/index', { players });
 
  },

  getCreate: 
  (req, res) => {
    res.render('players/create');
  },

  postPlayersCreate:
  async (req, res) => {   
    const player = await Player.create(req.body);
    res.redirect('/players');
  },

  patchPlayerUpdate:
  async (req, res) => {
    await Player.findByIdAndUpdate(req.params.id, req.body);
    const player = await Player.findById(req.params.id);
    res.send({
      error: false,
      message: `Player with id #${player._id} has been updated`,
      player: player
    });
  },

  deletePlayer:
  async (req,res)=>{
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No player with id: ${id}`);
    await Player.findByIdAndDelete(req.params.id);
    res.redirect('/players');
  }

}