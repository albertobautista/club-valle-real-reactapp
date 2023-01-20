/* eslint-disable react/jsx-key */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SocialNetworks } from '../SocialNetworks/SocialNetworks';
import { NAV_ENTRIES } from './utils';
import profilePic from '/public/logos/logocvrblanco.webp';

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
            priority
          />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {NAV_ENTRIES.map((entry, index) => (
            <div key={index}>
              <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase dark:text-white">
                {entry.label}
              </h2>
              <ul className="text-gray-400">
                {entry.options.slice(0, 5).map((option, index) => (
                  <li key={index} className="mb-3">
                    {entry.isMenu ? (
                      <Link href={option.href} className="hover:underline">
                        {option.name}
                      </Link>
                    ) : (
                      <p className="">{option.name}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <hr className="my-6 border-gray-400 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-center text-gray-400">
          © 2023{' '}
          <a href="https://flowbite.com/" className="hover:underline">
            Club Valle Real de Guadalajara
          </a>
          . Todos los derechos reservados.
        </span>
        <div className="flex justify-center mt-4 space-x-6 sm:mt-0">
          <SocialNetworks mobileHidden={false} theme={'dark'} />
        </div>
      </div>
    </div>
  );
};
