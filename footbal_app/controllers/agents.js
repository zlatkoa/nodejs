const mongoose = require('mongoose');
const Agent = require('../models/agent');
const Player = require('../models/player');

module.exports ={
  getAllAgents:
  async (req, res) => {
    const agents = await Agent.find().populate('players');
    res.render('agents/index', { agents });
  },

  getCreate: async (req, res) => {
    const agents = await Agent.find();
    const players = await Player.find();
    res.render('agents/create', {agents, players});
  },

  getEdit: async (req, res) => {
    const agent = await Agent.findById(req.params.id).populate('players');
    const players = await Player.find();
    res.render('agents/edit', { agent, players });
  },

  postAgentsCreate:
  async (req, res) => {
    const agent = await Agent.create(req.body);
    res.redirect('/agents');
  },

  postEdit: async (req, res) =>{
    await Agent.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/agents');
  },

  patchAgentUpdate:
  async (req, res) => {
    await Agent.findByIdAndUpdate(req.params.id, req.body);
    const agent = await Agent.findById(req.params.id);
    res.send({
      error: false,
      message: `Agent with id #${agent._id} has been updated`,
      agent: agent
    });
  },

  deleteAgent: 
  async (req, res) => {
    await Agent.findByIdAndDelete(req.params.id);
    res.send({});
  }
}


{/* <td><%= player.agent.first_name+ ' '+player.agent.last_name %></td> */}