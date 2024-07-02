import { WebLayout } from '@components/layouts';
import CarouselsBanner from '@components/ui/CarouselsBanner/CarouselsBanner';
import { EventsList } from '@components/ui/EventsList';
import { IEvent } from '@components/ui/EventsList/interfaces';
import { Gallery } from '@components/ui/Gallery';
import { SectionTitleContainer } from '@components/ui/SectionTitleContainer';
import { shuffle } from '@utils/tools';
import { events as dataEvents } from 'data/events';
import { gallery } from 'data/gallery';
import { pictures as dataPictures } from 'data/pictures';
import { IHomePageProps, IPicture } from 'interfaces/picture';
import type { GetStaticProps, NextPage } from 'next';

const Home: NextPage<IHomePageProps> = ({ pictures, events }) => {
  return (
    <WebLayout
      title="Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <section>
        <CarouselsBanner pictures={pictures} />
      </section>

      <section className="p-5 mt-5">
        <SectionTitleContainer title="Galería" position="center">
          <Gallery gallery={gallery} />
        </SectionTitleContainer>
      </section>
      <section className="p-5 mt-5">
        <SectionTitleContainer title="Eventos" position="center">
          <EventsList events={events} />
        </SectionTitleContainer>
      </section>
    </WebLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const pictures: IPicture[] = dataPictures.filter((picture) => picture.active);
  const shuffledActivePictures = shuffle(pictures);

  const events: IEvent[] = dataEvents.filter((event) => event.active);

  return {
    props: {
      pictures: shuffledActivePictures,
      events,
    },
  };
};

export default Home;
