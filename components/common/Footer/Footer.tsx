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
    <div className="p-8 mt-10 text-white page-footer bg-cvr-blue">
      <div className="gap-10 md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Image
            src={profilePic}
            alt="Logo Club Valle Real de Guadalajara"
            width={350}
            height={200}
          />
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">
              Actividades deportivas
            </h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li>
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">
              Actividades culturales
            </h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-200 uppercase dark:text-white">
              Contáctanos
            </h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-center text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Flowbite™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex justify-center mt-4 space-x-6 sm:mt-0">
          <SocialNetworks mobileHidden={false} theme={'dark'} />
        </div>
      </div>
    </div>
  );
};
