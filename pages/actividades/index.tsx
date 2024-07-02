import ImageCardLinkList from '@components/common/ImageCardLinkList/ImageCardLinkList';
import { WebLayout } from '@components/layouts';
import { Container } from '@components/ui/Container';
import { SectionTitleContainer } from '@components/ui/SectionTitleContainer';
import { activities } from 'data/activities';
import { IActivitiesPageProps } from 'interfaces';
import type { GetStaticProps, NextPage } from 'next';
const ActivitiesPage: NextPage<IActivitiesPageProps> = ({
  sportsActivities,
  culturalActivities,
}) => {
  return (
    <WebLayout
      title="Actividades deportivas y culturales"
      pageDescription="Actividades deportivas y culturales en Club Valle Real de Guadalajara"
    >
      <Container>
        <div className="flex flex-col gap-10">
          <SectionTitleContainer title="Deportes">
            <ImageCardLinkList activities={sportsActivities} />
          </SectionTitleContainer>
          <SectionTitleContainer title="Culturales">
            <ImageCardLinkList activities={culturalActivities} />
          </SectionTitleContainer>
        </div>
      </Container>
    </WebLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const sportsActivities = activities
    .filter((activity) => activity.type === 'sports' && activity.active)
    .sort((a, b) => a.label.localeCompare(b.label));

  const culturalActivities = activities
    .filter((activity) => activity.type === 'cultural' && activity.active)
    .sort((a, b) => a.label.localeCompare(b.label));

  return {
    props: {
      sportsActivities,
      culturalActivities,
    },
  };
};

export default ActivitiesPage;
