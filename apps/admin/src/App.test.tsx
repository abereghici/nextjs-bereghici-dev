import { render, screen } from '@testing-library/react';

import App from './App';

test('renders Coming Soon message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Coming Soon/i);
  expect(linkElement).toBeInTheDocument();
});
