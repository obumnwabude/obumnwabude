export interface CardImage {
  alt: string;
  // file name (without extension)
  // all images should be pngs and be found in assets/images
  name: string;
}

export interface CardLink {
  href: string;
  svg: string;
  title: string;
}

export interface ObumCard {
  description: string;
  image: CardImage;
  links: CardLink[];
  title: string;
}
