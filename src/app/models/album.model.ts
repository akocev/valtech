import { Image } from './image.model';
export interface Album {
  id?: string;
  title: string;
  images: Image[];
}
