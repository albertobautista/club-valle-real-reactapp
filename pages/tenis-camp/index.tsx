import { WebLayout } from '@components/layouts';
import { Container } from '@components/ui/Container';
import type { NextPage } from 'next';
import Image from 'next/image';

const SummerCourses: NextPage = () => {
  return (
    <WebLayout
      title="Tenis Camp - Club Valle Real de Guadalajara"
      pageDescription="Ven a conocer a Club Valle Real de Guadalajara"
    >
      <Container>
        <div className="flex items-center justify-center">
          <Image
            src="/summer/tenis-camp.png"
            alt="Cursos de Verano"
            className="border-2 border-red-600 border-dashed rounded-lg "
            width={800}
            height={400}
          />
        </div>
      </Container>
    </WebLayout>
  );
};

export default SummerCourses;
