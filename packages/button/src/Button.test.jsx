import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './Button';

test('it renders', () => {
  render(<App />);
  const buttonElement = screen.getByText(/click me/i);
  expect(buttonElement).toBeInTheDocument();
});
