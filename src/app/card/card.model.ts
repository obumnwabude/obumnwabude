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

export const tagAbouts = {
  angular: 'https://angular.io',
  csstricks: 'https://css-tricks.com',
  firebase: 'https://firebase.google.com',
  flutter: 'https://flutter.dev',
  freecodecamp: 'https://freecodecamp.org',
  gdsc: 'https://g.co/dev/dsc',
  genesys: 'https://genesystechhub.com',
  keepdeploying: 'https://keepdeploying.com',
  mlsa: 'https://studentambassadors.com',
  nodejs: 'https://nodejs.org'
}

export interface ObumCard {
  date?: CardDate;
  description: string;
  image: CardImage;
  links: CardLink[];
  tags: CardTag[];
  title: string;
}
