export interface CardDate {
  // 1 for January, 12 for December
  month: number;
  year: number;
}

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

export interface CardTag {
  svg: string;
  title?: string;
}

export interface ObumCard {
  date?: CardDate;
  description: string;
  image: CardImage;
  links: CardLink[];
  tags: CardTag[];
  title: string;
}
