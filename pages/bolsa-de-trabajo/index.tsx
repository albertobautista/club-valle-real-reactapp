import { WebLayout } from '@components/layouts';
import { Container } from '@components/ui/Container';
import { SimpleCard } from '@components/ui/SimpleCard';
import { jobs } from 'data/jobs';
import type { NextPage } from 'next';

const EventsPage: NextPage = () => {
  return (
    <WebLayout
      title="Bolsa de Trabajo - Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <Container>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 divide-cvr-gold">
            <h2 className="text-3xl tracking-wider text-cvr-green">
              Ofertas Laborales
            </h2>
            <hr />
            <div className="grid gap-8 grid-col-1 md:grid-cols-3">
              {jobs
                .sort((a, b) => a.category.localeCompare(b.category))
                .map((job, index) => (
                  <SimpleCard
                    key={index}
                    title={job.title}
                    requirements={job.requirements}
                    link={job.link}
                    category={job.category}
                  />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </WebLayout>
  );
};

export default EventsPage;
