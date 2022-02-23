var express = require('express');
var router = express.Router();
const controller = require('../controllers/players');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllPlayers)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getEdit)
      .post('/', controller.postPlayersCreate)
      .post('/edit/:id', controller.postEdit)
      .post('/mail/:id', controller.sendEmail)
      .patch('/:id', controller.patchPlayerUpdate)
      .delete('/:id', controller.deletePlayer)


module.exports = router;