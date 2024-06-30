import { WebLayout } from '@components/layouts';
import CarouselsBanner from '@components/ui/CarouselsBanner/CarouselsBanner';
import type { GetStaticProps, NextPage } from 'next';
import { pictures as dataPictures } from 'data/pictures';
import { IHomePageProps, IPicture } from 'interfaces/picture';
import { shuffle } from '@utils/tools';

const Home: NextPage<IHomePageProps> = ({ pictures }) => {
  return (
    <WebLayout
      title="Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <div>
        <CarouselsBanner pictures={pictures} />
      </div>
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
