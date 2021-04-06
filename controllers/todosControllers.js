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

  todo.save();
};
