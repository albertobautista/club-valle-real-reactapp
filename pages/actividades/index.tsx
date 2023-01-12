import ImageCardLinkList from '@components/common/ImageCardLinkList/ImageCardLinkList';
import { WebLayout } from '@components/layouts';
import { Container } from '@components/ui/Container';
import { activities } from 'data/activities';
import { IActivitiesPageProps } from 'interfaces';
import type { GetStaticProps, NextPage } from 'next';
const ActivitiesPage: NextPage<IActivitiesPageProps> = ({
  sportsActivities,
  culturalActivities,
}) => {
  return (
    <WebLayout
      title="Eventos - Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 divide-cvr-gold">
            <h2 className="text-3xl tracking-wider text-cvr-green">Deportes</h2>
            <hr />
            <ImageCardLinkList activities={sportsActivities} />
          </div>
          <div className="flex flex-col gap-5 divide-cvr-gold">
            <h2 className="text-3xl tracking-wider text-cvr-green">
              Culturales
            </h2>
            <hr />
            <ImageCardLinkList activities={culturalActivities} />
          </div>
        </div>
      </Container>
    </WebLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const sportsActivities = activities.filter(
    (activity) => activity.type === 'sports'
  );

  const culturalActivities = activities.filter(
    (activity) => activity.type === 'cultural'
  );

  return {
    props: {
      sportsActivities,
      culturalActivities,
    },
  };
};

export default ActivitiesPage;
