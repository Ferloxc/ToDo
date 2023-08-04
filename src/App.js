import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoFilter from './components/TodoFilter';
import todosData from './data/todosData';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState(todosData);
  const [filter, setFilter] = useState('');

  const handleToggle = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, estado: "completado" } : todo
      )
    );
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleDeleteTodo = (id) => {
    console.log("hellooooo");
    setTodos(todos.filter((todo) => todo.id !== id));
  };



  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredTodos = filter
    ? todos.filter((todo) => todo.estado === filter)
    : todos;

  return (
    <div>
      <h1>ToDo's</h1>
      <TodoFilter filter={filter} onFilterChange={handleFilterChange} />
      <TodoList todos={filteredTodos} onToggle={handleToggle} onDelete={handleDeleteTodo} />
      <TodoForm onAdd={handleAddTodo} />
    </div>
  );
};

export default App;
