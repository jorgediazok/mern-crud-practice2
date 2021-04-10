const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const TodoControllers = require('../controllers/todosControllers');

router.get('/', TodoControllers.getTodo);
router.post('/', TodoControllers.createTodo);
router.delete('/:id', TodoControllers.deleteTodo);
router.put('/:id', TodoControllers.updateTodo);
router.patch('/:id', TodoControllers.patchTodo);

module.exports = router;
