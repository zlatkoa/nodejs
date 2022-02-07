const mongoose = require('mongoose');
const Coach = require('../models/coach')

module.exports ={
  getAllCoaches:
  async (req, res) => {
    const coaches = await Coach.find();
    res.send({
      error: false,
      message: 'All Coaches from the database',
      coaches: coaches
    });
  },

  postCoachesCreate:
  async (req, res) => {
    const coach = await Coach.create(req.body);
    res.send({
      error: false,
      message: 'New agent has been created',
      coach: coach
    });
  },

  patchCoachUpdate:
  async (req, res) => {
    await Coach.findByIdAndUpdate(req.params.id, req.body);
    const coach = await Coach.findById(req.params.id);
    res.send({
      error: false,
      message: `Coach with id #${coach._id} has been updated`,
      coach: coach
    });
  },

  deleteCoach:
  async (req, res) => {
    await Coach.findByIdAndDelete(req.params.id);
    res.send({
      error: false,
      message: `Coach with id #${req.params.id} has been deleted`
    });
  }
}