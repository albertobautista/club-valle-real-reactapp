import { IMenuOptions, ISocialNetworkOptions } from './interfaces';

const instagram = '/logos/social/instagram.svg';
const youtube = '/logos/social/youtube.svg';
const facebook = '/logos/social/facebook.svg';

export const MENU_OPTIONS: IMenuOptions[] = [
  {
    name: 'Inicio',
    href: '/',
    enabled: true,
  },
  {
    name: 'Nuestro club',
    href: '/nosotros',
    enabled: true,
  },
  {
    name: 'Eventos',
    href: '/eventos',
    enabled: false,
  },
  {
    name: 'Actividades',
    href: '/actividades',
    enabled: true,
  },
  {
    name: 'Contacto',
    href: '/contacto',
    enabled: false,
  },
  {
    name: 'Cursos de verano',
    href: '/cursos-de-verano',
    enabled: false,
  },
  {
    name: 'Tenis Camp',
    href: '/tenis-camp',
    enabled: false,
  },
  {
    name: 'Bolsa de trabajo',
    href: '/bolsa-de-trabajo',
    enabled: false,
  },
];

export const SOCIAL_NETWORKS: ISocialNetworkOptions[] = [
  {
    name: 'Instagram',
    icon: instagram,
    href: 'https://www.instagram.com/clubvallerealgdl/',
  },
  {
    name: 'Facebook',
    icon: facebook,
    href: 'https://www.facebook.com/clubvallerealgdl',
  },
  {
    name: 'Youtube',
    icon: youtube,
    href: 'https://www.youtube.com/@clubvallerealdeguadalajara3567',
  },
];
