import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from '../../components/Header';

describe('Component Header', () => {
  it('should render the expected text', () => {
    render(<Header/>)
    expect(screen.getByRole('heading', { name: /welcome to your to-do list!/i})).toBeInTheDocument()
  });
});