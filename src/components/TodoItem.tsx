import React from 'react';
import ItodoItemProps from '../Interfaces/ItodoItemProps';

// componente para renderizar uma tarefa
const TodoItem: React.FC<ItodoItemProps> = ({ todo, onToggle, onRemove }) => {
  return (
    <li className='flex justify-between' key={todo.id}>
      <span className={`${todo.completed ? 'line-through' : ''} text-xl md:text-3xl text-white`}>
        {todo.text}
      </span>
      <div className='flex'>
        <button className='btn' onClick={() => onToggle(todo.id)}>
          Done
        </button>
        <button className='btn' onClick={() => onRemove(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;