export const content = {
  coding: {
    angular: 'laptop',
    nodejs: 'laptop',
    flutter: 'laptop'
  },
  writing: {
    stories: 'drive_file_rename_outline',
    'how-to': 'drive_file_rename_outline',
    blog: 'drive_file_rename_outline'
  },
  events: {
    gdsc: 'group',
    genesys: 'group',
    mlsa: 'group'
  }
};

export const links = [
  { icon: 'facebook', link: 'https://facebook.com/obumnwabude' },
  { icon: 'instagram', link: 'https://instagram.com/obumnwabude' },
  { icon: 'twitter', link: 'https://twitter.com/obumnwabude' },
  { icon: 'linkedin', link: 'https://linkedin.com/in/obumnwabude' },
  { icon: 'github', link: 'https://github.com/obumnwabude' },
  { icon: 'medium', link: 'https://stories.obumnwabude.com' },
  { icon: 'keepdeploying', link: 'https://keepdeploying.com' },
  { icon: 'dev', link: 'https://dev.to/obumnwabude' },
  { icon: 'hashnode', link: 'https://blog.obumnwabude.com' }
];

export const tabs = [
  {
    link: 'coding',
    icon: 'laptop',
    children: [
      { active: true, link: 'angular' },
      { active: false, link: 'firebase' },
      { active: false, link: 'flutter' },
      { active: false, link: 'nodejs', view: 'NodeJS' }
    ]
  },
  {
    link: 'writing',
    icon: 'drive_file_rename_outline',
    children: [
      { active: true, icon: 'medium', link: 'stories' },
      { active: false, icon: 'dev', link: 'how-to', view: 'How To' },
      { active: false, icon: 'hashnode', link: 'blog' },
      { active: false, link: 'freecodecamp', view: 'freeCodeCamp' },
      { active: false, link: 'keepdeploying', view: 'Keep Deploying' }
    ]
  },
  {
    link: 'events',
    icon: 'groups',
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
