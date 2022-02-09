var express = require('express');
var router = express.Router();
const controller = require('../../controllers/api/leagues');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllLeagues)
      //.get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.postLeaguesCreate)
      .patch('/:id', controller.patchLeagueUpdate)
      .delete('/:id', controller.deleteLeague)

module.exports = router;