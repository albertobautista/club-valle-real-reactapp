import DataImageCard from '@components/common/DataImageCard/DataImageCard';
import DataWithHeader from '@components/common/DataWithHeader/DataWithHeader';
import { ImageHeader } from '@components/common/ImageHeader';
import { WebLayout } from '@components/layouts';
import { Container } from '@components/ui/Container';
import { SectionTitleContainer } from '@components/ui/SectionTitleContainer';
import { futbol, tenis } from 'data/activities';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <WebLayout
      title="Nuestro Club "
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <ImageHeader image={futbol} title="Nuestro Club" isHeader />
      <Container>
        <main className="mt-8">
          <SectionTitleContainer title="Ubicación" position="center">
            <section className="flex flex-col gap-10">
              <div className="border-2">
                <iframe
                  title="Mapa de Google Maps ubicado Club Valle Real de Guadalajara"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.549111881166!2d-103.44354148507438!3d20.72852630333563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af4824089bc7%3A0xea42c739a83a552d!2sClub%20Valle%20Real!5e0!3m2!1ses-419!2smx!4v1673637870626!5m2!1ses-419!2smx"
                  width="600"
                  height="450"
                  className="block w-full m-auto"
                  style={{ border: 0 }}
                  // allowfullscreen=""
                  loading="lazy"
                  // referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <p className="text-justify">
                Club Valle Real de Guadalajara, A. C. se encuentra ubicado
                dentro del Fraccionamiento Valle Real en la Zona Real de
                Zapopan, Jalisco, con domicilio en Av. Paseo San Arturo Norte
                #2000.
              </p>
              <SectionTitleContainer title="Horarios" position="center">
                <div className="grid grid-cols-1 grid-rows-1 text-center gap-y-12 gap-x-40 md:grid-cols-2 md:grid-rows-2">
                  <DataWithHeader
                    title="Membresias y Atención al Usuario"
                    body=" Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext."
                  />
                  <DataWithHeader
                    title="Horario Caja General"
                    body=" Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext."
                  />
                  <DataWithHeader
                    title="Oficina de Deportes"
                    body=" Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext."
                  />
                  <DataWithHeader
                    title="Información para eventos"
                    body=" Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext."
                  />
                </div>
              </SectionTitleContainer>
              <DataImageCard image={tenis} />
            </section>
          </SectionTitleContainer>
        </main>
      </Container>
    </WebLayout>
  );
};

export default AboutPage;
