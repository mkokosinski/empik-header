import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HEADER_DATA } from './header.constants';
import Tile from './tile/Tile';

import './header.scss';

const Header = () => {
  const [activeTile, setActiveTile] = useState(0);

  const handleTileClick = (index) => {
    setActiveTile(index);
  };

  return (
    <header className='header'>
      {HEADER_DATA.map((tile, idx) => (
        <Tile
          infoBox={{
            header: tile.header,
            subheader: tile.subheader,
            additionalInfo: tile.additionalInfo,
            footerText: tile.footerText,
            buttonText: tile.buttonText,
          }}
          img={tile.img}
          isOpen={idx === activeTile}
          key={idx}
          type={tile.type}
          handleClick={() => handleTileClick(idx)}
        />
      ))}
    </header>
  );
};

Header.propTypes = {};

export default Header;
