import { IEvent } from '@components/ui/EventsList/interfaces';

export interface IPicture {
  src: string;
  alt: string;
  active: boolean;
}

export interface IHomePageProps {
  pictures: IPicture[];
  events: IEvent[];
}
