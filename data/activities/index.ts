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
  },
  {
    slug: 'natacion-infantil',
    label: 'Natación Infantil',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: natacion,
  },
  {
    slug: 'tenis',
    label: 'Tenis',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: tenis,
  },
  {
    slug: 'spinning',
    label: 'Spinning',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: spinning,
  },
  {
    slug: 'fitness-grupal',
    label: 'Fitness Grupal',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: fitnessGrupal,
  },
  {
    slug: 'atletismo',
    label: 'Atletismo',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: atletismo,
  },
  {
    slug: 'box',
    label: 'Box',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: box,
  },
  {
    slug: 'crossfit',
    label: 'Crossfit',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: crossfit,
  },
  {
    slug: 'natacion-adultos',
    label: 'Natación Adultos',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: natacionAdultos,
  },
  {
    slug: 'yoga',
    label: 'Yoga',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: yoga,
  },
  {
    slug: 'taekwondo',
    label: 'Taekwondo',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'sports',
    image: taekwondo,
  },
  {
    slug: 'jazz',
    label: 'Jazz',
    description: 'sdfhsdfjdsklfjsdklfjkl',
    type: 'cultural',
    image: jazz,
  },
];
