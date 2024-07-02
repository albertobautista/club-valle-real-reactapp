import { MainMenu } from '@components/common/MainMenu';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import profilePic from '/public/logos/logocvr.svg';

import { IMobileNavProps } from './interfaces';

export const MobileNav: FC<IMobileNavProps> = ({ open }) => {
  return (
    <div
      className={`absolute top-0 left-0 h-screen overflow-auto w-screen bg-white transform ${
        open ? '-translate-x-0 ' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex items-center p-5 mb-8 bg-white filter drop-shadow-lg">
        {/*logo container*/}
        <div className="flex items-center justify-center w-10/12 lg:w-4/12">
          <Link href="/" passHref>
            <Image
              src={profilePic}
              alt="Logo Club Valle Real de Guadalajara"
              width={350}
              height={200}
              priority
            />
          </Link>
        </div>
      </div>
      <div className="flex p-4">
        <MainMenu mobileHidden={false} />
      </div>
    </div>
  );
};
