import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { IMobileNavProps } from './interfaces';

import profilePic from '/public/logos/logocvr.svg';

export const MobileNav: FC<IMobileNavProps> = ({ open, setOpen }) => {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center justify-center p-5 mb-8 bg-white filter drop-shadow-lg">
        {/*logo container*/}
        <div className="flex items-center justify-center w-5/12">
          <Link href="/" passHref>
            <Image
              src={profilePic}
              alt="Logo Club Valle Real de Guadalajara"
              width={350}
              height={200}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="my-4 text-xl font-medium"
          href="/about"
          onClick={
            () =>
              // setTimeout(() => {
              setOpen(!open)
            // }, 100)
          }
        >
          About
        </a>
      </div>
    </div>
  );
};
