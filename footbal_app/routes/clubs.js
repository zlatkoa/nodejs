var express = require('express');
var router = express.Router();
const controller = require('../controllers/clubs');


router.get('/', controller.getAllClubs)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getEdit)
      .get('/:id/view', controller.getView)
      .post('/', controller.postClubsCreate)
      .post('/edit/:id', controller.postEdit)
      .patch('/:id', controller.patchClubUpdate)
      .delete('/:id', controller.deleteClub)

module.exports = router;