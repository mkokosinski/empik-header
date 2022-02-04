import React from 'react';
import cs from 'classnames';
import { infoBoxType } from '../tile.types';

import './infoBox.scss';

const InfoBox = ({ additionalInfo, buttonText, className, footerText, header, subheader, isOpen }) => {
  const showSubheader = subheader && isOpen;
  const boxClassName = cs('info-box', {
    'info-box--expanded': isOpen,
    'info-box--collapsed': !isOpen,
    [className]: className,
  });
  return (
    <div className={boxClassName}>
      <h2 className='info-box__header info-box__header--short-info'>{header}</h2>

      <div className='info-box__container'>
        <div className='info-box__content'>
          <h2 className='info-box__header'>
            {header}
            {showSubheader && <div>{subheader}</div>}
          </h2>
          <div className='info-box__additional-info'>asdasd</div>
          {/* <div>{additionalInfo}</div> */}
          <div className='info-box__footer'>
            <button>{buttonText}</button>
            <div>{footerText}</div>
          </div>
        </div>
        <div className='info-box__plus-button'>+</div>
      </div>
    </div>
  );
};

InfoBox.propTypes = infoBoxType;

export default InfoBox;
