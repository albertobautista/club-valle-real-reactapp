import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainMenu } from '@components/common/MainMenu';

import profilePic from '/public/logos/logocvr.webp';
import { MobileNav } from './components/MobileNav';
import Head from 'next/head';
import Script from 'next/script';
import { MENU_OPTIONS } from './utils';
import { LinkTitle } from '../LinkTitle';
import { MenuIcon } from './components/MenuIcon';
const NAVIGATION_LINKS = [
  {
    title: 'Inicio',
    href: '#top',
  },
  {
    title: 'Patrocinadores',
    href: '#sponsors',
    disabled: true,
  },
  {
    title: 'Agenda',
    href: '#agenda',
    disabled: true,
  },
  {
    title: 'Speakers',
    href: '#speakers',
    disabled: true,
  },
  {
    title: 'Tickets',
    href: '#tickets',
    disabled: true,
  },
  {
    title: 'Contacto',
    href: '#contact',
    disabled: true,
  },
  {
    title: 'Código de conducta',
    href: '#coc',
  },
];
const SOCIAL_NETWORKS_LINKS = [
  {
    component: 'Icons.twitch',
    title: 'twitch',
    icon: 'twitch-icon.svg',
    href: 'https://twitch.tv/midudev',
  },
  {
    component: 'Icons.youtube',
    title: 'youtube',
    icon: 'youtube-icon.svg',
    href: 'https://youtube.com/midudev',
  },
  {
    component: 'Icons.instagram',
    title: 'instagram',
    icon: 'instagram-icon.svg',
    href: 'https://instagram.com/midu.dev',
  },
  {
    component: 'Icons.twitter',
    title: 'twitter',
    icon: 'twitter-icon.svg',
    href: 'https://twitter.com/midudev',
  },
];
export const Navbar: FC = () => {
  return (
    <>
      <header className="flex items-center w-full px-4 py-3 bg-gradient-to-b from-principal-dark via-principal-dark to-principal md:px-8 md:py-8 gap-x-8">
        <div className="flex justify-between w-full h-full md:flex-col md:gap-4">
          <nav className="w-min md:w-auto">
            <div className="p-1 m-auto rounded-full w-fit md:bg-black">
              <div className="md:w-[724px] lg:w-[884px] md:rounded-full md:m-auto md:bg-black md:border-[#fab50c] md:border-2 md:p-2 px-0">
                <ul className="flex items-center justify-center rounded-x md:gap-x-4 [&>li>a:hover]:scale-125 [&>li>a:hover]:contrast-125 w-full">
                  {/* {teams.map(({ id, image, name }, index) => (
                    <>
                      {index === 6 && (
                        <li className="w-16 lg:w-20">
                          <Logo />
                        </li>
                      )}
                      <li>
                        <a
                          className="hidden transition group md:block"
                          href={`/team/${id}`}
                          title={name}
                          rel={
                            Astro.url.pathname !== `/team/${id}` && 'preload'
                          }
                        >
                          <img
                            className="h-9 w-9 lg:h-12 lg:w-12 aspect-square"
                            src={image}
                            alt={`Escudo del equipo ${name}`}
                            width="48"
                            height="48"
                            decoding="async"
                            fetchpriority="high"
                          />
                        </a>
                      </li>
                    </>
                  ))} */}
                  <li className="w-16 lg:w-20">
                    <Link href="/" passHref>
                      <Image
                        src={profilePic}
                        alt="Logo Club Valle Real de Guadalajara"
                        priority
                        placeholder="blur"
                      />
                    </Link>
                  </li>{' '}
                </ul>
              </div>
            </div>
          </nav>

          <nav className="flex gap-4 self-center items-center md:justify-between md:w-[724px] lg:w-full max-w-4xl">
            <input type="checkbox" id="menu" hidden className="peer" />
            <label
              htmlFor="menu"
              className="relative z-50 md:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block cursor-pointer transition hover:scale-110 peer-checked:rotate-90 rotate-0"
            >
              <MenuIcon />
            </label>
            <div className="absolute top-0 left-0 z-20 w-0 transition-all duration-300 ease-linear opacity-0 md:static md:opacity-100 md:w-full peer-checked:w-full peer-checked:opacity-100">
              <ul
                id="navbar"
                className="md:relative text-2xl flex flex-col md:flex-row bg-cvr-green md:from-transparent md:to-transparent min-h-screen md:min-h-min py-24 md:py-0 md:flex justify-center text-white gap-6 md:gap-x-4 font-semibold text-center text-md md:text-base md:justify-start [&>li>a]:opacity-80 [&>li>a:hover]:opacity-100"
              >
                {MENU_OPTIONS.map((option) => (
                  <li key={option.name} className="md:w-max">
                    <a
                      className="font-semibold tracking-wider text-white uppercase duration-150 border-b-2 border-transparent hover:border-cvr-gold"
                      href={option.href}
                      // rel={Astro.url.pathname !== href && 'preload'}
                    >
                      {option.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <SocialNetworks theme="white" mobileHidden={true} /> */}
          </nav>
        </div>
      </header>
      <Script id="menu2">
        {`
       const menuCheckbox = document.getElementById('menu')
       const mediaQuery = window.matchMedia('(min-width: 640px)') // Breakpoint sm
       const $navbar = document.querySelector('#navbar')
       $navbar.querySelectorAll('a').forEach((anchor) => {
         anchor.addEventListener('click', (_event) => {
           if (document.body.style.overflowY === 'hidden') {
             hideOverFlow(false)
           }
         })
       })
       /** @param {boolean} value */
       function hideOverFlow(value) {
         if (value) {
           window.scrollTo(0, 0)
           document.body.style.overflowY = 'hidden'
         } else {
           document.body.style.overflowY = 'auto'
         }
       }
       menuCheckbox.addEventListener('change', (e) =>
         e.target.checked ? hideOverFlow(true) : hideOverFlow(false)
       )
       mediaQuery.addEventListener('change', (e) => {
         if (e.matches) {
           hideOverFlow(false)
           menuCheckbox.checked = false
         }
       })
       `}
      </Script>
    </>
  );
};
