var express = require('express');
var router = express.Router();
const controller = require('../controllers/players');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllPlayers)
      .get('/create', controller.getCreate)
      //.get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.postPlayersCreate)
      .patch('/:id', controller.patchPlayerUpdate)
      .post('/delete/:id', controller.deletePlayer)

module.exports = router;