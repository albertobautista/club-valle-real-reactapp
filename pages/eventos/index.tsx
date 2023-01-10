import { WebLayout } from '@components/layouts';
import type { NextPage } from 'next';

const EventsPage: NextPage = () => {
  return (
    <WebLayout
      title="Eventos - Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <h1 className="text-6xl underline uppercase text-principal">Eventos</h1>
    </WebLayout>
  );
};

export default EventsPage;
