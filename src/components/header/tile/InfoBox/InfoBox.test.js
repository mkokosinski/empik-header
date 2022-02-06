import { render, screen } from '@testing-library/react';
import { HEADER_DATA } from 'components/header/header.constants';

import InfoBox from './InfoBox';

const { img, type, ...infoBox } = HEADER_DATA[0];

const props = infoBox;

describe('InfoBox component', () => {
  test('should render correctly', async () => {
    render(<InfoBox {...props} />);
    await screen.findByTestId('header-infobox');
    expect(screen.getByTestId('header-infobox')).toBeInTheDocument();
  });

  test('should render correctly with isOpen prop', () => {
    const { rerender } = render(<InfoBox {...props} isOpen />);
    expect(screen.getByTestId('header-infobox')).toHaveClass('info-box--expanded');
    rerender(<InfoBox {...props} isOpen={false} />);
    expect(screen.getByTestId('header-infobox')).toHaveClass('info-box--collapsed');
  });

  test('should render correctly with custom classname', () => {
    const mockClassName = 'custom-classname';
    render(<InfoBox {...props} className={mockClassName} />);
    expect(screen.getByTestId('header-infobox')).toHaveClass(mockClassName);
  });
});
