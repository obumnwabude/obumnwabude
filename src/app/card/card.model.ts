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
  dev: 'https://dev.to/obumnwabude',
  firebase: 'https://firebase.google.com',
  'firebase-blog': 'https://medium.com/firebase-developers',
  flutter: 'https://flutter.dev',
  freecodecamp: 'https://freecodecamp.org',
  gdsc: 'https://g.co/dev/dsc',
  gdg: 'https://g.co/dev/gdg',
  genesys: 'https://genesystechhub.com',
  hashnode: 'https://blog.obumnwabude.com',
  keepdeploying: 'https://keepdeploying.com',
  mlsa: 'https://studentambassadors.com',
  medium: 'https://stories.obumnwabude.com',
  nodejs: 'https://nodejs.org',
  reflect: 'https://reflect.run',
  sweetcode: 'https://sweetcode.io'
};

export interface ObumCard {
  date?: CardDate;
  description: string;
  image: CardImage;
  links: CardLink[];
  tags: CardTag[];
  title: string;
}
