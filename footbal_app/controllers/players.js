const mongoose = require('mongoose');
const Player = require('../models/player');
const Agent = require('../models/agent');
const Club = require('../models/club')
const nodemailer = require('nodemailer');

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
      let currentAgent = await Agent.find({players:player});
      if (currentAgent.length == 0) {
        await Agent.findByIdAndUpdate(req.body.agent, {
          $push: { players: player }
        });
      }
      else{
        const player = await Player.findById(req.params.id);
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body);
        await Agent.updateOne(await Agent.findById(player.club), {
          $pull: { players: player._id },
        });
        await Agent.findByIdAndUpdate(req.body.agent, {
          $push: { players: updatedPlayer },
        });    
      }
      
    res.redirect('/players');
  }
},
  sendEmail:
  async (req, res) =>{
    const player = await Player.findById(req.params.id).populate('agent');
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'sydney.kessler31@ethereal.email',
        pass: 'uHxsYc1EgFZ1mg3pbX'
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Zlatko Avramovski" <zlatko@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Email for "+player.first_name+" "+player.last_name, // Subject line
      text: "Istiot text od HTML samo vo plain format bez tagovi", // plain text body
      html: "<h1>Email poraka za fudbalerot "+player.first_name+" "+player.last_name+"</h1></br></br><p>"+player.first_name+" "+player.last_name+" igra na pozicija "+player.position+" roden e na "+player.birth_date+". Momentalno igra vo clubot "+player.club+" i e zastapuvan od agentot "+player.agent.first_name+" "+player.agent.last_name+"</p>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.render('/players');

    
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



// const player = await Player.findById(req.params.id);
//   const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body);
//   await Agent.updateOne(await Agent.findById(player.club), {
//     $pull: { players: player._id },
//   });


//   await Agent.findByIdAndUpdate(req.body.agent, {
//     $push: { players: updatedPlayer },
//   });