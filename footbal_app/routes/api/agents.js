var express = require('express');
var router = express.Router();
const controller = require('../../controllers/api/agents');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllAgents)
      //.get('/:id', controller.getAllPlayersWithId)
      .post('/', controller.postAgentsCreate)
      .patch('/:id', controller.patchAgentUpdate)
      .delete('/:id', controller.deleteAgent)

module.exports = router;