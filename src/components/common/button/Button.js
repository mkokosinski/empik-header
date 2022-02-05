import React from 'react';
import cs from 'classnames';

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

Button.propTypes = {};

export default Button;
