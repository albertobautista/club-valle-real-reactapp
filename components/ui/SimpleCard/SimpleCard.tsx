import { Job } from 'data/jobs';
import React, { FC, useState } from 'react';

export const SimpleCard: FC<Job> = ({
  title,
  requirements,
  link,
  category,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl md:w-[400px]">
      {/* Etiqueta en dirección diagonal dentro de la tarjeta */}
      <div className="absolute px-2 py-1 text-xs font-bold text-white rounded bg-cvr-gold top-4 right-4">
        {category}
      </div>
      <div className="p-6">
        <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {title}
        </h5>
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            isExpanded ? 'max-h-screen' : 'max-h-32'
          }`}
        >
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            {requirements.map((requirement, index) => (
              <li key={index}>{requirement.title}</li>
            ))}
          </ul>
        </div>
        {requirements.length > 2 && (
          <button
            onClick={toggleExpand}
            className="mt-2 text-sm text-blue-500 hover:underline"
          >
            {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
          </button>
        )}
      </div>
      <div className="flex justify-center p-6 pt-0">
        <button
          onClick={() => window.open(link, '_blank')}
          className="align-middle bg-cvr-green select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
        >
          Ver empleo
        </button>
      </div>
    </div>
  );
};
