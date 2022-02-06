import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';
import { BUTTON_TYPE } from './Button.constants';

const props = {
  type: BUTTON_TYPE.BOX,
  onClick: jest.fn(),
};

const testContent = <div>Test content</div>;

describe('Tile component', () => {
  test('should render correctly', async () => {
    render(<Button {...props}>{testContent}</Button>);
    await screen.findByRole('button');
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  test('should render correctly with type prop', () => {
    const { rerender } = render(<Button {...props} type={BUTTON_TYPE.BOX} />);
    expect(screen.getByRole('button')).toHaveClass('button--box');
    rerender(<Button {...props} type={BUTTON_TYPE.ROUNDED} />);
    expect(screen.getByRole('button')).toHaveClass('button--rounded');
  });

  test('should fired click properly', async () => {
    render(<Button {...props}>{testContent}</Button>);
    await screen.findByRole('button');
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
