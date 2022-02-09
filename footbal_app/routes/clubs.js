var express = require('express');
var router = express.Router();
const controller = require('../controllers/clubs');


router.get('/', controller.getAllClubs)
      .get('/create', controller.getCreate)
      //.get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.postClubsCreate)
      .patch('/:id', controller.patchClubUpdate)
      .post('/delete/:id', controller.deleteClub)

module.exports = router;