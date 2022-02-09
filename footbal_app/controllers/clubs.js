const mongoose = require('mongoose');
const Club = require('../models/club');
const Coach = require('../models/coach');
const League = require('../models/league');

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

  postClubsCreate:
  async (req, res) => {
    const club = await Club.create(req.body);
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

  deleteClub:
  async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No club with id: ${id}`);
    await Player.findByIdAndDelete(req.params.id);
    res.redirect('/clubs');
  }
}