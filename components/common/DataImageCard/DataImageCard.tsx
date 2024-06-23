import React, { FC } from 'react';
import { IDataImageCardProps } from './interfaces';

const DataImageCard: FC<IDataImageCardProps> = ({ image }) => {
  return (
    <section
      className={`flex flex-col justify-center w-full shadow-2xl md:h-64 m-0`}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${image})`,
      }}
    >
      <article className="pb-0 pr-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex flex-col">
          <div className="grid items-center justify-center grid-cols-1 gap-3 p-3 place-items-center sm:grid-cols-2 md:grid-cols-4 md:gap-10 md:justify-around md:w-full">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-white"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>

              <div className="flex-col">
                <h2 className="text-5xl font-bold text-white">600</h2>
                <h2 className="text-xl font-light text-white">Usuarios</h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                  clipRule="evenodd"
                />
              </svg>

              <div className="flex-col">
                <h2 className="text-5xl font-bold text-white">15</h2>
                <h2 className="text-xl font-light text-white">
                  Años de experiencia
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                fill="currentColor"
                className="w-10 h-10 text-white"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>sports-tennis-solid</title>
                <g id="Layer_2" data-name="Layer 2">
                  <g id="invisible_box" data-name="invisible box">
                    <rect width="48" height="48" fill="none" />
                  </g>
                  <g id="Q3_icons" data-name="Q3 icons">
                    <path d="M6,26H5.1A19,19,0,0,0,22,42.9V42A16,16,0,0,0,6,26Zm35.6-3.5H43A19,19,0,0,0,25.6,5a7.1,7.1,0,0,0-.1,1.4A16.1,16.1,0,0,0,41.6,22.5Zm0,3A19,19,0,0,1,22.5,6.4,7.1,7.1,0,0,1,22.6,5,19.1,19.1,0,0,0,5,23H6A19,19,0,0,1,25,42v1A19.1,19.1,0,0,0,43,25.4Z" />
                  </g>
                </g>
              </svg>
              <div className="flex-col">
                <h2 className="text-5xl font-bold text-white">48</h2>
                <h2 className="text-xl font-light text-white">Instructores</h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <svg
                fill="currentColor"
                className="w-10 h-10 text-white"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <g id="XMLID_530_">
                  <g id="XMLID_531_">
                    <path
                      id="XMLID_532_"
                      d="M115,147.75c20.389,0,38.531-9.78,50-24.889c11.469,15.109,29.611,24.889,50,24.889
			c34.601,0,62.75-28.149,62.75-62.75S249.601,22.25,215,22.25c-20.389,0-38.531,9.78-50,24.889
			C153.531,32.03,135.389,22.25,115,22.25c-34.601,0-62.75,28.149-62.75,62.75S80.399,147.75,115,147.75z M215,52.25
			c18.059,0,32.75,14.691,32.75,32.75s-14.691,32.75-32.75,32.75S182.25,103.059,182.25,85S196.941,52.25,215,52.25z M115,52.25
			c18.059,0,32.75,14.691,32.75,32.75s-14.691,32.75-32.75,32.75S82.25,103.059,82.25,85S96.941,52.25,115,52.25z"
                    />
                  </g>
                  <g id="XMLID_536_">
                    <path
                      id="XMLID_782_"
                      d="M215,177.75c-17.373,0-34.498,3.942-50.022,11.44c-15.122-7.327-32.078-11.44-49.978-11.44
			c-63.411,0-115,51.589-115,115c0,8.284,6.716,15,15,15h200h100c8.284,0,15-6.716,15-15C330,229.339,278.411,177.75,215,177.75z
			 M31.325,277.75c7.106-39.739,41.923-70,83.675-70s76.569,30.261,83.675,70H31.325z M229.021,277.75
			c-3.45-26.373-15.873-49.96-34.092-67.597c6.539-1.583,13.277-2.403,20.07-2.403c41.751,0,76.569,30.261,83.675,70H229.021z"
                    />
                  </g>
                </g>
              </svg>
              <div className="flex-col">
                <h2 className="text-5xl font-bold text-white">100</h2>
                <h2 className="text-xl font-light text-white">Empleados</h2>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default DataImageCard;
