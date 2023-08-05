import { ObumCard } from '../card/card.model';

export const articles: ObumCard[] = [
  {
    title: 'How To Improve Flutter Forms',
    date: { month: 8, year: 2023 },
    description:
      'Tips on improving user experience on forms created in flutter.',
    image: { alt: '', name: 'improve-flutter-forms' },
    links: [
      {
        href: 'https://dev.to/obumnwabude/how-to-improve-flutter-forms-ni3',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'dev', title: 'dev.to' }]
  },
  {
    title: 'How to Prevent Account Loss When using Two-Factor Authentication',
    date: { month: 2, year: 2023 },
    description:
      "You want to lock out malicious access to your account. But you don't want out yourself.",
    image: { alt: '', name: '2fa-security' },
    links: [
      {
        href: 'https://www.freecodecamp.org/news/how-to-prevent-account-loss-when-using-two-factor-authentication/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'freecodecamp', title: 'freeCodeCamp' }]
  },
  {
    title: 'How to brand your Flutter app',
    date: { month: 2, year: 2023 },
    description:
      'Learn how to setup project name, app colors, fonts and themes in Flutter.',
    image: { alt: '', name: 'branding-flutter' },
    links: [
      {
        href: 'https://sweetcode.io/what-does-branding-a-flutter-app-entail/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'sweetcode' }]
  },
  {
    title: 'Firebase CORS Proxy Server',
    date: { month: 1, year: 2023 },
    description:
      'Learn how to bypass CORS issues making API calls through a CORS server that you setup for free yourself with Firebase.',
    image: { alt: '', name: 'firebase-cors-proxy' },
    links: [
      {
        href: 'https://stories.obumnwabude.com/how-to-create-a-cors-proxy-server-with-firebase-functions-f4be840026b5',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'medium', title: 'Stories' }]
  },
  {
    title: 'Guide to testing Angular apps',
    date: { month: 12, year: 2022 },
    description:
      'Learn the basics of testing Angular apps, including guide for unit testing, component testing, and end-to-end testing.',
    image: { alt: '', name: 'test-angular' },
    links: [
      {
        href: 'https://reflect.run/articles/guide-to-testing-angular-apps/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'reflect' }]
  },
  {
    title: 'How to Assist Language Inclusion in Tech',
    date: { month: 11, year: 2022 },
    description:
      'What we can do to minimize the language barrier faced by non-anglophone tech practitioners.',
    image: { alt: '', name: 'language-inclusion' },
    links: [
      {
        href: 'https://sweetcode.io/how-to-assist-language-inclusion-in-tech/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'sweetcode' }]
  },
  {
    title:
      'How to Restore Poison Messages (or Dead Letters) from Memphis broker vs RabbitMQ',
    date: { month: 9, year: 2022 },
    description:
      'Learn causes of poison messages in a message broker. Also learn how to restore them in both Memphis.dev and RabbitMQ.',
    image: { alt: '', name: 'restore-poison-messages' },
    links: [
      {
        href: 'https://dev.to/obumnwabude/how-to-restore-poison-messages-or-dead-letters-from-memphis-broker-vs-rabbitmq-4d54',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'dev', title: 'dev.to' }]
  },
  {
    title: 'Flutter For Front-End Web Developers',
    date: { month: 9, year: 2022 },
    description:
      'Concepts that transferred over from web to Flutter development and concepts that are new to a web developer starting Flutter.',
    image: { alt: '', name: 'flutter-clouds' },
    links: [
      {
        href: 'https://css-tricks.com/flutter-for-front-end-web-developers/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'csstricks', title: 'CSS-Tricks' }]
  },
  {
    title: 'How to build a real-time app with NestJS and Memphis broker',
    date: { month: 8, year: 2022 },
    description:
      'Learn how to setup and use Memphis, NestJS, and gRPC to come up with a simple chatting application',
    image: { alt: '', name: 'memphis-nestjs-real-time-chat-app' },
    links: [
      {
        href: 'https://dev.to/obumnwabude/how-to-build-a-real-time-app-with-nestjs-and-memphis-broker-27fm',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'dev', title: 'dev.to' }]
  },
  {
    title: 'How to Customize Flutter Packages to Suit Your Needs',
    date: { month: 7, year: 2022 },
    description:
      'Learn how to access the source code of a given package on pub.dev, understand how it works, and customize it.',
    image: { alt: '', name: 'customize-flutter-packages' },
    links: [
      {
        href: 'https://sweetcode.io/how-to-customize-flutter-packages-to-suit-your-needs/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'sweetcode' }]
  },
  {
    title: 'Why I Chose Angular to Build a URL Shortener',
    date: { month: 7, year: 2022 },
    description:
      "Reviews the available tools, decision choices, and factors that influenced choosing Angular for the project's frontend.",
    image: { alt: '', name: 'angular-url-shortener' },
    links: [
      {
        href: 'https://css-tricks.com/why-i-chose-angular-to-build-a-url-shortener/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'csstricks', title: 'CSS-Tricks' }]
  },
  {
    title: 'How to Use Stacked Architecture',
    date: { month: 7, year: 2022 },
    description:
      'Explains what Stacked architecture is and guides you through creating a simple Todo App in Flutter with Stacked.',
    image: { alt: 'Article Cover', name: 'fcc-flutter-stacked-todo' },
    links: [
      {
        href: 'https://www.freecodecamp.org/news/flutter-stacked-architecture-todo-app/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'freecodecamp', title: 'freeCodeCamp' }]
  },
  {
    title: 'Why You Should Use Flutter',
    date: { month: 7, year: 2022 },
    description:
      'Explains in detail the various benefits of using Flutter so you can decide whether to use it for your next project.',
    image: { alt: 'Article Cover', name: 'fcc-why-flutter' },
    links: [
      {
        href: 'https://www.freecodecamp.org/news/why-you-should-use-flutter/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'freecodecamp', title: 'freeCodeCamp' }]
  },
  {
    title: 'How to Build a URL Shortener for FREE with Firebase',
    date: { month: 6, year: 2022 },
    description:
      'Step-by-step guide on getting your personal URL Shortener for FREE.',
    image: { alt: '', name: 'firebase-url-shortener' },
    links: [
      {
        href: 'https://medium.com/firebase-developers/firebase-url-shortener-7754377478e0',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'firebase-blog', title: 'Firebase Blog' }]
  },
  {
    title: 'How to Implement Any UI in Flutter',
    date: { month: 6, year: 2022 },
    description:
      'A guide that will help you convert any user interface image, piece, or screen into Flutter code.',
    image: { alt: 'Article Cover', name: 'fcc-any-ui-flutter' },
    links: [
      {
        href: 'https://www.freecodecamp.org/news/how-to-implement-any-ui-in-flutter/',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'freecodecamp', title: 'freeCodeCamp' }]
  },
  {
    title: 'How to promote a tech community event',
    date: { month: 6, year: 2022 },
    description:
      'You need a way to get people to know that your event is coming up. You need to promote the event.',
    image: { alt: 'Picture of Community Members', name: 'blog' },
    links: [
      {
        href: 'https://blog.obumnwabude.com/how-to-promote-a-tech-community-event',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'hashnode', title: 'Blog' }]
  },
  {
    title: 'How to plan your community event',
    date: { month: 5, year: 2022 },
    description:
      "Don't just start hosting the event. Please, first plan it. Planning is like being in the event before it happens. ",
    image: { alt: 'Picture of Community Members', name: 'blog' },
    links: [
      {
        href: 'https://blog.obumnwabude.com/how-to-plan-your-community-event',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'hashnode', title: 'Blog' }]
  },
  {
    title: 'Grow a Tech Community',
    date: { month: 5, year: 2022 },
    description:
      "Grow a tech community because you want to mentor people (where you can). You will impact people's lives and become a leader.",
    image: { alt: 'Picture of Community Members', name: 'blog' },
    links: [
      {
        href: 'https://blog.obumnwabude.com/grow-a-tech-community',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'hashnode', title: 'Blog' }]
  },
  {
    title: '5 things you will gain from Tech Communities',
    date: { month: 5, year: 2022 },
    description:
      "Community works for many people and it will work for you too. We are talking of huge benefits you won't find in other places.",
    image: { alt: 'Picture of Community Members', name: 'blog' },
    links: [
      {
        href: 'https://blog.obumnwabude.com/5-things-you-will-gain-from-tech-communities',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'hashnode', title: 'Blog' }]
  },
  {
    title: '10 Ways to Contribute to Tech communities',
    date: { month: 5, year: 2022 },
    description:
      'Give back to the community. The active participation of community members is the fuel that fires the life of a given tech community.',
    image: { alt: 'Picture of Community Members', name: 'blog' },
    links: [
      {
        href: 'https://blog.obumnwabude.com/10-ways-to-contribute-to-tech-communities',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'hashnode', title: 'Blog' }]
  },
  {
    title: 'On Tech Community Events',
    date: { month: 5, year: 2022 },
    description:
      'Community events are moments of bonding and celebration. They are organised to keep the community alive.',
    image: { alt: 'Picture of Community Members', name: 'blog' },
    links: [
      {
        href: 'https://blog.obumnwabude.com/on-tech-community-events',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'hashnode', title: 'Blog' }]
  },
  {
    title: 'Understand Tech Communities',
    date: { month: 5, year: 2022 },
    description:
      'Tech communities are groups of people of who love digital stuff and usually have (or want to learn) some digital skill.',
    image: { alt: 'Picture of Community Members', name: 'blog' },
    links: [
      {
        href: 'https://blog.obumnwabude.com/understanding-tech-communities',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'hashnode', title: 'Blog' }]
  },
  {
    title: 'Understand Serverless Architecture',
    date: { month: 2, year: 2022 },
    description:
      "Serverless is a type of Microservices architecture that involves the browser doing the majority of the website's workload.",
    image: { alt: '', name: 'serverless-architecture' },
    links: [
      {
        href: 'https://keepdeploying.com/67bbbcd7ddd6',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'keepdeploying', title: 'Keep Deploying' }]
  },
  {
    title: 'How To Build Flutter Form for Managing Questions',
    date: { month: 2, year: 2022 },
    description:
      'Explains form creation with Flutter. Includes iteration, validation, and user feedback.',
    image: { alt: '', name: 'flutter-form' },
    links: [
      {
        href: 'https://dev.to/obumnwabude/how-to-build-a-flutter-form-for-managing-questions-and-their-answers-4h4l',
        title: 'Read',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'dev', title: 'dev.to' }]
  },
  {
    title: 'How I first perceived TEDx',
    date: { month: 12, year: 2020 },
    description:
      'In the spirit of ideas worth spreading, I remain ever hungry to attend TED/TEDx events whenever/wherever I can because ...',
    image: { alt: 'Obum attending TEDx Ikenegbu', name: 'tedx-perception' },
    links: [
      {
        href: 'https://stories.obumnwabude.com/2f0ec5830702',
        title: 'Continue',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'medium', title: 'Stories' }]
  },
  {
    title: 'Becoming a Developer',
    date: { month: 8, year: 2020 },
    description:
      'From secondary school, to scholarships, to building projects, to volunteering, to community programs, to organising events, ...',
    image: { alt: 'Congratulatory Email from GDSC', name: 'developer-story' },
    links: [
      {
        href: 'https://stories.obumnwabude.com/1d5d0a7462e',
        title: 'Continue',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'medium', title: 'Stories' }]
  },
  {
    title: 'Making GitHub-Invite',
    date: { month: 6, year: 2020 },
    description:
      'To me, it first sounded unreasonable. After all, ... However, two things changed my mind: ...',
    image: {
      alt: 'Screenshot of Successful Invitation in GitHub Invite',
      name: 'making-github-invite'
    },
    links: [
      {
        href: 'https://stories.obumnwabude.com/fb7e06641d54',
        title: 'Continue',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'medium', title: 'Stories' }]
  },
  {
    title: 'Taking Part in ECX #30DaysOfCode',
    date: { month: 4, year: 2020 },
    description:
      'During COVID, day after day, we submitted tasks given by mentors of our respective tracks. In the leaderboard ...',
    image: {
      alt: 'Day 4 flyer of ECX #30DaysOfCode',
      name: 'ecx-30daysofcode'
    },
    links: [
      {
        href: 'https://stories.obumnwabude.com/d8d011225e7f',
        title: 'Continue',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'medium', title: 'Stories' }]
  },
  {
    title: 'My #GADS Story',
    date: { month: 2, year: 2020 },
    description:
      'Being a beneficiary of the Google Africa Developer Scholarship, I had access to Pluralsight learning resources, I attended meetups in Enugu, and I ...',
    image: { alt: 'Picture of GADS Enugu Community', name: 'gads-story' },
    links: [
      {
        href: 'https://stories.obumnwabude.com/e64d29d93768',
        title: 'Continue',
        svg: 'open-in-new'
      }
    ],
    tags: [{ svg: 'medium', title: 'Stories' }]
  }
];
