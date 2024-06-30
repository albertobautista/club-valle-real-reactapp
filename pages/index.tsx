import { WebLayout } from '@components/layouts';
import CarouselsBanner from '@components/ui/CarouselsBanner/CarouselsBanner';
import type { GetStaticProps, NextPage } from 'next';
import { pictures as dataPictures } from 'data/pictures';
import { IHomePageProps, IPicture } from 'interfaces/picture';
import { shuffle } from '@utils/tools';
import { Gallery } from '@components/ui/Gallery';
import { gallery } from 'data/gallery';

const Home: NextPage<IHomePageProps> = ({ pictures }) => {
  return (
    <WebLayout
      title="Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <section>
        <CarouselsBanner pictures={pictures} />
      </section>

      <section className="p-5 mt-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 divide-cvr-gold">
            <h2 className="text-3xl tracking-wider text-center text-cvr-green">
              Galería
            </h2>
            <hr />
            <Gallery gallery={gallery} />
          </div>
        </div>
      </section>
      {/* <section className="p-5 mt-5">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 divide-cvr-gold">
            <h2 className="text-3xl tracking-wider text-center text-cvr-green">
              Eventos
            </h2>
            <hr />

            <div className="max-w-xs bg-white border border-gray-700 rounded-lg shadow ">
              <a href="#">
                <img
                  className="object-cover w-full h-48 rounded-t-lg"
                  src="/summer/tenis-camp.png"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 ">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </WebLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pictures: IPicture[] = dataPictures.filter((picture) => picture.active);
  const shuffledActivePictures = shuffle(pictures);

  return {
    props: {
      pictures: shuffledActivePictures,
    },
  };
};

export default Home;
