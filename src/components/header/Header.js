import { useState } from 'react';

import Tile from './tile/Tile';
import { HEADER_DATA } from './header.constants';

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

export default Header;
