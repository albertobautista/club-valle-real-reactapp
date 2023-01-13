import Link from 'next/link';
import React, { FC } from 'react';
import { IImageHeaderProps } from './interfaces';
export const ImageHeader: FC<IImageHeaderProps> = ({
  image,
  title,
  isHeader,
}) => {
  return (
    <section
      className={`flex flex-col justify-center w-full  ${
        isHeader ? 'h-96' : 'h-44 rounded'
      } m-0`}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
      }}
    >
      <article className="pb-0 pr-0 ">
        <div className="flex items-center">
          <div
            className={`flex justify-center w-full ${
              isHeader ? 'p-3' : 'p-1'
            } bg-cvr-green/75`}
          >
            <p className="text-xl font-semibold tracking-wider text-white uppercase font-title">
              {title}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
