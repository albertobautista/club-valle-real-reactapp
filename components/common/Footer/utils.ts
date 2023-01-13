import { getActivitiesByType } from '@utils/getActivitiesByType';

export const NAV_ENTRIES = [
  {
    label: 'Actividades deportivas',
    isMenu: true,
    options: getActivitiesByType('sports'),
  },
  {
    label: 'Actividades culturales',
    isMenu: true,
    options: getActivitiesByType('cultural'),
  },

  {
    label: 'Contáctanos',
    isMenu: false,
    options: [
      {
        name: '(33) 38320257 - (33) 38320136',
        href: '/futbol',
      },
      {
        name: 'clubvallerealredes@gmail.com',
        href: '/basquet',
      },
      {
        name: 'Av. Paseo San Arturo Norte',
        href: '/basquet',
      },
    ],
  },
];
