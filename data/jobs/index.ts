export interface Job {
  title: string;
  category: string;
  requirements: { title: string }[];
  link: string;
}

export const jobs: Job[] = [
  {
    title: 'Steward',
    category: 'Cocina',
    link: 'https://mx.indeed.com/job/stewart-281c9ee21daaf1a0?_gl=1*ies6u5*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Secundaria concluida (Preferentemente).',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales).',
      },
      {
        title: 'Persona responsable y comprometida. Presentación pulcra.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Cocinero B',
    category: 'Cocina',
    link: 'https://mx.indeed.com/job/cocinero-b-cee6736f92bcfc5d?_gl=1*ies6u5*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title:
          'Escolaridad: TSU en Alimentos y Bebidas o Lic. trunca en Gastronomía (Preferentemente).',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales).',
      },
      {
        title: 'Horario: 06:30 a 14:30.',
      },
      {
        title: 'Persona responsable y comprometida. Presentación pulcra.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Auxiliar de Mantenimiento',
    category: 'Mantenimiento',
    link: 'https://mx.indeed.com/job/auxiliar-de-mantenimiento-a5a26964544a1b03?_gl=1*pp2af2*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Secundaria concluida o bachillerato trunco.',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales). Si cuenta con experiencia en Cluster, Casa Club, Hoteles o en Hospitales en el Área de Mantenimiento mucho mejor.',
      },
      {
        title:
          'Horarios disponibles fijos: 09:00 a 17:00 (con descanso entre semana) o 14:00 a 21:30 (con descanso en lunes).',
      },
      {
        title:
          'Funciones: Mantenimiento de las instalaciones del Club tomando las medidas de seguridad pertinentes y en bien de los usuarios.',
      },
      {
        title:
          'Habilidades: Gestión del tiempo, Atención al detalle, Comunicación y Resolución de Problemas.',
      },
      {
        title: 'Persona responsable y comprometida. Presentación pulcra.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Oficial B (Carpintero)',
    category: 'Mantenimiento',
    link: 'https://mx.indeed.com/job/oficial-carpintero-7048f55e7d088d08?_gl=1*pp2af2*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Secundaria concluida o bachillerato trunco.',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales). Si cuenta con experiencia en Cluster, Casa Club, Hoteles o en Hospitales en el Área de carpintería mucho mejor.',
      },
      {
        title: 'Horarios: 09:00 a 17:00 (con descanso en domingo).',
      },
      {
        title:
          'Funciones: Mantenimiento de ventanas, muebles y compostura de desperfectos de la Casa Club Relacionados a labores de carpintería.',
      },
      {
        title:
          'Habilidades: Gestión del tiempo, Atención al detalle, Comunicación y Resolución de Problemas.',
      },
      {
        title: 'Persona responsable y comprometida. Presentación pulcra.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Alberquero',
    category: 'Mantenimiento',
    link: 'https://mx.indeed.com/job/alberquero-40f00d44e1a29fcc?_gl=1*zgx597*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Secundaria concluida o bachillerato trunco.',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales). Si cuenta con experiencia en Cluster, Casa Club o en Hoteles mucho mejor.',
      },
      {
        title: 'Horario: 05:00 a 13:00 (con descanso en lunes).',
      },
      {
        title:
          'Funciones: Mantenimiento de alberca y fuentes (limpieza regular, aspiración de fondos, eliminación de hojas y limpieza de los cestos y las bombas de agua), cloración.',
      },
      {
        title:
          'Habilidades: Gestión del tiempo, Atención al detalle, Comunicación y Resolución de Problemas.',
      },
      {
        title: 'Persona responsable y comprometida. Presentación pulcra.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Mesero',
    category: 'Alimentos y Bebidas',
    link: 'https://mx.indeed.com/job/mesero-b4bdf648aa0b78c8?_gl=1*zgx597*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Bachillerato terminado (Preferentemente).',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales). Preferible si ha trabajado en Hoteles, Casa Club o Restaurantes como mesero mucho mejor.',
      },
      {
        title: 'Horario 07:00 a 15:00.',
      },
      {
        title:
          'Persona responsable y comprometida. Presentación pulcra. Sexo indistinto.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Bartender',
    category: 'Alimentos y Bebidas',
    link: 'https://mx.indeed.com/job/barman-02d7597a9cce747d?_gl=1*zgx597*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title:
          'Escolaridad: Bachillerato terminado o TSU en Alimentos y Bebidas (Preferentemente).',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales). Preferible si ha trabajado en Hoteles, Casa Club o Cadenas Alimenticias en Aeropuerto en el Área de Bar mucho mejor.',
      },
      {
        title: 'Horario: 14:30 a 22:00.',
      },
      {
        title:
          'Persona responsable y comprometida. Presentación pulcra. Sexo indistinto.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Intendente',
    category: 'Intendencia',
    link: 'https://mx.indeed.com/job/auxiliar-de-intendencia-6cbbe8dc93b7d06c?_gl=1*qxjc6w*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Secundaria concluida o bachillerato trunco.',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares  (contar con cartas de recomendación laborales). Si cuenta con experiencia en Cluster, Casa Club o en Hospitales en el Área de Intendencia mucho mejor.',
      },
      {
        title:
          'Horarios fijos a elegir: 14:30 a 22:00 / 09:00 a 19:00 / 13:30 a 20:30.',
      },
      {
        title:
          'Persona responsable y comprometida. Presentación pulcra. Sexo indistinto.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Auxiliar de Vigilancia',
    category: 'Seguridad',
    link: 'https://mx.indeed.com/job/auxiliar-de-intendencia-6cbbe8dc93b7d06c?_gl=1*qxjc6w*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Secundaria concluida o bachillerato trunco.',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares. Si cuenta con experiencia en Cluster, Casa Club o en Hospitales en el Área de Seguridad mucho mejor.',
      },
      {
        title: 'Horarios 06:00 a 14:00 / 14:30 a 22:00.',
      },
      {
        title:
          'Persona responsable y comprometida. Presentación pulcra. Sexo indistinto.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
  {
    title: 'Guardia Vigilante 12 x 24',
    category: 'Seguridad',
    link: 'https://mx.indeed.com/job/guardia-vigilante-4dd7cdd2124f0760?_gl=1*1lk5wjt*_gcl_au*MTg0MzU0MDg4Ny4xNzE3NTM1MzUz*_ga*NDA3NzI4NTY0LjE3MTc1MzUzNTQ.*_ga_5KTMMETCF4*MTcxODAzMjQwOS4xNi4xLjE3MTgwMzI0NjMuNi4wLjA.*_fplc*TUpONnFGUk9TRVN1VHhkWHpzdmdCbDNOc29VNWt5Q3lUb1A4dWJXekxsV2tTM1YlMkJ4SmNSREVSZ0ZOY3Z2YnpDTHpFUTluSVZoJTJGJTJCT1g0ZHBaSSUyRldleHhiWVFSYm1ySFMzWVdEcE5KbFBrZSUyQnU4eXB6QVJUY1JRZXpaOGc0USUzRCUzRA',
    requirements: [
      {
        title: 'Escolaridad: Secundaria concluida o bachillerato trunco.',
      },
      {
        title:
          'Experiencia: Mínima dos años comprobable en puestos similares (contar con cartas de recomendación laborales). Si cuenta con experiencia en Cluster, Casa Club o en Hospitales en el Área de Seguridad mucho mejor.',
      },
      {
        title: 'Horarios: 07:00 a 19:00 o 19:00 a 07:00 descansando 24:00 hrs.',
      },
      {
        title: 'Persona responsable y comprometida. Presentación pulcra.',
      },
      {
        title:
          'Tener documentación en regla, cuenta en BBVA, carta de NO antecedentes penales, cartas de recomendación laborales y constancia de situación fiscal.',
      },
    ],
  },
];
