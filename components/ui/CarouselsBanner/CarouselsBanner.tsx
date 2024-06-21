import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { IActivity } from 'interfaces';

type Props = {
  activities: IActivity[];
};

Autoplay.globalOptions = { delay: 6000 };

const CarouselsBanner = ({ activities }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div className="relative overflow-hidden cursor-pointer" ref={emblaRef}>
      <div className="flex">
        {activities.map((movie) => (
          <div key={movie.slug} className="relative min-w-0 flex-full">
            <Image
              key={movie.slug}
              src={movie.image}
              alt={movie.label}
              width={200}
              height={100}
              className="object-cover w-full max-h-[500px] md:max-h-[600px] xl:max-h-[700px]"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-blue-900/25 to-[#316767]" />
    </div>
  );
};

export default CarouselsBanner;
