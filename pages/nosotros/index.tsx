import { ImageHeader } from '@components/common/ImageHeader';
import { WebLayout } from '@components/layouts';
import { Container } from '@components/ui/Container';
import { taekwondo } from 'data/activities';
import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <WebLayout
      title="Nosotros - Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <ImageHeader image={taekwondo} title="Nosotros" isHeader />
      <Container>
        <main className="mt-8">
          <section className="flex flex-col gap-10">
            <h2 className="pb-2 text-3xl tracking-wider text-center border-b-2 text-cvr-green border-b-cvr-gold">
              Ubicación
            </h2>
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
              Club Valle Real de Guadalajara, A. C. se encuentra ubicado dentro
              del Fraccionamiento Valle Real en la Zona Real de Zapopan,
              Jalisco, con domicilio en Av. Paseo San Arturo Norte #2000.
            </p>
            <h2 className="pb-2 text-3xl tracking-wider text-center border-b-2 text-cvr-green border-b-cvr-gold">
              Horarios
            </h2>
            <div className="grid grid-cols-1 grid-rows-1 text-center gap-y-12 gap-x-40 md:grid-cols-2 md:grid-rows-2">
              <div className="flex flex-col ">
                <h3 className="text-lg font-bold text-cvr-green">
                  Membresias y Atención al Usuario
                </h3>
                <p>
                  Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.
                </p>
                <p>
                  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext.
                </p>
              </div>
              <div className="flex flex-col ">
                <h3 className="text-lg font-bold text-cvr-green">
                  Caja General
                </h3>
                <p>
                  Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.
                </p>
                <p>
                  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext.
                </p>
              </div>{' '}
              <div className="flex flex-col ">
                <h3 className="text-lg font-bold text-cvr-green">
                  Caja General
                </h3>
                <p>
                  Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.
                </p>
                <p>
                  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext.
                </p>
              </div>{' '}
              <div className="flex flex-col ">
                <h3 className="text-lg font-bold text-cvr-green">
                  Caja General
                </h3>
                <p>
                  Lunes a Viernes 9:00 a 14:00 hrs. y 15:00 a 18:00 hrs. Sábados
                  9:00 a 14:00 hrs.
                </p>
                <p>
                  Tels. (33) 3832.0136, 3832.0257, 3832.0385, 3832.0513. Ext.
                </p>
              </div>{' '}
            </div>
          </section>
        </main>
      </Container>
    </WebLayout>
  );
};

export default AboutPage;
