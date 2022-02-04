import imgTile1 from '../../assets/tina_akcjaspecjalna_220202.gif';
import imgTile2 from '../../assets/tina_fotoksiazka_220131_optimized.jpg';
import imgTile3 from '../../assets/tina_odbitki_220131_optimized.jpg';
import { TILE_TYPE } from './tile/tile.constants';

export const HEADER_DATA = [
  {
    header: 'Odbitki 10x15',
    subheader: 'błyszczące',
    additionalInfo: { label: '20% rabatu' },
    buttonText: 'Sprawdź',
    footerText: 'Oferta ważna do 06.02.2022r.',
    img: imgTile1,
    type: TILE_TYPE.SPECIAL,
  },
  {
    header: 'Fotoksiążka 20x20',
    buttonText: 'Sprawdź',
    footerText: 'Oferta ważna do 06.02.2022r.',
    img: imgTile2,
    type: TILE_TYPE.NORMAL,
  },
  {
    header: 'Plakaty',
    subheader: 'papier fotograficzny',
    buttonText: 'Sprawdź',
    footerText: 'Oferta ważna do 06.02.2022r.',
    img: imgTile3,
    type: TILE_TYPE.NORMAL,
  },
];
