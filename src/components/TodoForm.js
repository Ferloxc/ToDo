import React, { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [todo, setTodo] = useState({
    name: '',
    description: '',
    estado: 'por_hacer',
    fechaCreacion: '',
    fechaCompletado: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name.trim() !== '') {
      onAdd({
        ...todo,
        id: Date.now().toString(),
      });
      setTodo({
        name: '',
        description: '',
        estado: 'por_hacer',
        fechaCreacion: '',
        fechaCompletado: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={todo.name}
        onChange={handleChange}
        placeholder="Nombre"
      />
      <textarea
        name="description"
        value={todo.description}
        onChange={handleChange}
        placeholder="Descripción"
      />
      <select name="estado" value={todo.estado} onChange={handleChange}>
        <option value="por_hacer">Por hacer</option>
        <option value="en_progreso">En progreso</option>
        <option value="completado">Completado</option>
      </select>
      <input
        type="text"
        name="fechaCreacion"
        value={todo.fechaCreacion}
        onChange={handleChange}
        placeholder="Fecha de Creación"
      />
      <input
        type="text"
        name="fechaCompletado"
        value={todo.fechaCompletado}
        onChange={handleChange}
        placeholder="Fecha de Completado"
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TodoForm;
