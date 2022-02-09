var express = require('express');
var router = express.Router();
const controller = require('../../controllers/api/coaches');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllCoaches)
      //.get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.postCoachesCreate)
      .patch('/:id', controller.patchCoachUpdate)
      .delete('/:id', controller.deleteCoach)

module.exports = router;