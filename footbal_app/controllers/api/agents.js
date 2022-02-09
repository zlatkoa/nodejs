const mongoose = require('mongoose');
const Agent = require('../../models/agent');
const Player = require('../../models/player');

module.exports ={
  getAllAgents:
  async (req, res) => {
    const agents = await Agent.find();
    res.send({
      error: false,
      message: 'All Agents from the database',
      agents: agents
    });
  },

  postAgentsCreate:
  async (req, res) => {
    const agent = await Agent.create(req.body);
    res.send({
      error: false,
      message: 'New agent has been created',
      agent: agent
    });
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
    res.send({
      error: false,
      message: `Agent with id #${req.params.id} has been deleted`
    });
  }
}