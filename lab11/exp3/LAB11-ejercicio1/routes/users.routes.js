const express = require('express');
const router = express.Router();
const controller = require('../controllers/users.controller');

// CRUD
router.get('/', controller.getUsers);        // GET
router.post('/', controller.createUser);     // POST
router.put('/:id', controller.updateUser);   // PUT
router.delete('/:id', controller.deleteUser); // DELETE

module.exports = router;
