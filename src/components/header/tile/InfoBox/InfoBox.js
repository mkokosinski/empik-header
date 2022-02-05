import React from 'react';
import cs from 'classnames';
import { infoBoxType } from '../tile.types';

import './infoBox.scss';
import Button from 'components/common/button/Button';
import { BUTTON_TYPE } from 'components/common/button/Button.constants';
import InfoBoxAdditionalInfo from './InfoBoxAdditionalInfo';

const InfoBox = ({ additionalInfo, buttonText, className, footerText, header, subheader, type, isOpen }) => {
  const showSubheader = subheader && isOpen;

  const boxClassName = cs('info-box', {
    'info-box--expanded': isOpen,
    'info-box--collapsed': !isOpen,
    [className]: className,
  });
  return (
    <div className={boxClassName}>
      <h2 className='info-box__header info-box__header--short-info'>
        {header}
        <InfoBoxAdditionalInfo additionalInfo={additionalInfo} tileType={type} />
      </h2>

      <div className='info-box__container'>
        <div className='info-box__content'>
          <h2 className='info-box__header'>
            {header}
            {showSubheader && <div>{subheader}</div>}
          </h2>
          <InfoBoxAdditionalInfo additionalInfo={additionalInfo} tileType={type} />

          <div className='info-box__footer'>
            <Button type={BUTTON_TYPE.BOX}>{buttonText}</Button>
            <span className='info-box__footer-text'>{footerText}</span>
          </div>
        </div>
        <Button className='info-box__plus-button'>
          <img
            className='lazy-img'
            alt='+'
            data-lazy='https://static.empikfoto.pl/slider/open-slider.svg'
            src='https://static.empikfoto.pl/slider/open-slider.svg'
          />
        </Button>
      </div>
    </div>
  );
};

InfoBox.propTypes = infoBoxType;

export default InfoBox;
