const mongoose = require('mongoose');
const Club = require('../models/club');
const Coach = require('../models/coach');
const League = require('../models/league');

module.exports ={
  getAllClubs:
  async (req, res) => {
    const Clubs = await Club.find().populate('coaches');
    res.send({
      error: false,
      message: 'All Clubs from the database',
      Clubs: Clubs
    });
  },

  postClubsCreate:
  async (req, res) => {
    const club = await Club.create(req.body);
    res.send({
      error: false,
      message: 'New club has been created',
      club: club
    });
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

  deleteClub:
  async (req, res) => {
    await Club.findByIdAndDelete(req.params.id);
    res.send({
      error: false,
      message: `Club with id #${req.params.id} has been deleted`
    });
  }
}