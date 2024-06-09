import { WebLayout } from '@components/layouts';
import CarouselsBanner from '@components/ui/CarouselsBanner/CarouselsBanner';
import type { NextPage } from 'next';
import { activities } from 'data/activities';

const Home: NextPage = () => {
  return (
    <WebLayout
      title="Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <div className="">
        <CarouselsBanner activities={activities} />
      </div>
    </WebLayout>
  );
};

export default Home;
