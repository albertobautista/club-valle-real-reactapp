import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { IPicture } from 'interfaces/picture';
import Image from 'next/image';

type Props = {
  pictures: IPicture[];
};

Autoplay.globalOptions = { delay: 6000 };

const CarouselsBanner = ({ pictures }: Props) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);

  return (
    <div className="relative overflow-hidden cursor-pointer" ref={emblaRef}>
      <div className="flex">
        {pictures.map((picture) => (
          <div key={picture.alt} className="relative min-w-0 flex-full">
            <Image
              src={picture.src}
              alt={picture.alt}
              width={2000}
              height={1000}
              className="object-cover w-full max-h-[500px] md:max-h-[600px] xl:max-h-[700px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselsBanner;
