export interface CardImage {
  alt: string;
  name: string;
  png?: boolean;
}

export interface Card {
  title: string;
  description: string;
  image: CardImage;
  ctasEqualWeights?: boolean | undefined;
}

export interface ContentDate {
  month: number;
  year: number;
}

export type ActionIcon =
  | 'aboutreadmore'
  | 'apple'
  | 'article'
  | 'award'
  | 'code'
  | 'document'
  | 'externallink'
  | 'facebook'
  | 'folder'
  | 'github'
  | 'googlecolab'
  | 'googledevelopers'
  | 'googleplay'
  | 'home'
  | 'instagram'
  | 'linkedin'
  | 'presentation'
  | 'recording'
  | 'rocket'
  | 'slides'
  | 'ticket'
  | 'users'
  | 'x'
  | 'zap';

export interface ContentAction {
  icon: ActionIcon;
  link: string;
  title: string;
}

export interface ProjectArchitecture {
  frontend?: string[];
  backend?: string[];
  blockchainOrAi?: string[];
  infrastructure?: string[];
}

export type CodingCategory = 'Full-Stack Web' | 'Mobile & Flutter' | 'Blockchain / Web3' | 'AI & Cloud';
export const CodingCategories = ['Full-Stack Web', 'Mobile & Flutter', 'Blockchain / Web3', 'AI & Cloud'];

interface ProjectOrEventType extends Card {
  actions: ContentAction[];
  tags: string[];
  expandedTags?: string[];
  longDescription: string;
}

export interface CodingProject extends ProjectOrEventType {
  category: CodingCategory;
  status?: string;
  role?: string;
  architecture?: ProjectArchitecture;
  highlights?: string[];
  metrics?: string;
}

export interface CommunityResources {
  slides?: string;
  codelab?: string;
  colabNotebook?: string;
  githubRepo?: string;
  recording?: string;
}

export type EventSessionFormat = 'Workshop' | 'Talk' | 'Keynote' | 'Panel';
export const EventSessionFormats = ['Workshop', 'Talk', 'Keynote', 'Panel'] as const;

export interface CommunityEvent extends ProjectOrEventType {
  date: ContentDate;
  eventSeries?: string;
  location?: string;
  sessionFormat: EventSessionFormat;
  curriculum?: string[];
  keyTakeaways?: string[];
  resources?: CommunityResources;
}

export type ArticleCategory = 'Architectures' | '#Flutter' | 'Stories' | 'Communities';
export const ArticleCategories = ['Architectures', '#Flutter', 'Stories', 'Communities'] as const;

export interface Article extends Card {
  date: ContentDate;
  link: string;
  category: ArticleCategory;
  publishedOn: string;
  readTime: string;
  tags?: string[];
  keyTakeaways?: string[];
  topicsCovered?: string[];
  repoUrl?: string;
  demoUrl?: string;
  longDescription?: string;
}

export const banners = [
  'AI',
  'Google Cloud',
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

export const displayDate = ({ month, year }: ContentDate) => `${months[month]} ${year}`;
