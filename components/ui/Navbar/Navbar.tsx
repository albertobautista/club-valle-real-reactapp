import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import profilePic from '/public/logos/logocvr.webp';
import Script from 'next/script';
import { MENU_OPTIONS } from './utils';
import { MenuIcon } from './components/MenuIcon';
import { useRouter } from 'next/router';

export const Navbar: FC = () => {
  const router = useRouter();
  return (
    <>
      <header className="flex items-center w-full px-4 py-3 bg-gradient-to-b from-principal-dark via-principal-dark to-principal md:px-8 md:py-8s gap-x-8">
        <div className="flex justify-between w-full h-full py-5 md:flex-col md:gap-4">
          <nav className="md:py-2 w-min md:w-auto">
            <ul className="flex items-center justify-center rounded-x md:gap-x-4 [&>li>a:hover]:scale-125 [&>li>a:hover]:contrast-125 w-full">
              <li className="w-44 lg:w-72">
                <Link href="/" passHref>
                  <Image
                    src={profilePic}
                    alt="Logo Club Valle Real de Guadalajara"
                    priority
                    placeholder="blur"
                    className="object-contain w-full h-full"
                  />
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="flex gap-4 self-center items-center md:justify-between md:w-[724px] lg:w-full max-w-4xl">
            <input type="checkbox" id="menu" hidden className="peer" />
            <label
              htmlFor="menu"
              className="relative z-50 md:hidden peer-checked:[&>.first]:hidden peer-checked:[&>.last]:block cursor-pointer  hover:scale-110 peer-checked:rotate-90 rotate-0"
            >
              <MenuIcon />
            </label>
            <div className="absolute top-0 left-0 z-20 w-0 transition-all duration-300 ease-linear opacity-0 md:static md:opacity-100 md:w-full peer-checked:w-full peer-checked:opacity-100">
              <ul
                id="navbar"
                className="md:relative text-2xl flex flex-col md:flex-row bg-cvr-green md:bg-transparent md:from-transparent md:to-transparent min-h-screen md:min-h-min py-24 md:py-0 md:flex justify-center text-white gap-6 md:gap-x-20 font-semibold text-center text-md md:text-base md:justify-start [&>li>a]:opacity-80 [&>li>a:hover]:opacity-100"
              >
                {MENU_OPTIONS.map(
                  (option) =>
                    option.enabled && (
                      <li key={option.name} className="md:w-max">
                        <a
                          className={`font-semibold tracking-wider text-white uppercase duration-150 border-b-2 border-transparent md:text-cvr-green ${
                            router.pathname === option.href
                              ? 'border-cvr-gold'
                              : 'hover:border-cvr-gold'
                          } `}
                          href={option.href}
                        >
                          {option.name}
                        </a>
                      </li>
                    )
                )}
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
