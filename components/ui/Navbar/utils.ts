import { IMenuOptions, ISocialNetworkOptions } from './interfaces';

const instagram = '/logos/social/instagram.svg';
const youtube = '/logos/social/youtube.svg';

export const MENU_OPTIONS: IMenuOptions[] = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'Nuestro club',
    href: '/nosotros',
  },
  {
    name: 'Eventos',
    href: '/eventos',
  },
  {
    name: 'Deportes',
    href: '/desportes',
  },
  {
    name: 'Culturales',
    href: '/culturales',
  },
  {
    name: 'Contacto',
    href: '/contacto',
  },
];

export const SOCIAL_NETWORKS: ISocialNetworkOptions[] = [
  {
    name: 'Instagram',
    icon: instagram,
    href: 'https://www.instagram.com/kingsleague',
  },
  {
    name: 'Youtube',
    icon: youtube,
    href: 'https://www.youtube.com/@KingsLeagueOfficial',
  },
  {
    name: 'Youtube',
    icon: youtube,
    href: 'https://www.youtube.com/@KingsLeagueOfficial',
  },
];
