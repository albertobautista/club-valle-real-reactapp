import { WebLayout } from '@components/layouts';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <WebLayout
      title="Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <h1 className="text-6xl underline uppercase text-principal">Hola</h1>
    </WebLayout>
  );
};

export default Home;
