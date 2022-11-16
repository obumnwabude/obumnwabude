import { ObumCard } from '../card/card.model';

export const community: ObumCard[] = [
  {
    title: 'DevFest Yaounde 2022',
    date: { month: 11, year: 2022 },
    description:
      'Was the main facilitator for Flutter in DevFest. Assisted participants in completing Flutter Quests on Cloud Skills Boost (formerly Qwiklabs).',
    image: { alt: 'Speaker Flyer', name: 'obum-devfest-yaounde' },
    links: [
      {
        href: 'https://twitter.com/obumnwabude/status/1588822831223435264',
        title: 'Thread',
        svg: 'twitter'
      }
    ],
    tags: [{ svg: 'speaker' }, { svg: 'gdsc', title: 'GDG' }]
  },
  {
    title: 'Why you should use Flutter',
    date: { month: 6, year: 2022 },
    description:
      'Explained detailed benefits of why we should use Flutter for our projects.',
    image: { alt: 'Event Flyer', name: 'gdsc-why-flutter' },
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1EuXoQC0zO_tPq8deT6plxuwbzK988-789FxUsdTfJfM/edit?usp=sharing&resourcekey=0-V0dhDAuwoCJimDdxeyBItA',
        title: 'Slides',
        svg: 'slides'
      },
      {
        href: 'https://youtu.be/yiNGvba7bhs',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [{ svg: 'speaker' }, { svg: 'gdsc', title: 'GDSC' }]
  },
  {
    title: 'FlutterFest Enugu 2022',
    date: { month: 5, year: 2022 },
    description: 'Spoke on "How to Implement any Screen/UI in Flutter"',
    image: { alt: 'Speaker Flyer', name: 'obum-flutterfest-enugu' },
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1pfnoHvdG-xyOkekynN5kzCOirF7IFR7qSaOPRxyH31g/edit?usp=sharing&resourcekey=0-t2MlHWtBTgw-q37Sy87nzQ',
        title: 'Slides',
        svg: 'slides'
      },
      {
        href: 'https://facebook.com/story.php?story_fbid=pfbid02E9mkdSk9rvEkaeBqWQNysMk3J9eFA5bnWf1HAuLtbaZa8VMpC3fXzkgaZLRksfVxl&id=101671715841906',
        title: 'Post',
        svg: 'facebook'
      }
    ],
    tags: [{ svg: 'speaker' }, { svg: 'gdsc', title: 'GDG' }]
  },
  {
    title: 'Understanding Technical Writing',
    date: { month: 4, year: 2022 },
    description:
      'Ihechikara, freeCodeCamp staff, introduced the community to Technical Writing and how to prepare for it.',
    image: {
      alt: 'Slide from the event slides',
      name: 'understanding-technical-writing'
    },
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1QrBqRMKlQ1QZms-LJjsSXa3OsFYx_pAm/edit?usp=drivesdk&ouid=114519401531947192354&rtpof=true&sd=true',
        title: 'Slides',
        svg: 'slides'
      },
      {
        href: 'https://youtu.be/7T0-712hs6Y',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [{ svg: 'grass', title: 'Organized' }, { svg: 'genesys' }]
  },
  {
    title: 'Careers In Tech',
    date: { month: 3, year: 2022 },
    description:
      'Onyebuchi Nwafor at VeendHQ explained to the community why we should consider a career path in the tech space.',
    image: { alt: 'About the speaker', name: 'careers-in-tech' },
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1K7OY6OmYM_4bO6trZo2o9FhO-wZ2FYME/edit#slide=id.p1',
        title: 'Slides',
        svg: 'slides'
      },
      {
        href: 'https://youtu.be/0AgBinwAPic',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [{ svg: 'grass', title: 'Organized' }, { svg: 'genesys' }]
  },
  {
    title: 'Info Session',
    date: { month: 3, year: 2022 },
    description:
      'Ezra at Genesys explained about community and about Genesys to the attendees.',
    image: { alt: '', name: 'genesys-info-session' },
    links: [
      {
        href: 'https://docs.google.com/presentation/d/1qkTbbUpkb-9ASFZUqOFI9O7_PKQDOk5OrNhWyNxbphM/edit?usp=sharing',
        title: 'Slides',
        svg: 'slides'
      },
      {
        href: 'https://youtu.be/fIdwA4zt6Sc',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [{ svg: 'grass', title: 'Organized' }, { svg: 'genesys' }]
  },
  {
    title: "Your GitHub Profile's README",
    date: { month: 2, year: 2022 },
    description:
      'Explained why and how to beautify the README of your GitHub profile and GitHub repositories.',
    image: { alt: 'Event Flyer', name: 'github-profile-readme' },
    links: [
      {
        href: 'https://1drv.ms/p/s!AiER2Bfzp1AIgSwDQhEv4QmzEHI6?e=GKxYJZ',
        title: 'Powerpoint',
        svg: 'powerpoint'
      },
      {
        href: 'https://youtu.be/yTbhmbQTn1Y',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [{ svg: 'speaker' }, { svg: 'microsoft', title: 'MLSA' }]
  },
  {
    title: 'Introduction to Flutter (Todo App)',
    date: { month: 11, year: 2021 },
    description: 'Taught Flutter on screen while building a simple Todo App.',
    image: { alt: 'Screenshot of Building Todo App', name: 'gdsc-todo' },
    links: [
      {
        href: 'https://github.com/gdscaefunai/todo_flutter_intro',
        title: 'Code',
        svg: 'github'
      },
      {
        href: 'https://youtu.be/S8qAld1rg8c',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [{ svg: 'speaker' }, { svg: 'gdsc', title: 'GDSC' }]
  },
  {
    title: 'Collaborating with GitHub',
    date: { month: 8, year: 2021 },
    description:
      'Taught the audience on how to use GitHubs features like forks, pull requests and issues, to go about collaboration.',
    image: { alt: 'Event Flyer', name: 'collaborating-with-github' },
    links: [
      {
        href: 'https://mlsagithub.web.app',
        title: 'Attendees',
        svg: 'open-in-new'
      },
      {
        href: 'https://1drv.ms/p/s!AiER2Bfzp1AIgS0wu4xK-p4keIx-?e=mHqzFk',
        title: 'Powerpoint',
        svg: 'powerpoint'
      },
      {
        href: 'https://youtu.be/-yC5CQsYP0k',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [{ svg: 'speaker' }, { svg: 'microsoft', title: 'MLSA' }]
  },
  {
    title: '2021 DES & DEV Bootcamp',
    date: { month: 5, year: 2021 },
    description:
      '4 weeks intensive learning + 2 weeks of community building with UI/UX DESign and Web DEVelopment tracks.',
    image: {
      alt: 'Picture of Community Members',
      name: '2021-desdev-bootcamp'
    },
    links: [
      {
        href: 'https://medium.com/dscaefunai/8853deda34ef',
        title: 'Story',
        svg: 'medium'
      }
    ],
    tags: [
      { svg: 'grass', title: 'Organized' },
      { svg: 'gdsc', title: 'GDSC' }
    ]
  },
  {
    title: '2021 Solution Challenge',
    date: { month: 2, year: 2021 },
    description:
      'Meetup and workshops we held to sensitive for the GDSC Solution Challenge in our community.',
    image: {
      alt: 'Picture of Community Members',
      name: '2021-solution-challenge'
    },
    links: [
      {
        href: 'https://dsc.community.dev/e/m8tk74/',
        title: 'Details',
        svg: 'open-in-new'
      },
      {
        href: 'https://medium.com/dscaefunai/9bd29c242ed7',
        title: 'Story',
        svg: 'medium'
      }
    ],
    tags: [
      { svg: 'grass', title: 'Organized' },
      { svg: 'gdsc', title: 'GDSC' }
    ]
  },
  {
    title: 'Git and GitHub',
    date: { month: 11, year: 2020 },
    description:
      'Collaboration of six GDSCs to bring to introduce Version Control to our communities. Auwal MS was speaker.',
    image: { alt: 'Section of Event Flyer', name: 'git-and-github-event' },
    links: [
      {
        href: 'https://githubevent.web.app',
        title: 'Attendees',
        svg: 'open-in-new'
      },
      {
        href: 'https://docs.google.com/presentation/d/1__cTDHCp2r6rhQxDGlEWkJSZF0kOQCcDNaNG7qGSca0/edit?usp=sharing',
        title: 'Slides',
        svg: 'slides'
      },
      {
        href: 'https://medium.com/dscaefunai/c98ae719bedb',
        title: 'Story',
        svg: 'medium'
      },
      {
        href: 'https://youtu.be/uf12u9keG10',
        title: 'Recording',
        svg: 'youtube'
      }
    ],
    tags: [
      { svg: 'grass', title: 'Organized' },
      { svg: 'gdsc', title: 'GDSC' }
    ]
  },
  {
    title: 'Learning Opportunities',
    date: { month: 10, year: 2020 },
    description:
      'Speaker session by Emeka Odibeli, aimed at inspiring community members to keep learning.',
    image: { alt: 'Section of Event Flyer', name: 'learning-opportunities' },
    links: [
      {
        href: 'https://dsc.community.dev/e/mbzuvd/',
        title: 'Details',
        svg: 'open-in-new'
      },
      {
        href: 'https://medium.com/dscaefunai/3430cfff6b2f',
        title: 'Story',
        svg: 'medium'
      }
    ],
    tags: [
      { svg: 'grass', title: 'Organized' },
      { svg: 'gdsc', title: 'GDSC' }
    ]
  },
  {
    title: 'Firebase Series',
    date: { month: 9, year: 2020 },
    description:
      '6 weeks virtual workshops and codelabs where we taught Firebase.',
    image: { alt: 'Section of Event Flyer', name: 'firebase-series' },
    links: [
      {
        href: 'https://medium.com/dscaefunai/617772e53a8c',
        title: 'Story',
        svg: 'medium'
      }
    ],
    tags: [
      { svg: 'grass', title: 'Organized' },
      { svg: 'gdsc', title: 'GDSC' }
    ]
  },
  {
    title: 'Onboarding GDSC',
    date: { month: 9, year: 2020 },

    description:
      "GDSC AE-FUNAI's first info session. Starting GDSC in our school.",
    image: { alt: 'Section of Event Flyer', name: 'gdsc-info-session' },
    links: [
      {
        href: 'https://dsc.community.dev/e/mm72hn/',
        title: 'Details',
        svg: 'open-in-new'
      },
      {
        href: 'https://docs.google.com/presentation/d/1WvraEIbd4_8b97X2wKAIrzADyxDQSttlinBITdG_3pg/edit?usp=sharing',
        title: 'Slides',
        svg: 'slides'
      },
      {
        href: 'https://medium.com/dscaefunai/fd34bbf8520e',
        title: 'Story',
        svg: 'medium'
      }
    ],
    tags: [
      { svg: 'grass', title: 'Organized' },
      { svg: 'gdsc', title: 'GDSC' }
    ]
  }
];
