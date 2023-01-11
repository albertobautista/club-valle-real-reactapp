import { LinkTitle } from '@components/ui/LinkTitle';
import { MENU_OPTIONS } from '@components/ui/Navbar/utils';
import { FC } from 'react';
import { IMainMenuProps } from './interfaces';

export const MainMenu: FC<IMainMenuProps> = ({ mobileHidden }) => {
  return (
    <ul
      className={`${
        mobileHidden ? 'hidden md:flex' : 'flex'
      } flex-col flex-wrap gap-7 rounded-xl [&>li>a:hover]:scale-150 w-full lg:flex-row`}
    >
      {MENU_OPTIONS.map((option) => (
        <li
          key={option.name}
          className="border-b-2 border-b-cvr-gold/20 lg:border-b-0"
        >
          <LinkTitle href={option.href} title={option.name} />
        </li>
      ))}
    </ul>
  );
};
