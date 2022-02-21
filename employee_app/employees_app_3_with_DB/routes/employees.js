var express = require('express');
var router = express.Router();
const Employee = require('../models/employee');
const controler = require('../controller/employees');

// CRUD operations: Create Read Update Delete

router.get('/', controler.getAllEmployees)
      .get('/:id', controler.getEmployeeById)
      .post('/', controler.postNewEmployee)
      .patch('/:id', controler.patchEmployee)
      .delete('/:id', controler.deleteEmployee)

module.exports = router;

