import React from 'react';
import profilePic from '/public/activities/sports/test.jpeg';

export const ImageHeader = () => {
  return (
    <section
      className="flex flex-col justify-center m-0 h-96"
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${profilePic.src})`,
      }}
    >
      <article className="pb-0 pr-0 ">
        <div className="flex items-center">
          <div className="flex justify-center w-full p-3 bg-cvr-green/75">
            <p className="text-3xl font-semibold tracking-wider text-white uppercase font-title">
              Gimansio
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};
