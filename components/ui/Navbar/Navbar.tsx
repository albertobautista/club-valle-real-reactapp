import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainMenu } from '@components/common/MainMenu';

import profilePic from '/public/logos/logocvr.svg';
import { MobileNav } from './components/MobileNav';

export const Navbar: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex items-center p-5 mb-8 bg-white filter drop-shadow-lg">
      <MobileNav open={open} />
      <div className="flex items-center w-4/12">
        <Link href="/" passHref>
          <Image
            src={profilePic}
            alt="Logo Club Valle Real de Guadalajara"
            width={350}
            height={200}
          />
        </Link>
      </div>
      <div className="flex items-center justify-end w-8/12">
        <div
          className="relative z-50 flex flex-col items-center justify-between w-6 h-6 lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-cvr-green rounded-lg transform transition duration-300 ease-in-out ${
              open ? 'rotate-45 translate-y-2.5' : ''
            }`}
          />
          <span
            className={`h-1 w-full bg-cvr-gold rounded-lg transition-all duration-300 ease-in-out ${
              open ? 'w-0' : 'w-full'
            }`}
          />
          <span
            className={`h-1 w-full bg-cvr-green rounded-lg transform transition duration-300 ease-in-out ${
              open ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          />
        </div>

        <div className="hidden lg:flex">
          <MainMenu mobileHidden />
        </div>
      </div>
    </nav>
  );
};
