import React, { useState } from 'react';
import AddTodos from './AddTodos';
import ListTodos from './ListTodos';

const Todos = () => {
  const [todo, setTodo] = useState({ name: '', isComplete: false });

  return (
    <div>
      <AddTodos todo={todo} setTodo={setTodo} />
      <ListTodos setTodo={setTodo} />
    </div>
  );
};

export default Todos;
