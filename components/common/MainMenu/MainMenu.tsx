import { LinkTitle } from '@components/ui/LinkTitle';
import { MENU_OPTIONS } from '@components/ui/Navbar/utils';
import { FC } from 'react';
import { IMainMenuProps } from './interfaces';

export const MainMenu: FC<IMainMenuProps> = ({ mobileHidden }) => {
  return (
    <ul
      className={`${
        mobileHidden ? 'hidden md:flex' : 'flex'
      } flex-wrap items-center justify-center rounded-xl gap-x-12 [&>li>a:hover]:scale-150 w-full`}
    >
      {MENU_OPTIONS.map((option) => (
        <LinkTitle key={option.name} href={option.href} title={option.name} />
      ))}
    </ul>
  );
};
