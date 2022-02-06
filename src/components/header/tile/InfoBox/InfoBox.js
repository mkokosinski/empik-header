import cs from 'classnames';

import Button from 'components/common/button/Button';
import InfoBoxAdditionalInfo from 'components/header/tile/InfoBox/InfoBoxAdditionalInfo';

import { BUTTON_TYPE } from 'components/common/button/Button.constants';
import { infoBoxType } from 'components/header/tile/tile.types';
import PlusIco from 'assets/icons/open-slider.svg';
import './infoBox.scss';

const InfoBox = ({ additionalInfo, buttonText, className, footerText, header, subheader, type, isOpen }) => {
  const showSubheader = subheader && isOpen;

  const boxClassName = cs('info-box', {
    'info-box--expanded': isOpen,
    'info-box--collapsed': !isOpen,
    [className]: className,
  });
  return (
    <div className={boxClassName} data-testid='header-infobox'>
      <h2 className='info-box__header info-box__header--short-info'>
        {header}
        <InfoBoxAdditionalInfo additionalInfo={additionalInfo} tileType={type} />
      </h2>

      <div className='info-box__container'>
        <div className='info-box__content'>
          <div className='info-box__text-wrapper'>
            <h2 className='info-box__header'>
              {header}
              {showSubheader && <div>{subheader}</div>}
            </h2>
            <InfoBoxAdditionalInfo additionalInfo={additionalInfo} tileType={type} />
          </div>

          <div className='info-box__footer'>
            <Button type={BUTTON_TYPE.BOX}>{buttonText}</Button>
            <span className='info-box__footer-text'>{footerText}</span>
          </div>
        </div>
        <Button className='info-box__plus-button'>
          <img alt='+' data-lazy={PlusIco} src={PlusIco} />
        </Button>
      </div>
    </div>
  );
};

InfoBox.propTypes = infoBoxType;

export default InfoBox;
