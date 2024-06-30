import { IPicture } from 'interfaces/picture';

export interface IGalleryPicture extends IPicture {
  url: string;
}
export interface IGalleryProps {
  gallery: IGalleryPicture[];
}
