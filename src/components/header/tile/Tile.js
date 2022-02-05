import cs from 'classnames';

import InfoBox from './InfoBox/InfoBox';
import { tileType } from './tile.types';

import './tile.scss';

const Tile = ({ isOpen, infoBox, img, type, handleClick }) => {
  const tileClassName = cs('tile', { [`tile--${type}`]: type, 'tile--open': isOpen });
  return (
    <div className={tileClassName} onClick={handleClick}>
      <InfoBox {...infoBox} isOpen={isOpen} type={type} className='tile__info-box' />
      <img src={img} alt={`${infoBox.header} background`} className='tile__image' />
      <div className='tile__overlay'></div>
    </div>
  );
};

Tile.propTypes = tileType;

export default Tile;
