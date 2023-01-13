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
const musica = '/activities/musica.png';

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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'fitness-grupal',
    label: 'Fitness Grupal',
    description:
      'Las clases grupales de fitness son clases estructuradas en las que un instructor guía a un grupo de personas para que realicen un entrenamiento específico. Estas clases pueden ser específicamente para trabajar una parte del cuerpo, de entrenamiento funcional con accesorios o estructurada de coreografía. Hoy hablare sobre esta última, las de coreografía.',
    type: 'sports',
    image: fitnessGrupal,
    instructor: 'Humberto y Lidia',
    location: 'Salón arriba de vestidores',
    relatedImages: [futbol, jazz],
    schedule: [
      {
        day: '*****Lunes',
        hours: ['08:30'],
      },
      {
        day: 'Martes',
        hours: ['08:30'],
      },
      {
        day: 'Miércoles',
        hours: ['08:30'],
      },
      {
        day: 'Jueves',
        hours: ['08:30'],
      },
      {
        day: 'Viernes',
        hours: ['08:30'],
      },
    ],
  },
  {
    slug: 'atletismo',
    label: 'Atletismo',
    description:
      'Es un deporte que contiene un conjunto de disciplinas agrupadas en carreras, Saltos, lanzamientos, pruebas combinadas y marcha. Es el arte de superar el rendimiento de los adversarios en velocidad o en resistencia, en distancia o en altura.',
    type: 'sports',
    image: atletismo,
    instructor: 'Roumen Alexandrov',
    location: 'Pista de atletismo',
    relatedImages: [futbol, jazz],
    schedule: [
      {
        day: 'Lunes',
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'crossfit',
    label: 'Crossfit',
    description:
      'CrossFit se define como un sistema de entrenamiento de fuerza y acondicionamiento basado en ejercicios funcionales constantemente variados realizados a una alta intensidad.',
    type: 'sports',
    image: crossfit,
    instructor: 'Fabían Jahaziel',
    location: 'Salón de crossfit',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
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
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'jazz',
    label: 'Jazz niñas',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'cultural',
    image: jazz,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
      },
    ],
  },
  {
    slug: 'musica',
    label: 'Música',
    description: 'sda',
    type: 'cultural',
    image: musica,
    instructor: 'Alberto',
    location: 'Cancha de tenis',
    relatedImages: [futbol, jazz],

    schedule: [
      {
        day: 'Lunes',
        hours: ['06:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00', '07:00'],
      },
    ],
  },
];
