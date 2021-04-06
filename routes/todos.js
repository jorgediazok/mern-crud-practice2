const express = require('express');
const router = express.Router();

const TodoControllers = require('../controllers/todosControllers');

router.get('/', TodoControllers.getTodo);
router.post('/', TodoControllers.createTodo);
router.delete('/:id', TodoControllers.deleteTodo);
router.put('/:id', TodoControllers.updateTodo);

module.exports = router;
