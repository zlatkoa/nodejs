const mongoose = require('mongoose');
const League = require('../../models/league')

module.exports ={
  getAllLeagues:
  async (req, res) => {
    const leagues = await League.find();
    res.send({
      error: false,
      message: 'All Leaguees from the database',
      leagues: leagues
    });
  },

  postLeaguesCreate:
  async (req, res) => {
    const leagues = await League.create(req.body);
    res.send({
      error: false,
      message: 'New league has been created',
      leagues: leagues
    });
  },

  patchLeagueUpdate:
  async (req, res) => {
    await League.findByIdAndUpdate(req.params.id, req.body);
    const leagues = await League.findById(req.params.id);
    res.send({
      error: false,
      message: `League with id #${leagues._id} has been updated`,
      leagues: leagues
    });
  },

  deleteLeague:
  async (req, res) => {
    await League.findByIdAndDelete(req.params.id);
    res.send({
      error: false,
      message: `League with id #${req.params.id} has been deleted`
    });
  }
}