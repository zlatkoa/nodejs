const mongoose = require('mongoose');
const Club = require('../models/club');
const Coach = require('../models/coach');
const League = require('../models/league');
const Player = require('../models/player');
const Agent = require('../models/agent');

module.exports ={
  getAllClubs:
  async (req, res) => {
    const clubs = await Club.find().populate('coaches');
    res.render('clubs/index', { clubs });
    // res.send({
    //   error: false,
    //   message: 'All Clubs from the database',
    //   Clubs: Clubs
    // });
  },
  
  getCreate:
  (req,res) => {
    res.render('clubs/create');
  },

  getEdit: async (req, res) => {
    const club = await Club.findById(req.params.id);
    const players = await Player.find();
    const agents = await Agent.find();
    const leagues = await League.find();
    const coaches = await Coach.find();
    res.render('clubs/edit', { players, club, agents, leagues, coaches });
  },

  postClubsCreate:
  async (req, res) => {
    const club = await Club.create(req.body);
    res.redirect('/clubs');
  },

  postEdit: async (req, res) =>{
    await Club.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/clubs');
  },

  patchClubUpdate:
  async (req, res) => {
    await Club.findByIdAndUpdate(req.params.id, req.body);
    const club = await Club.findById(req.params.id);
    res.send({
      error: false,
      message: `Club with id #${club._id} has been updated`,
      club: club
    });
  },

  deleteClub: async (req,res)=>{
    await Club.findByIdAndDelete(req.params.id);
    res.send({});
  }
}