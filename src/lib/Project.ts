import type { Image } from './Image';

export type Project = {
  name: string,
  description: string,
  stack: Image[],
  year: number,
  github: string,
  images: Image[], 
}