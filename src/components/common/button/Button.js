import PropTypes from 'prop-types';
import cs from 'classnames';

import { BUTTON_TYPE } from './Button.constants';

import './button.scss';

const Button = ({ className, children, type, onClick }) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const buttonClass = cs('button', { [`button--${type}`]: type, [className]: className });
  return (
    <button className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.oneOf(Object.values(BUTTON_TYPE)),
  onClick: PropTypes.func,
};

export default Button;
