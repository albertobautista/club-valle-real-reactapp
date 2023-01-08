import { MainMenu } from '@components/common/MainMenu';
import { SocialNetworks } from '@components/common/SocialNetworks/SocialNetworks';
import Image from 'next/image';
import { FC } from 'react';

import profilePic from '/public/logos/logocvr.svg';

export const Navbar: FC = () => {
  return (
    <header className="flex items-center justify-center w-full gap-2 p-8 lg:gap-x-28">
      <div>
        <Image
          src={profilePic}
          alt="Logo Club Valle Real de Guadalajara"
          width={350}
          height={200}
        />
      </div>
      <nav>
        <MainMenu mobileHidden />
      </nav>
      <div className="flex-1">
        <div className="flex justify-center">
          <SocialNetworks mobileHidden theme="dark" />
        </div>
      </div>
    </header>
  );
};
