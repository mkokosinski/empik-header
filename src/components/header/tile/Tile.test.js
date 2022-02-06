import { render, screen } from '@testing-library/react';

import Tile from './Tile';

import { HEADER_DATA } from '../header.constants';
import { TILE_TYPE } from './tile.constants';

const { img, type, ...infoBox } = HEADER_DATA[0];

const props = {
  infoBox,
  img,
  isOpen: false,
  type,
  handleClick: jest.fn(),
};

describe('Tile component', () => {
  test('should render correctly', async () => {
    render(<Tile {...props} />);
    await screen.findByTestId('header-tile');
    expect(screen.getByTestId('header-tile')).toBeInTheDocument();
  });

  test('should render correctly with isOpen prop', async () => {
    render(<Tile {...props} isOpen />);
    expect(screen.getByTestId('header-tile')).toHaveClass('tile--open');
  });

  test('should render correctly with type prop', async () => {
    render(<Tile {...props} type={TILE_TYPE.PROMO_PRICE} />);
    expect(screen.getByTestId('header-tile')).toHaveClass(`tile--${TILE_TYPE.PROMO_PRICE}`);
  });
});
