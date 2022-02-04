import PropTypes from 'prop-types';
import { TILE_TYPE } from './tile.constants';

export const additionalInfoType = PropTypes.shape({
  oldPrice: PropTypes.string,
  newPrice: PropTypes.string,
  label: PropTypes.string,
});

export const infoBoxType = PropTypes.shape({
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  additionalInfo: additionalInfoType,
  footerText: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
});

export const tileType = PropTypes.shape({
  infoBox: infoBoxType,
  img: PropTypes.string,
  type: PropTypes.oneOf(Object.values(TILE_TYPE)),
  isOpen: PropTypes.bool,
});
