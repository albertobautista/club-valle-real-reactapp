import { IActivity } from 'interfaces';
const futbol = '/activities/futbol.jpg';
const natacion = '/activities/natacion-infantil.png';
const tenis = '/activities/tenis.jpg';
const spinning = '/activities/spinning.jpg';
const fitnessGrupal = '/activities/fitness-grupal.png';
const atletismo = '/activities/atletismo.png';
const box = '/activities/box.png';
const crossfit = '/activities/crossfit.png';
const natacionAdultos = '/activities/natacion-adultos.png';
const yoga = '/activities/yoga.png';
const taekwondo = '/activities/taekwondo.png';

const jazz = '/activities/jazz.png';

export const activities: IActivity[] = [
  {
    slug: 'futbol',
    label: 'Fútbol',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: futbol,
    instructor: 'Alberto Chavez Bautista',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz, spinning, box],
    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
      {
        day: 'Miercoles',
        hour: ['06:00', '07:00'],
      },
      {
        day: 'Jueves',
        hour: ['06:00', '07:00'],
      },
      {
        day: 'Viernes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'natacion-infantil',
    label: 'Natación Infantil',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: natacion,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],
    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'tenis',
    label: 'Tenis',
    description:
      'El tenis es un deporte que se practica con raquetas y una pequeña pelota. Pueden jugarlo dos individuos (uno contra uno) o dos parejas (dos personas contra las otras dos). El objetivo es impactar la pelota para que pase por encima de la red que divide la cancha a la mitad, intentando que el rival no consiga devolverla.',
    type: 'sports',
    image: tenis,
    location: 'Cancha de tenis',
    instructor: 'Alberto',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'spinning',
    label: 'Spinning',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: spinning,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'fitness-grupal',
    label: 'Fitness Grupal',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: fitnessGrupal,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'atletismo',
    label: 'Atletismo',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: atletismo,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'box',
    label: 'Box',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: box,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'crossfit',
    label: 'Crossfit',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: crossfit,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'natacion-adultos',
    label: 'Natación Adultos',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: natacionAdultos,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'yoga',
    label: 'Yoga',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: yoga,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'taekwondo',
    label: 'Taekwondo',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: taekwondo,
    instructor: 'Alberto',
    location: 'Cancha de tenis',

    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'jazz',
    label: 'Jazz',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'cultural',
    image: jazz,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hour: ['06:00', '09:00'],
      },
      {
        day: 'Martes',
        hour: ['06:00', '07:00'],
      },
    ],
  },
];
