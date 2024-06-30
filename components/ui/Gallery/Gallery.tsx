import React, { FC } from 'react';
import { IGalleryProps } from './interfaces';
import Image from 'next/image';
import Link from 'next/link';

export const Gallery: FC<IGalleryProps> = ({ gallery }) => {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
      {gallery?.map((picture) => (
        <div key={picture.alt}>
          <Link
            href={picture.url}
            target="_blank"
            className="transition-opacity duration-300 hover:opacity-75"
          >
            <Image
              className="h-auto max-w-full rounded-lg"
              src={picture.src}
              alt={picture.alt}
              width={500}
              height={500}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};
