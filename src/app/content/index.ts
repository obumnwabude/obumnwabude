import { coding } from './coding';
import { events } from './events';
import { writing } from './writing';

export const content = { coding, writing, events };

export const profiles = [
  { icon: 'linkedin', link: 'https://linkedin.com/in/obumnwabude' },
  { icon: 'twitter', link: 'https://twitter.com/obumnwabude' },
  { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/13644299' },
  { icon: 'google', link: 'https://g.dev/obumnwabude' },
  { icon: 'facebook', link: 'https://facebook.com/obumnwabude' },
  { icon: 'instagram', link: 'https://instagram.com/obumnwabude' }
];

export const tabs = [
  {
    link: 'coding',
    children: [
      { active: true, link: 'angular' },
      { active: false, link: 'firebase' },
      { active: false, link: 'flutter' },
      { active: false, link: 'nodejs', view: 'NodeJS' }
    ]
  },
  {
    link: 'writing',
    children: [
      { active: true, icon: 'medium', link: 'stories' },
      { active: false, icon: 'hashnode', link: 'blog' },
      // { active: false, icon: 'dev', link: 'how-to', view: 'How To' },
      // { active: false, link: 'keepdeploying', view: 'Keep Deploying' }
    ]
  },
  {
    link: 'events',
    children: [
      {
        active: true,
        link: 'gdsc',
        title: 'Google Developer Students Club',
        view: 'GDSC'
      },
      {
        active: false,
        link: 'genesys',
        title: 'Genesys Campus Club'
      },
      {
        active: false,
        icon: 'microsoft',
        link: 'mlsa',
        title: 'Microsoft Learn Student Ambassador',
        view: 'MLSA'
      }
    ]
  }
];
