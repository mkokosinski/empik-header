import cs from 'classnames';

import { headerTypes } from '../types';
import InfoBox from './InfoBox/InfoBox';

import './tile.scss';

const Tile = ({ isOpen, infoBox, img, type, handleClick }) => {
  const tileClassName = cs('tile', { [`tile--${type}`]: type, 'tile--open': isOpen });
  return (
    <div className={tileClassName} onClick={handleClick}>
      <InfoBox {...infoBox} isOpen={isOpen} className='tile__info-box' />
      <img src={img} alt={`${infoBox.header} background`} className='tile__image' />
      <div className='tile__overlay'></div>
    </div>
  );
};

Tile.propTypes = headerTypes.tile;

export default Tile;
