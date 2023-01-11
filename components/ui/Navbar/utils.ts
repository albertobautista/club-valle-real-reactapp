import { IMenuOptions, ISocialNetworkOptions } from './interfaces';

const instagram = '/logos/social/instagram.svg';
const youtube = '/logos/social/youtube.svg';
const facebook = '/logos/social/facebook.svg';

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
    name: 'Actividades',
    href: '/actividades',
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
