import { MainMenu } from '@components/common/MainMenu';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import profilePic from '/public/logos/logocvr.svg';

export const Navbar: FC = () => {
  return (
    <header className="flex items-center w-full gap-2 p-8 lg:gap-x-28">
      <Link href="/" passHref>
        <Image
          src={profilePic}
          alt="Logo Club Valle Real de Guadalajara"
          width={350}
          height={200}
        />
      </Link>
      <nav>
        <MainMenu mobileHidden />
      </nav>
    </header>
  );
};
