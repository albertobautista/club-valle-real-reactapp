import React, { FC } from 'react';
import { IEvent } from './interfaces';
import Image from 'next/image';

interface EventsListProps {
  events: IEvent[];
}

export const EventsList: FC<EventsListProps> = ({ events }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-7 md:grid-cols-3 lg:grid-cols-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="max-w-2xl text-center bg-white border border-gray-700 rounded-lg shadow "
        >
          <Image
            className="object-fill w-full rounded-t-lg md:object-cover max-h-96"
            src={event.src}
            alt={event.alt}
            width={2000}
            height={800}
          />
          <div className="md:p-5">
            <h5 className="hidden mb-2 text-xl font-bold tracking-tight text-center text-gray-900 md:inline">
              {event.alt}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};
