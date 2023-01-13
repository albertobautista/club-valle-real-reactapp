import ActivityDetail from '@components/common/ActivityDetail/ActivityDetail';
import { ImageHeader } from '@components/common/ImageHeader';
import { WebLayout } from '@components/layouts';
import { Container } from '@components/ui/Container';
import { getActivityInfo } from '@utils/getActivityInfo';
import { activities } from 'data/activities';
import { IActivityPageProps } from 'interfaces';
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const SportsActivitiesPage: NextPage<IActivityPageProps> = ({ activity }) => {
  return (
    <WebLayout
      title="Eventos - Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <ImageHeader image={activity.image} title={activity.label} isHeader />
      <Container>
        <ActivityDetail activity={activity} />
      </Container>
    </WebLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const data = activities;
  const paths = data.map((activity) => ({
    params: { slug: activity.slug },
  }));

  return {
    paths,
    //fallback: false, // false en caso de no existir muestra un 404
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };

  const activity = await getActivityInfo(slug);

  if (!activity) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return {
    props: {
      activity,
    },
    // revalidate: 86400, //  es cada 24 hrs
  };
};

export default SportsActivitiesPage;
