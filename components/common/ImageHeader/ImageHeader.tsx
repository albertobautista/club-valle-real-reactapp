import Image from 'next/image';
import React, { FC } from 'react';
import { IImageHeaderProps } from './interfaces';
export const ImageHeader: FC<IImageHeaderProps> = ({
  image,
  title,
  isHeader,
}) => {
  return (
    <section className={`relative  ${isHeader ? 'h-96' : 'h-44 rounded'} m-0`}>
      <Image
        src={image}
        width={500}
        height={100}
        alt={title}
        className={`object-cover w-full  ${
          isHeader ? 'h-96' : 'h-44 rounded'
        } `}
      />
      <article className="absolute w-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
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
