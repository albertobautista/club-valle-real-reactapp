import Link from 'next/link';
import React, { FC } from 'react';
import { IImageCardLinkListProps } from './interfaces';

const ImageCardLinkList: FC<IImageCardLinkListProps> = ({
  activities,
  small,
}) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
      {activities.map((activity) => {
        const { label, slug, image } = activity;
        return (
          <article
            key={slug}
            className={`overflow-hidden col-span-1 rounded aspect-video `}
          >
            <Link
              passHref
              className="relative z-0 flex items-center justify-center h-full p-4 transition-all duration-100 bg-cvr-green/75 group hover:scale-110 gap-x-4"
              href={`/actividades/${slug}`}
              // rel={Astro.url.pathname !== `/team/${id}` && 'preload'}
            >
              <h3
                className={`z-10 font-title text-white uppercase font-semibold tracking-wider ${
                  small ? 'text-base xl:text-lg' : 'text-2xl xl:text-2xl'
                }`}
              >
                {label}
              </h3>

              <div
                className={
                  'z-0 absolute inset-0 opacity-75 bg-center bg-[size:150%] group-hover:bg-[size:200%] transition'
                }
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default ImageCardLinkList;
