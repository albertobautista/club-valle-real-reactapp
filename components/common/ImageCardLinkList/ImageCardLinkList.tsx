import Link from 'next/link';
import React, { FC } from 'react';

import { ImageHeader } from '../ImageHeader';
import { IImageCardLinkListProps } from './interfaces';

const ImageCardLinkList: FC<IImageCardLinkListProps> = ({ activities }) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
      {activities.map((activity) => {
        const { label, slug, image } = activity;
        return (
          <Link
            key={slug}
            href={`/actividades/${slug}`}
            // rel={Astro.url.pathname !== `/team/${id}` && 'preload'}
            className="transition duration-100 transform hover:scale-110"
          >
            <ImageHeader image={image} title={label} isHeader={false} />
          </Link>
        );
      })}
    </section>
  );
};

export default ImageCardLinkList;
