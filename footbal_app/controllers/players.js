const mongoose = require('mongoose');
const Player = require('../models/player');
const Agent = require('../models/agent');
const Club = require('../models/club')

module.exports ={
  getAllPlayers:
  async (req, res) => {
   const players = await Player.find().populate('agent').populate('club');
   res.render('players/index', { players });
 
  },

  getCreate: async (req, res) => {
    const agents = await Agent.find();
    const clubs = await Club.find();
    res.render('players/create', {agents, clubs});
  },

  getEdit: async (req, res) => {
    const player = await Player.findById(req.params.id).populate('club');
    const clubs = await Club.find();
    const agents = await Agent.find();
    res.render('players/edit', { player, clubs, agents });
  },

  postPlayersCreate: async (req, res) => {   
    const player = await Player.create(req.body);
    res.redirect('/players');
  },

  postEdit: async (req, res) =>{
    await Player.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/players');
  },

  patchPlayerUpdate: async (req, res) => {
    await Player.findByIdAndUpdate(req.params.id, req.body);
    const player = await Player.findById(req.params.id);
    res.send({
      error: false,
      message: `Player with id #${player._id} has been updated`,
      player: player
    });
  },

  deletePlayer: async (req,res)=>{
    await Player.findByIdAndDelete(req.params.id);
    res.send({});
  }

}