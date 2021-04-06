const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
  const { name, author, isComplete, date, uid } = req.body;

  let todo = new Todo({
    name,
    author,
    isComplete,
    date,
    uid,
  });

  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
