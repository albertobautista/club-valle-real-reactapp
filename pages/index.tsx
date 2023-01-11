import { ImageHeader } from '@components/common/ImageHeader';
import { WebLayout } from '@components/layouts';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <WebLayout
      title="Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <ImageHeader />
    </WebLayout>
  );
};

export default Home;
