import React from 'react';

const TodoFilter = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label>
        Filtrar por estado:
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="">Todos</option>
          <option value="completado">Completado</option>
          <option value="en_progreso">En progreso</option>
          <option value="por_hacer">Por hacer</option>
        </select>
      </label>
    </div>
  );
};

export default TodoFilter;
