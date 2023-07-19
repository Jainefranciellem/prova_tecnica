import React, { useState } from 'react';
import Itodo from '../Interfaces/Itodo';
import btnAdd from '../image/btnAdd.png';
import TodoList from './TodoList';

const Todo: React.FC = () => {
// cria um estado para a lista de tarefas e um estado para o texto de entrada
  const [todos, setTodos] = useState<Itodo[]>([]);
  const [inputText, setInputText] = useState<string>('');

// função para adicionar uma nova tarefa à lista
  const handleAddTodo = () => {
    if (inputText !== '') {
      const newTodo: Itodo = {
        id: Date.now(),
        text: inputText,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputText('');
    }
  };

// função para alterar o estado de uma tarefa para concluída ou não concluída
  const handleToggleTodo = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

// função para remover uma tarefa da lista
  const handleRemoveTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className='flex items-center flex-col drop-shadow-xl bg-slate-800 w-11/12 m-9 md:w-1/2 p-5 rounded md:h-1/2 h-screen shadow-2xl'>
      <h1 className='text-2xl m-2 text-blue-400'>TODO</h1>
      <div className='flex w-full relative items-center justify-center flex-nowrap'>
        <input
        className='bg-slate-700 w-screen h-10 rounded p-3 text-white'
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleAddTodo}>
          <span className='sr-only'>Add Taks</span>
          <img className='  w-[2.8rem] h-[2.8rem] -top-[0.20rem] -right-1 absolute bg-blue-500 hover:bg-purple-400 rounded' src={btnAdd} alt="imagem do botão" />
        </button>
      </div>
      <TodoList todos={todos} onToggle={handleToggleTodo} onRemove={handleRemoveTodo} />
    </div>
  );
};

export default Todo;
