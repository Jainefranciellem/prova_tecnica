import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import TodoList from '../../components/TodoList';
import mockTodos from './mocks/mockTodos';


describe('Componente TodoList', () => {
  afterEach(() => { 
    vi.resetAllMocks();
  });
  const mockOnToggle = vi.fn();
  const mockOnRemove = vi.fn();

  it('deve renderizar corretamente as tarefas', () => {
    render(<TodoList todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />);
  

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
  });

  it('deve chamar a função onToggle corretamente', () => {
    render(<TodoList todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />);

    const button = screen.getAllByRole('button', {name: /done/i})
    button[0].click();
  
    expect(mockOnToggle).toHaveBeenCalledWith(1);
  });

  it('deve chamar a função onRemove corretamente', () => {
    render(<TodoList todos={mockTodos} onToggle={mockOnToggle} onRemove={mockOnRemove} />);

  
    const button = screen.getAllByRole('button', { name: /delete/i });
    const button1 = button[0]! as HTMLButtonElement;

      button1.click();
      expect(mockOnRemove).toHaveBeenCalledWith(1);
  });
});
