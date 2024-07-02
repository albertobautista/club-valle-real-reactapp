import Image from 'next/image';
import { FC } from 'react';

import { IActivityDetailProps } from './interfaces';

const ActivityDetail: FC<IActivityDetailProps> = ({ activity }) => {
  return (
    <section className="grid grid-cols-1 gap-10 p-5 mt-10 md:grid-cols-1 xl:grid-cols-3 ">
      <div className="flex flex-col col-span-1 gap-6 overflow-hidden xl:col-span-1">
        <h2 className="text-4xl font-semibold tracking-wider">Horario</h2>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <h3 className="text-1xl">{activity.instructor}</h3>
        </div>
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <h3 className="font-light text-1xl">{activity.location}</h3>
        </div>
        {activity?.schedule.map((schedule) => (
          <div key={schedule.day} className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <span className="font-light text-md">{schedule.day}</span>
            </div>
            <div className="flex gap-1">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span className="text-md font-extralight ">
                {schedule.hours.join(' - ')}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full col-span-1 overflow-hidden gap-7 xl:col-span-2 ">
        <div className="w-full ">
          <Image
            src={activity.image}
            width={800}
            height={100}
            alt={activity.label}
            priority
          />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl font-light tracking-wide">
            {activity.label}
          </h3>
          <p className="text-justify text-md">{activity.description}</p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {activity.relatedImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={900}
              height={100}
              alt={activity.label}
              priority
              // className="h-full "
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivityDetail;
