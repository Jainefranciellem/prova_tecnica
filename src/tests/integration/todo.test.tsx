import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { it, describe, expect } from 'vitest';
import Todo from '../../components/Todo';

describe('Test Integration - To-Do-List', () => {
  it('should correctly render tasks and interact with them', async () => {
    const user = userEvent.setup();
    render(<Todo />);

    // Adiciona uma nova tarefa
    const inputElement = screen.getByRole('textbox');
    const addButton = screen.getByRole('button', {name: /Add Taks/i})
  
    // Digita o texto da tarefa no input
    await user.type(inputElement, 'Task 1');
  
    // Clica no botão de adicionar
    await user.click(addButton);
  
    // Verifica se a tarefa foi adicionada corretamente
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    
    // Marca a tarefa como concluída
    const buttonDone = screen.getByRole('button', {name: /done/i})
    await user.click(buttonDone);
  
    // Verifica se a tarefa foi marcada como concluída
    const todoText = screen.getByText('Task 1')
    expect(todoText).toHaveClass('line-through');
  
    // Remove a tarefa da lista
    const buttoRemove = screen.getByRole('button', {  name: /delete/i});
    await user.click(buttoRemove);
  
    // Verifica se a tarefa foi removida corretamente
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
  });
});