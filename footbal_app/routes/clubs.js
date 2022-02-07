var express = require('express');
var router = express.Router();
const controller = require('../controllers/clubs');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllClubs)
      //.get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.postClubsCreate)
      .patch('/:id', controller.patchClubUpdate)
      .delete('/:id', controller.deleteClub)

module.exports = router;