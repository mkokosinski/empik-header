import PropTypes from 'prop-types';
import { TILE_TYPE } from './tile.constants';

export const additionalInfoType = {
  oldPrice: PropTypes.string,
  newPrice: PropTypes.string,
  label: PropTypes.string,
};

export const infoBoxType = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  additionalInfo: PropTypes.shape(additionalInfoType),
  footerText: PropTypes.string,
  buttonText: PropTypes.string,
};

export const tileType = {
  infoBox: PropTypes.shape(infoBoxType),
  img: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TILE_TYPE)),
  isOpen: PropTypes.bool,
};
