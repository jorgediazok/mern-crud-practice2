const express = require('express');
const router = express.Router();

const TodoControllers = require('../controllers/todosControllers');

router.get('/', TodoControllers.getTodo);
router.post('/', TodoControllers.createTodo);

module.exports = router;
