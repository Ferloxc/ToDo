import React from 'react';

const TodoItem = ({ todo, onDelete, onToggle }) => {
 
  const handleToggle = () => {
    onToggle(todo.id);
  };
  
  const handleDelete = () => {
    console.log("hasdasdasdd")
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