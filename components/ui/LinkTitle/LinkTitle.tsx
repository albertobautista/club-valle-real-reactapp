import Link from 'next/link';
import { FC } from 'react';

import { ILinkTitleProps } from './interfaces';

export const LinkTitle: FC<ILinkTitleProps> = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="font-semibold tracking-wider uppercase duration-150 border-b-2 border-transparent text-cvr-green hover:border-cvr-gold"
    >
      {title}
    </Link>
  );
};
