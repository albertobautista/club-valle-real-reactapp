import { IActivity } from 'interfaces';

const atletismo = '/activities/atletismo/atletismo.webp';
const atletismo2 = '/activities/atletismo/atletismo2.webp';
const atletismo3 = '/activities/atletismo/atletismo3.webp';
const box = '/activities/box.webp';
const gimnasio = '/activities/gimnasio/gimnasio.webp';
const gimnasio2 = '/activities/gimnasio/gimnasio2.webp';
const gimnasio3 = '/activities/gimnasio/gimnasio3.webp';
const danzaArabe = '/activities/danzaArabe/danza-arabe.webp';
const pilatesDualMix = '/activities/pilatesDualMix/pilates-dual-mix.webp';
const entrenamientoFuncional =
  '/activities/entrenamientoFuncional/entrenamiento-funcional.webp';
const entrenamientoFuncional2 =
  '/activities/entrenamientoFuncional/entrenamiento-funcional2.webp';
const entrenamientoFuncional3 =
  '/activities/entrenamientoFuncional/entrenamiento-funcional3.webp';
const fitnessGrupal2 = '/activities/fitnessGrupal/fitness-grupal2.webp';
const fitnessGrupal3 = '/activities/fitnessGrupal/fitness-grupal3.webp';
const fitnessGrupal4 = '/activities/fitnessGrupal/fitness-grupal4.webp';
const balletClasico = '/activities/balletClasico/ballet-clasico.webp';
const balletClasico2 = '/activities/balletClasico/ballet-clasico2.webp';
const balletPredanza = '/activities/balletPredanza/ballet-predanza.webp';

const jazz = '/activities/jazz/jazz.webp';
const jazz2 = '/activities/jazz/jazz2.webp';
const jazz3 = '/activities/jazz/jazz3.webp';
const musica = '/activities/musica/musica.webp';
const musica2 = '/activities/musica/musica2.webp';
const musica3 = '/activities/musica/musica3.webp';
const natacion = '/activities/natacionInfantil/natacion-infantil.webp';
const natacion2 = '/activities/natacionInfantil/natacion-infantil2.webp';
const natacion3 = '/activities/natacionInfantil/natacion-infantil3.webp';
const natacionAdultos = '/activities/natacionAdultos/natacion-adultos.webp';
const natacionAdultos2 = '/activities/natacionAdultos/natacion-adultos2.webp';
const natacionAdultos3 = '/activities/natacionAdultos/natacion-adultos3.webp';
const spinning = '/activities/spinning/spinning.webp';
const spinning2 = '/activities/spinning/spinning2.webp';
const spinning3 = '/activities/spinning/spinning3.webp';
const yoga = '/activities/yoga/yoga.webp';
const yoga2 = '/activities/yoga/yoga2.webp';
const yoga3 = '/activities/yoga/yoga3.webp';
export const futbol = '/activities/futbol/futbol.webp';
export const futbol2 = '/activities/futbol/futbol2.webp';
export const futbol3 = '/activities/futbol/futbol3.webp';
export const taekwondo = '/activities/taekwondo/taekwondo.webp';
export const taekwondo2 = '/activities/taekwondo/taekwondo2.webp';
export const taekwondo3 = '/activities/taekwondo/taekwondo3.webp';
export const tenis = '/activities/tenis/tenis.webp';
export const tenis2 = '/activities/tenis/tenis2.webp';
export const tenis3 = '/activities/tenis/tenis3.webp';

