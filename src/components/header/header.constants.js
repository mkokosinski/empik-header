import imgTile1 from '../../assets/images/tina_odbitki220204_zmniejszona.jpg';
import imgTile2 from '../../assets/images/tina_fotoksiazka_220204_zmniejszona.jpg';
import imgTile3 from '../../assets/images/tina_plakaty_220201_optimized.jpg';
import { TILE_TYPE } from './tile/tile.constants';

export const HEADER_DATA = [
  {
    header: 'Odbitki 10x15',
    subheader: 'błyszczące',
    additionalInfo: { label: 'od 0,20zł/szt.' },
    buttonText: 'Sprawdź',
    footerText: 'Oferta ważna do 06.02.2022r.',
    img: imgTile1,
    type: TILE_TYPE.NORMAL,
  },
  {
    header: 'Fotoksiążka 20x20',
    additionalInfo: { oldPrice: '45,90', newPrice: '27' },
    buttonText: 'Sprawdź',
    footerText: 'Oferta ważna do 06.02.2022r.',
    img: imgTile2,
    type: TILE_TYPE.PROMO_PRICE,
  },
  {
    header: 'Plakaty',
    additionalInfo: { label: '-24%' },
    subheader: 'papier fotograficzny',
    buttonText: 'Sprawdź',
    footerText: 'Oferta ważna do 06.02.2022r.',
    img: imgTile3,
    type: TILE_TYPE.NORMAL,
  },
];
