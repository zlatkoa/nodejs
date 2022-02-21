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
    if (req.body.club == '') {
      req.body.club = null;
    }

    const player = await Player.create(req.body);

    if (req.body.club) {
      await Club.findByIdAndUpdate(req.body.club, {
        $push: { players: player }
      });
    }

    if (req.body.agent == '') {
      req.body.agent = null;
    }

    if (req.body.agent) {
      await Agent.findByIdAndUpdate(req.body.agent, {
        $push: { players: player }
      });
    }

    res.redirect('/players');
  },

  postEdit: async (req, res) =>{
    if (req.body.club == '') {
      req.body.club = null;
    }

    const player = await Player.findByIdAndUpdate(req.params.id, req.body);

    if (req.body.club) {
      let foundPlayers = await Club.find({ players: player });

      if (foundPlayers.length == 0) {
        await Club.findByIdAndUpdate(req.body.club, {
          $push: { players: player }
        });
      }
    }

    if (req.body.agent == '') {
      req.body.agent = null;
    }

    if (req.body.agent) {
      let foundAgents = await Agent.find({ players: player });
      let currentAgent = await Agent.find({players:player});


      if (currentAgent.length == 0) {
        console.log("This is the edit lenght=0 "+currentAgent);
        await Agent.findByIdAndUpdate(req.body.agent, {
          $push: { players: player }
          
        });
      }else{
        //await Agent.findByIdAndUpdate(req.params.id, {
          //$pull: {players :player}
        //});        
        await Agent.findByIdAndUpdate(req.body.agent, {
          $push: { players: player }
        });
        console.log("This is the edit vo else"+foundAgents);
    
    }

    res.redirect('/players');
  }
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