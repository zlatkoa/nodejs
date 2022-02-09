var express = require('express');
var router = express.Router();
const controller = require('../../controllers/api/players');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllPlayers)
      //.get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.postPlayersCreate)
      .patch('/:id', controller.patchPlayerUpdate)
      .delete('/:id', controller.deletePlayer)

module.exports = router;