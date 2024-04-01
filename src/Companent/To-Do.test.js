import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../Todo/TodoApp'; 

describe('TodoApp Tests', () => {
  test('komponentin duzgun render edildiğini yoxla', () => {
    render(<TodoApp />);
    expect(screen.getByPlaceholderText(/What do you need to do?/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();
  });

  test('yeni edilcek siyahisina add elemeyi yoxla', () => {
    render(<TodoApp />);
    // Input ve buton//////
    const inputElement = screen.getByPlaceholderText(/What do you need to do?/i);
    const addButton = screen.getByRole('button', { name: /Add/i });

   
    fireEvent.change(inputElement, { target: { value: 'Learn React Testing' } });
    fireEvent.click(addButton);

    // siyahiya edilecek olanlari elave etmeyi////
    expect(screen.getByText(/Learn React Testing/i)).toBeInTheDocument();
  });

  test('inputu placeholder silmek', () => {
    render(<TodoApp />);
    const inputElement = screen.getByPlaceholderText(/What do you need to do?/i);
    const addButton = screen.getByRole('button', { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: 'Learn React Testing' } });
    fireEvent.click(addButton);

    // Input placeholderinin bos olub olmadigini yoxlayir///
    expect(inputElement.value).toBe('');
  });
});

