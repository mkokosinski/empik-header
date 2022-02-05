import React from 'react';
import PropTypes from 'prop-types';
import { TILE_TYPE } from '../tile.constants';
import { additionalInfoType } from '../tile.types';

const InfoBoxAdditionalInfo = ({ additionalInfo, tileType }) => {
  const className = `additional-info info-box__additional-info info-box__additional-info--${tileType}`;
  switch (tileType) {
    case TILE_TYPE.PROMO_PRICE:
      return (
        <div className={className}>
          <span className='additional-info__old-price'>
            od <span className='additional-info__old-price-value'>{additionalInfo.oldPrice}</span>
          </span>
          <span className='additional-info__new-price'> {`${additionalInfo.newPrice} zł`}</span>
        </div>
      );
    default:
      return <div className={className}>{additionalInfo.label}</div>;
  }
};

InfoBoxAdditionalInfo.propTypes = {
  additionalInfo: additionalInfoType,
  tileType: PropTypes.oneOf(Object.values(TILE_TYPE)),
};

export default InfoBoxAdditionalInfo;
