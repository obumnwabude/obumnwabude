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
