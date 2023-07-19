import React from 'react';
import Itodo from '../Interfaces/Itodo';
import TodoItem from './TodoItem';

// interface para definir os tipos de propriedades que o componente TodoList pode receber
interface TodoListProps {
  todos: Itodo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
}

// componente TodoList
const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className='m-6 p-4 w-full h-full overflow-auto '>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
};

export default TodoList;