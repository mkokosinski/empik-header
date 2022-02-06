import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header component', () => {
  test('should render correctly', async () => {
    render(<Header />);
    await screen.findByRole('banner');
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('should render tiles correctly', async () => {
    render(<Header />);
    expect(screen.getAllByTestId('header-tile').length).toBe(3);
  });
});
