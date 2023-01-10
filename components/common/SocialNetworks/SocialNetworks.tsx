import { SOCIAL_NETWORKS } from '@components/ui/Navbar/utils';
import Image from 'next/image';
import { FC } from 'react';
import { ISocialNetworksProps } from './interfaces';

export const SocialNetworks: FC<ISocialNetworksProps> = ({
  mobileHidden,
  theme,
}) => {
  return (
    <div
      className={`gap-7 justify-center ${
        mobileHidden ? 'hidden md:flex' : 'flex'
      }`}
    >
      {SOCIAL_NETWORKS.map(({ href, icon, name }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener norefferer noreferrer"
          className={`w-9 h-9 flex items-center justify-center rounded-full transition-all duration-500 ${
            theme === 'dark' ? 'bg-white' : 'bg-transparent hover:bg-white'
          } [&>img]:hover:scale-125 [&>img]:hover:invert-0 [&>img]:hover:brightness-100`}
        >
          <Image
            className={`w-5 transition-all duration-500 ${
              theme === 'dark' ? 'invert-0' : 'invert-[100]'
            } brightness-0`}
            src={icon}
            alt={`${name} Logo`}
            loading="lazy"
            decoding="async"
            // fetchpriority="low"
            width={200}
            height={200}
          />
        </a>
      ))}
    </div>
  );
};
