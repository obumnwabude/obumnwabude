export interface CardImage {
  alt: string;
  name: string;
  png?: boolean;
}

export interface Card {
  title: string;
  description: string;
  image: CardImage;
}

export interface ContentDate {
  month: number;
  year: number;
}

export interface ContentAction {
  link: string;
  title: string;
}

export interface Project extends Card {
  date?: ContentDate;
  actions: ContentAction[];
  tags: string[];
}

export interface Article extends Card {
  date: ContentDate;
  link: string;
  publishedOn: string;
}

export const banners = [
  'Web3 Dev',
  'Solana (Rust)',
  'EVM (Solidity)',
  'Mobile Dev',
  'Flutter (Dart)',
  'Frontend',
  'Backend (NodeJS)',
  'Technical Writing',
  'Community',
  'Vibes',
];

export const months = [
  '',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const displayDate = ({ month, year }: ContentDate) =>
  `${months[month]} ${year}`;
