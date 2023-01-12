import React, { FC } from 'react';
import { IImageHeaderProps } from './interfaces';

export const ImageHeader: FC<IImageHeaderProps> = ({ image, title }) => {
  return (
    <section
      className="flex flex-col justify-center m-0 h-96"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
      }}
    >
      <article className="pb-0 pr-0 ">
        <div className="flex items-center">
          <div className="flex justify-center w-full p-3 bg-cvr-green/75">
            <p className="text-3xl font-semibold tracking-wider text-white uppercase font-title">
              {title}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
