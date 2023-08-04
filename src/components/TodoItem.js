import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const handleToggle = () => {
    onToggle(todo.id);
  };

  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span>{todo.name}</span>
      <button onClick={handleDelete}>Eliminar</button>
    </div>
  );
};

export default TodoItem;
