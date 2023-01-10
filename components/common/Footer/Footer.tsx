/* eslint-disable react/jsx-key */
import Image from 'next/image';
import React from 'react';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import profilePic from '/public/logos/logocvrblanco.png';

const NAV_ENTRIES = [
  {
    name: 'Equipos',
    href: '/equipos',
  },
  {
    name: 'Jugador 12',
    href: '/jugador-12',
  },
  {
    name: 'Calendario',
    href: '/calendario',
  },
  {
    name: 'Estadísticas',
    href: '/estadisticas',
  },
  {
    name: 'Reglamento',
    href: '/reglamento',
  },
  {
    name: 'Faqs',
    href: '/faqs',
  },
  {
    name: 'Draft',
    href: '/draft',
  },
];
export const Footer = () => {
  return (
    <div className="page-footer text-white w-full p-10 mt-10 bg-cvr-blue relative overflow-hidden [&>div]:relative [&>div]:z-10">
      <section className="flex flex-col justify-center gap-10 my-10 text-sm lg:flex-row lg:justify-around">
        <Image
          src={profilePic}
          alt="Logo Club Valle Real de Guadalajara"
          width={350}
          height={200}
        />

        <nav className="flex flex-col gap-4 lg:grid lg:grid-cols-3 lg:gap-0 lg:justify-between lg:gap-x-16 lg:gap-y-4">
          {NAV_ENTRIES.map((entry, index) => (
            <a
              key={index}
              href={entry.href}
              className="font-semibold text-center lg:text-left hover:underline"
            >
              {entry.name}
            </a>
          ))}
        </nav>
      </section>

      <section className="flex flex-col my-10 text-sm text-center lg:flex-row lg:text-left gap-14 lg:gap-4 text-lig">
        <nav className="flex flex-col items-center justify-around w-full gap-12 align-middle lg:flex-row md:gap-4">
          <SocialNetworks theme="dark" mobileHidden />

          <nav className="flex flex-wrap justify-center gap-5 lg:justify-around">
            <a className="font-semibold hover:underline" href="/contacto">
              Contacto
            </a>
            <a className="font-semibold hover:underline" href="#">
              Política de Privacidad
            </a>
            <a className="font-semibold hover:underline" href="#">
              Aviso Legal
            </a>
            <a className="font-semibold hover:underline" href="#">
              Política de Cookies
            </a>
          </nav>
        </nav>
      </section>
    </div>
  );
};