export const activities: IActivity[] = [
  {
    slug: 'futbol',
    label: 'Fútbol',
    description:
      'Las clases de fútbol son sesiones de entrenamiento diseñadas para enseñar y mejorar las habilidades y conocimientos de los jugadores en este deporte. Estas clases pueden variar según la edad, el nivel de habilidad y los objetivos de los participantes.',
    type: 'sports',
    image: futbol,
    instructor: 'Fredy López',
    location: 'Cancha de fútbol',
    relatedImages: [futbol2, futbol3],
    schedule: [
      {
        day: 'Martes',
        hours: ['17:20 a 18:20'],
      },
      {
        day: 'Jueves',
        hours: ['17:20 a 18:20'],
      },
    ],
    active: true,
  },
  {
    slug: 'natacion-infantil',
    label: 'Natación Infantil',
    description:
      'Las clases de natación infantil son sesiones de entrenamiento diseñadas para enseñar a los niños a nadar y a estar seguros en el agua. Incluyen ejercicios de calentamiento, técnicas básicas de natación como el estilo libre, espalda, y flotación, así como prácticas para mejorar la coordinación y la respiración. Además, se enseñan medidas de seguridad en el agua y se promueve la confianza y la comodidad en el medio acuático. Las clases son impartidas por instructores calificados y se adaptan a la edad y nivel de habilidad de cada niño, desde principiantes hasta nadadores más avanzados.',
    type: 'sports',
    image: natacion,
    instructor: 'Laura Alvarado y Guillermo Cataneo',
    location: 'Alberca',
    relatedImages: [natacion2, natacion3],
    schedule: [
      {
        day: 'Lunes',
        hours: ['16:30 a 17:15', '17:15 a 18:00', '18:00 a 18:45'],
      },
      {
        day: 'Martes',
        hours: ['16:30 a 17:15', '17:15 a 18:00', '18:00 a 18:45'],
      },
      {
        day: 'Miércoles',
        hours: ['16:30 a 17:15', '17:15 a 18:00', '18:00 a 18:45'],
      },
      {
        day: 'Jueves',
        hours: ['16:30 a 17:15', '17:15 a 18:00', '18:00 a 18:45'],
      },
    ],
    active: true,
  },
  {
    slug: 'tenis',
    label: 'Tenis',
    description:
      'El tenis es un deporte que se practica con raquetas y una pequeña pelota. Pueden jugarlo dos individuos (uno contra uno) o dos parejas (dos personas contra las otras dos). El objetivo es impactar la pelota para que pase por encima de la red que divide la cancha a la mitad, intentando que el rival no consiga devolverla.',
    type: 'sports',
    image: tenis,
    location: 'Canchas de tenis',
    instructor: 'Varios entrenadores',
    relatedImages: [tenis2, tenis3],

    schedule: [],
    active: true,
  },
  {
    slug: 'spinning',
    label: 'Spinning',
    description:
      'Las clases de spinning son sesiones de entrenamiento en bicicleta estática diseñadas para mejorar la condición física. Se realizan en un ambiente grupal y son guiadas por un instructor. Incluyen un calentamiento inicial, seguido de intervalos de alta y baja intensidad, simulando subidas, sprints y pedaleo constante. Se acompaña de música motivadora para mantener el ritmo y la energía. Las clases finalizan con una fase de enfriamiento y estiramientos para relajar los músculos. Están diseñadas para diferentes niveles de condición física y ayudan a mejorar la resistencia cardiovascular, quemar calorías y fortalecer los músculos de las piernas.',
    type: 'sports',
    image: spinning,
    instructor: 'N/A',
    location: 'Salón de spinning',
    relatedImages: [spinning2, spinning3],

    schedule: [
      {
        day: 'Lunes',
        hours: ['06:30', '07:30', '08:30'],
      },
      {
        day: 'Martes',
        hours: ['06:30', '07:30', '08:30', '19:00'],
      },
      {
        day: 'Miércoles',
        hours: ['06:30', '07:30', '08:30'],
      },
      {
        day: 'Jueves',
        hours: ['06:30', '07:30', '08:30', '19:00'],
      },
      {
        day: 'Viernes',
        hours: ['06:30', '07:30', '08:30'],
      },
      {
        day: 'Sábado',
        hours: ['08:00', '09:00', '10:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'fitness-grupal',
    label: 'Fitness Grupal',
    description:
      'Las clases grupales de fitness son clases estructuradas en las que un instructor guía a un grupo de personas para que realicen un entrenamiento específico. Estas clases pueden ser específicamente para trabajar una parte del cuerpo, de entrenamiento funcional con accesorios o estructurada de coreografía. Hoy hablare sobre esta última, las de coreografía.',
    type: 'sports',
    image: fitnessGrupal2,
    instructor: 'Humberto y Kendra',
    location: 'Salón arriba de vestidores damas',
    relatedImages: [fitnessGrupal4, fitnessGrupal3],
    schedule: [
      {
        day: 'Lunes',
        hours: ['08:30 a 10:00'],
      },
      {
        day: 'Martes',
        hours: ['08:30 a 10:00'],
      },
      {
        day: 'Miércoles',
        hours: ['08:30 - 10:00'],
      },
      {
        day: 'Jueves',
        hours: ['08:30 - 10:00'],
      },
      {
        day: 'Viernes',
        hours: ['08:30 - 10:00'],
      },
    ],
    active: true,
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
    relatedImages: [atletismo2, atletismo3],
    schedule: [
      {
        day: 'Martes - Adultos',
        hours: ['07:00 a 08:00', '08:00 a 09:00'],
      },
      {
        day: 'Jueves - Adultos',
        hours: ['07:00 a 08:00', '08:00 a 09:00'],
      },
      {
        day: 'Sábado - Adultos',
        hours: ['07:00 a 09:00'],
      },
      {
        day: 'Martes - Infantil/Juvenil',
        hours: ['16:15 a 17:00', '17:15 a 18:15'],
      },
      {
        day: 'Jueves - Infantil/Juvenil',
        hours: ['16:15 a 17:00', '17:15 a 18:15'],
      },
    ],
    active: true,
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
    active: false,
  },
  {
    slug: 'entrenamiento-funcional',
    label: 'Entrenamiento Funcional',
    description:
      'Las clases de entrenamiento funcional son sesiones de ejercicio diseñadas para mejorar la capacidad de realizar actividades cotidianas mediante movimientos que involucran múltiples grupos musculares y patrones de movimiento naturales. Estas clases incluyen ejercicios que simulan movimientos diarios como levantar, empujar, tirar, agacharse y girar. Utilizan una variedad de equipos como pesas, bandas de resistencia, pelotas de estabilidad y el propio peso corporal.',
    type: 'sports',
    image: entrenamientoFuncional,
    instructor: 'Fabían Jahaziel',
    location: 'Salón de entrenamiento funcional',
    relatedImages: [entrenamientoFuncional2, entrenamientoFuncional3],

    schedule: [
      {
        day: 'Lunes',
        hours: ['07:00', '08:00', '09:00', '17:00', '18:00'],
      },
      {
        day: 'Martes',
        hours: ['07:00', '08:00', '09:00', '17:00', '18:00'],
      },
      {
        day: 'Miércoles',
        hours: ['07:00', '08:00', '09:00', '17:00', '18:00'],
      },
      {
        day: 'Jueves',
        hours: ['07:00', '08:00', '09:00', '17:00', '18:00'],
      },
      {
        day: 'Viernes',
        hours: ['07:00', '08:00', '09:00', '17:00', '18:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'natacion-adultos',
    label: 'Natación Adultos',
    description:
      'Las clases de natación para adultos son sesiones de entrenamiento diseñadas para enseñar y mejorar habilidades de natación en personas adultas. Incluyen ejercicios de calentamiento, técnicas básicas y avanzadas de estilos de natación como el estilo libre, espalda, pecho y mariposa, y prácticas para mejorar la técnica, la respiración y la resistencia. También se enseñan medidas de seguridad en el agua y se promueve la confianza y la comodidad en el medio acuático. Estas clases son impartidas por instructores calificados y se adaptan a diferentes niveles de habilidad, desde principiantes hasta nadadores experimentados.',
    type: 'sports',
    image: natacionAdultos,
    instructor: 'Guillermo Cataneo',
    location: 'Alberca',
    relatedImages: [natacionAdultos2, natacionAdultos3],

    schedule: [
      {
        day: 'Lunes',
        hours: ['08:00 a 09:00', '09:00 a 10:00'],
      },
      {
        day: 'Martes',
        hours: ['08:00 a 09:00', '09:00 a 10:00'],
      },
      {
        day: 'Miércoles',
        hours: ['08:00 a 09:00', '09:00 a 10:00'],
      },
      {
        day: 'Jueves',
        hours: ['08:00 a 09:00', '09:00 a 10:00'],
      },
      {
        day: 'Viernes',
        hours: ['08:00 a 09:00', '09:00 a 10:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'yoga',
    label: 'Yoga',
    description:
      'Las clases de yoga son sesiones de entrenamiento que combinan ejercicios físicos, respiración y meditación para mejorar el bienestar general. Incluyen una variedad de posturas (asanas) que estiran y fortalecen el cuerpo, prácticas de respiración (pranayama) para calmar la mente, y técnicas de meditación para promover la relajación y el enfoque mental. Las clases pueden variar en intensidad y estilo, desde suaves y relajantes hasta vigorosas y desafiantes. Están diseñadas para todos los niveles de habilidad y pueden ser adaptadas a las necesidades individuales. Además de mejorar la flexibilidad y la fuerza, las clases de yoga también promueven la reducción del estrés y un sentido de equilibrio y bienestar.',
    type: 'sports',
    image: yoga,
    instructor: 'Angie Flores',
    location: 'Salón de yoga',
    relatedImages: [yoga2, yoga3],

    schedule: [
      {
        day: 'Lunes',
        hours: ['19:15 a 20:15'],
      },
      {
        day: 'Martes',
        hours: ['08:00 a 09:00'],
      },
      {
        day: 'Miércoles',
        hours: ['19:15 a 20:15'],
      },
      {
        day: 'Jueves',
        hours: ['08:00 a 09:00'],
      },
      {
        day: 'Sábado',
        hours: ['08:00 a 09:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'taekwondo',
    label: 'Taekwondo',
    description:
      'Las clases de taekwondo son sesiones de entrenamiento enfocadas en este arte marcial coreano. Incluyen ejercicios de calentamiento, técnicas de patadas, puñetazos y bloqueos, y práctica de formas (poomsae) y combate (sparring). También se enseñan principios de disciplina, respeto y autocontrol. Además, se realizan ejercicios para mejorar la flexibilidad, la fuerza y la resistencia. Las clases son impartidas por instructores calificados y se adaptan a diferentes niveles de habilidad y edades, desde principiantes hasta practicantes avanzados.',
    type: 'sports',
    image: taekwondo,
    instructor: 'Karla Torres',
    location: 'Salon de taekwondo',

    relatedImages: [taekwondo2, taekwondo3],

    schedule: [
      {
        day: 'Lunes',
        hours: ['18:30 a 19:30'],
      },
      {
        day: 'Miércoles',
        hours: ['18:30', '19:30'],
      },
    ],
    active: true,
  },
  {
    slug: 'jazz',
    label: 'Jazz niñas',
    description:
      'Las clases de jazz son sesiones de entrenamiento en danza enfocadas en el estilo jazz, conocido por su energía, ritmo y expresión personal. Incluyen ejercicios de calentamiento para preparar el cuerpo, práctica de movimientos básicos como pasos de jazz, giros, saltos y extensiones, aprendizaje y práctica de coreografías, y actividades de improvisación para fomentar la expresión personal y creatividad. ',
    type: 'sports',
    image: jazz,
    instructor: 'Academia',
    location: 'Salón de jazz',
    relatedImages: [jazz2, jazz3],

    schedule: [
      {
        day: 'Martes',
        hours: ['16:00 a 17:00', '17:00 a 18:00'],
      },
      {
        day: 'Jueves',
        hours: ['16:00 a 17:00', '17:00 a 18:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'musica',
    label: 'Música',
    description:
      'Las clases de música son sesiones educativas diseñadas para enseñar y mejorar habilidades musicales. Pueden incluir instrucción en teoría musical, lectura de partituras, y práctica con instrumentos o la voz. Los estudiantes aprenden técnicas específicas para su instrumento, ejercicios de calentamiento y técnica, y trabajan en la interpretación de piezas musicales. También se fomenta la apreciación musical y la comprensión de diferentes estilos y géneros. Las clases pueden ser individuales o grupales, y están adaptadas a diferentes niveles, desde principiantes hasta avanzados.',
    type: 'cultural',
    image: musica,
    instructor: 'Alfonso Fuentes',
    location: 'Salón de música',
    relatedImages: [musica2, musica3],

    schedule: [
      {
        day: 'Lunes',
        hours: ['16:00 a 17:00', '17:00 a 18:00'],
      },
      {
        day: 'Miércoles',
        hours: ['16:00 a 17:00', '17:00 a 18:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'ballet-clasico',
    label: 'Ballet Clásico',
    description:
      'El ballet clásico es una forma de danza altamente estilizada y técnica que se originó en las cortes renacentistas de Italia y se desarrolló en Francia y Rusia. Se caracteriza por su técnica rigurosa, con movimientos precisos y controlados, y el uso de zapatillas de punta por parte de las bailarinas. El ballet clásico tiene un vocabulario específico en francés y combina música, movimiento y narrativa para contar historias a través de la danza.',
    type: 'sports',
    image: balletClasico,
    instructor: 'Miss Heidy Lozada',
    location: 'Salón',
    relatedImages: [balletClasico2],
    schedule: [
      {
        day: 'Lunes',
        hours: ['17:00 a 17:50', '18:00 a 19:00'],
      },
      {
        day: 'Miércoles',
        hours: ['17:00 a 17:50', '18:00 a 19:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'danza-arabe',
    label: 'Danza Árabe',
    description:
      'Las clases de danza árabe, también conocida como danza del vientre, son sesiones de entrenamiento enfocadas en este estilo de baile originario del Medio Oriente. Estas clases incluyen ejercicios de calentamiento para preparar el cuerpo, seguidos de la práctica de movimientos característicos como ondulaciones, shimmies, movimientos de cadera y brazos, y aislaciones musculares.',
    type: 'sports',
    image: danzaArabe,
    instructor: 'Elizabeth',
    location: 'Salón de danza árabe',
    relatedImages: [],
    schedule: [
      {
        day: 'Martes',
        hours: ['10:00 a 11:00'],
      },
      {
        day: 'Jueves',
        hours: ['10:00 a 11:00'],
      },
    ],
    active: true,
  },
  {
    slug: 'pilates-dual-mix',
    label: 'Pilates Dual Mix',
    description:
      'Las clases de pilates son sesiones de entrenamiento enfocadas en fortalecer el cuerpo, mejorar la flexibilidad y promover el equilibrio y la postura. Utilizan una combinación de ejercicios de bajo impacto que se realizan en colchonetas o con equipos específicos como reformadores, bandas elásticas y pelotas de estabilidad.',
    type: 'sports',
    image: pilatesDualMix,
    instructor: 'Pepe De León tel.331-604-6461',
    location: 'Salón de pilates',
    relatedImages: [],
    schedule: [],
    active: true,
  },
  {
    slug: 'ballet-predanza',
    label: 'Ballet Predanza',
    description:
      'Las clases de ballet predanza son sesiones diseñadas para introducir a los niños pequeños al mundo del ballet. Estas clases se enfocan en desarrollar la coordinación, la flexibilidad y la fuerza a través de juegos y ejercicios básicos. Incluyen actividades como saltos, giros y movimientos suaves al ritmo de la música, además de enseñar las posiciones básicas del ballet. Las clases también fomentan la creatividad, la musicalidad y la disciplina. Son impartidas por instructores calificados y están adaptadas a la edad y nivel de desarrollo de los niños, proporcionando una base sólida para futuras clases de ballet más avanzadas.',
    type: 'sports',
    image: balletPredanza,
    instructor: 'N/A',
    location: 'Salón de ballet',
    relatedImages: [],
    schedule: [
      {
        day: 'Lunes',
        hours: ['16:00 a 16:50'],
      },
      {
        day: 'Miércoles',
        hours: ['16:00 a 16:50'],
      },
    ],
    active: true,
  },
  {
    slug: 'gimnasio',
    label: 'Gimnasio',
    description:
      'Las clases de gimnasio son sesiones de entrenamiento diseñadas para mejorar la condición física general a través de ejercicios variados. Pueden incluir entrenamiento de fuerza con pesas y máquinas, ejercicios cardiovasculares como correr o ciclismo, y actividades de flexibilidad y estiramiento. Las clases grupales pueden abarcar disciplinas como aeróbicos, pilates, zumba y entrenamiento funcional. Cada sesión generalmente comienza con un calentamiento, seguido de ejercicios específicos, y finaliza con una fase de enfriamiento y estiramientos. Están diseñadas para diferentes niveles de condición física y objetivos personales, y son guiadas por instructores calificados que aseguran la correcta ejecución de los ejercicios y la motivación de los participantes',
    type: 'sports',
    image: gimnasio,
    instructor:
      'Arturo Zuñiga, Oscar Hernández, Jorge Ávila y Guillermo torres',
    location: 'Gimasio',
    relatedImages: [gimnasio2, gimnasio3],
    schedule: [
      {
        day: 'Lunes',
        hours: ['06:00 a 11:00', '16:00 a 20:00'],
      },
      {
        day: 'Martes',
        hours: ['06:00 a 22:00'],
      },
      {
        day: 'Miércoles',
        hours: ['06:00 a 22:00'],
      },
      {
        day: 'Jueves',
        hours: ['06:00 a 22:00'],
      },
      {
        day: 'Viernes',
        hours: ['06:00 a 22:00'],
      },
      {
        day: 'Sábado',
        hours: ['06:00 a 20:00'],
      },
      {
        day: 'Domingo',
        hours: ['06:00 a 20:00'],
      },
    ],
    active: true,
  },
];
