import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Todo from '../../components/Todo';

describe('Componente Todo', () => {
  it('should render the expected text', () => {
    render(<Todo/>)
    expect(screen.getByRole('heading', {name: /todo/i})).toBeInTheDocument()
  });

  it('should render the input', () => {
    render(<Todo/>)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should render the botão', () => {
    render(<Todo/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should clear the input when clicking the button', () => {
    render(<Todo/>)
    const input = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    input.innerHTML = 'Teste';
    button.click();
    expect(input.innerHTML).toBe('');
  });

  it('should render image in the button', () => {
    render(<Todo/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
});



