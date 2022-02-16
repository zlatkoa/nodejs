var express = require('express');
var router = express.Router();
const controller = require('../controllers/agents');

// CRUD operations: Create Read Update Delete

router.get('/', controller.getAllAgents)
      .get('/create', controller.getCreate)
      .get('/:id', controller.getEdit)
      .get('/:id/view', controller.getView)
      .post('/edit/:id', controller.postEdit)
      .post('/', controller.postAgentsCreate)
      .patch('/:id', controller.patchAgentUpdate)
      .delete('/:id', controller.deleteAgent)

module.exports = router;