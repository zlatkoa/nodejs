const mongoose = require('mongoose');
const Agent = require('../models/agent');
const Player = require('../models/player');
const PDFPrinter = require('pdfmake');


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
  
  getView: async (req, res) => {
    const agent = await Agent.findById(req.params.id).populate('players');
    console.log(agent);
    res.render('agents/view', { agent });
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
  },

  print: 
  async (req, res) => {
    const agent = await Agent.findById(req.params.id).populate('players');
  
    var fonts = {
          Roboto: {
                normal: 'fonts/Roboto-Regular.ttf',
                bold: 'fonts/Roboto-Medium.ttf',
                italics: 'fonts/Roboto-Italic.ttf',
                bolditalics: 'fonts/Roboto-MediumItalic.ttf'
          }
    };
  
    const printer = new PDFPrinter(fonts);
    var fs = require('fs');
  
    let pdfBody = [['Name', 'Position']];
    
    agent.players.forEach(player => {
      pdfBody.push([`${player.first_name} ${player.last_name}`, player.position]);
    });
  
    var docDefinition = {
          content: [
                { text: `Agent with id #${agent._id}`, bold:true },
                { text: `Name: ${agent.first_name} ${agent.last_name}` },
                'Players:',
                {
                      table: {
                            widths: ['*', 100],
                            body: pdfBody
                      }
                }
          ]
    };

    var pdfDoc = printer.createPdfKitDocument(docDefinition);
  
    pdfDoc.pipe(fs.createWriteStream(`Report for ${agent.first_name} ${agent.last_name}.pdf`));
    pdfDoc.end()
    res.download(`Report for ${agent.first_name} ${agent.last_name}.pdf`);


  
    // var dataBuffer = Buffer.from(pdfDoc.toString('base64'));

    // res.writeHead(200, {
    //   'Content-Type': 'application/pdf',
    //   'Content-Disposition':'attachment;filename="filename.pdf"',
    //   'Content-Length': dataBuffer.length
    // });

    // console.log(dataBuffer.toString('utf-8'));
    // res.end(dataBuffer); 
    





    
 
  } 
}

