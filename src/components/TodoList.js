import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggle }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </div>
  );
};

export default TodoList;
