import type { CodingProject } from '@/types';

const crosdatPikin: CodingProject = {
  title: 'crosdatPikin',
  description:
    'Clinical clerking system for neonatal and paediatric wards: structured patient records, safer prescribing, and AI decision support that keeps working when the internet is down.',
  longDescription:
    "crosdatPikin helps doctors and nurses in neonatal and paediatric care record each patient in a structured, guided way on tablets and phones. A clerking wizard walks clinicians from presenting complaint through history, examination, differentials, investigations and the management plan. Built-in engines handle weight-based drug doses, total parenteral nutrition (TPN) calculations with safety stops, WHO and Fenton growth charts, and 16 bedside calculators. AI suggestions run on Google's MedGemma by default and always need a clinician's sign-off. Pikin can be installed on a hospital's own network and stay useful through internet outages, or hosted in the cloud for several hospitals at once.",
  categories: ['AI & Cloud', 'Full-Stack Web'],
  role: 'CTO, crosdat',
  architecture: {
    frontend: ['React 19', 'Vite', 'TanStack Query & Router', 'Tailwind CSS'],
    backend: ['NestJS 11', 'Prisma', 'PostgreSQL (row-level security)', 'Redis'],
    blockchainOrAi: ['MedGemma (self-hosted)', 'Ollama, vLLM & Vertex AI adapters'],
    infrastructure: [
      'Docker',
      'S3-compatible storage + ClamAV',
      'Signed updates with rollback',
      'Licensing & telemetry via HQ Console',
    ],
  },
  highlights: [
    'Guided clerking from presenting complaint to management plan',
    'Dose, TPN and growth-chart engines with hard safety stops',
    "AI suggestions that always need a clinician's sign-off",
    "Runs on a hospital's own network, offline for days, or in the cloud for many hospitals",
  ],
  image: { alt: 'crosdatPikin growth charts screen', name: 'crosdat-pikin-growth-charts' },
  actions: [{ icon: 'externallink', link: 'https://crosdat.org/products/pikin', title: 'Learn More' }],
  tags: ['AI', 'Healthcare'],
  expandedTags: ['MedGemma', 'React', 'NestJS', 'PostgreSQL', 'Offline-First'],
};

const orctra: CodingProject = {
  title: 'Orctra',
  description:
    'Ladder-climb prediction market: traders stake, pick a market and climb short price rungs with set multipliers, while liquidity providers back the payouts. Live on EVM, Solana rolling out.',
  longDescription:
    'Orctra is an on-chain prediction market built as a ladder. Traders lock a stake token, pick a market, and climb short-term price rungs: each winning rung moves the claim up through set multipliers, and a losing rung ends the climb. Liquidity providers deposit into vaults that back the payouts, and every climb, rung, trade and vault movement is stored on-chain so the app can rebuild any screen from contract data. OrcTraders NFTs come with their own token-bound accounts and plug into the Orctra economy.',
  categories: ['Blockchain / Web3', 'Full-Stack Web'],
  status: 'Live on EVM',
  role: 'Lead Architect & Smart Contract Developer',
  architecture: {
    frontend: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'TradingView Charts'],
    backend: ['Firebase Auth & Firestore', 'Redis + BullMQ Workers', 'Google Cloud Build'],
    blockchainOrAi: ['Solidity (ERC-2535 Diamond)', 'ERC-6551 Token-Bound NFTs', 'Anchor & Rust (Solana)'],
    infrastructure: ['Trader, Beta & Admin Apps', 'Settlement & Leaderboard Workers'],
  },
  highlights: [
    'Ladder climbs with pinned multipliers, settled from on-chain price feeds',
    'Liquidity vaults that lock only the profit exposure of the current rung',
    'OrcTraders NFTs with ERC-6551 token-bound accounts inside an upgradeable diamond',
    'Background workers that settle stuck rungs, apply inactivity rules and rank traders',
  ],
  image: { alt: 'Flyer Image', name: 'orctra' },
  actions: [
    { icon: 'zap', link: 'https://orctra.com', title: 'Trade Now' },
    { icon: 'externallink', link: 'https://x.com/orctra', title: 'kllow Us' },
  ],
  tags: ['Solidity', 'Solana'],
  expandedTags: ['Prediction Market', 'ERC-2535 Diamond', 'ERC-6551', 'Anchor', 'React', 'Pyth'],
};

const chainbills: CodingProject = {
  title: 'Chainbills',
  description:
    'Cross-chain payment links: create a payable, share one link, and get paid in crypto from EVM chains or Solana, settled through Circle CCTP and Wormhole.',
  longDescription:
    'Chainbills lets anyone create a payable (a public invoice), share one link, and receive crypto from payers on any supported chain. Payments move across EVM chains and Solana through Circle CCTP and Wormhole, with no custodian in between. Contracts on every chain keep matching records of payables, payments and withdrawals, and Chainbills takes a 2% fee (with a fixed cap) on withdrawals.',
  categories: ['Blockchain / Web3', 'Full-Stack Web'],
  status: 'Open Source & Production Ready',
  role: 'Creator & Full-Stack Web3 Engineer',
  architecture: {
    frontend: ['Vue 3', 'TypeScript', 'PrimeVue', 'Tailwind CSS', 'wagmi & viem'],
    backend: ['NestJS', 'Prisma', 'PostgreSQL'],
    blockchainOrAi: ['Circle CCTP', 'Wormhole', 'Solidity (EVM)', 'Anchor & Rust (Solana)', 'CosmWasm'],
    infrastructure: ['Contract Indexer', 'Cross-Chain Relayer', 'Email Notifications'],
  },
  highlights: [
    'One shareable link that accepts payments from any supported chain',
    'Cross-chain settlement through Circle CCTP and Wormhole',
    'Matching payable, payment and withdrawal records across EVM, Solana and CosmWasm contracts',
    'Backend that indexes contracts, relays messages and emails hosts',
  ],
  image: { alt: 'Display of Chainbills', name: 'chainbills', png: true },
  actions: [
    { icon: 'zap', link: 'https://chainbills.xyz', title: 'Get Started' },
    { icon: 'github', link: 'https://github.com/chainbills/chainbills', title: 'Source Code' },
  ],
  tags: ['Solidity', 'Solana'],
  expandedTags: ['Cross-Chain', 'Circle CCTP', 'Wormhole', 'Anchor', 'CosmWasm', 'NestJS', 'Vue 3'],
};

const dado: CodingProject = {
  title: 'Dado Food',
  description:
    'Food delivery for local vendors: Flutter apps for customers, riders and vendors, with live order updates and rider maps.',
  longDescription:
    "Dado Food connects customers with local food vendors and delivery riders. I led the Flutter work on its three mobile apps: a customer app for browsing vendors and ordering, a rider app for campus partners and independent riders to accept and deliver orders with maps and routes, and a vendor app for managing orders and menus. The apps talk to Dado's REST API and use push notifications for live order updates.",
  categories: ['Mobile & Flutter'],
  status: 'Production Ecosystem',
  role: 'Lead Mobile Engineer',
  architecture: {
    frontend: ['Flutter (Dart)', 'Bloc', 'Google Maps'],
    backend: ['REST API (Dio)'],
    infrastructure: ['Firebase Cloud Messaging', 'Firebase Crashlytics', 'Mixpanel', 'Intercom'],
  },
  highlights: [
    'Three Flutter apps (customer, rider, vendor) on Android and iOS',
    'Rider maps with route lines and location tracking',
    'Push notifications for live order updates',
    'Dev and prod app flavors for safe testing',
  ],
  image: { alt: 'Dado', name: 'dado', png: true },
  actions: [{ icon: 'rocket', link: 'https://dado.ng', title: 'All Apps' }],
  tags: ['Flutter', 'Firebase'],
  expandedTags: ['Dart', 'Bloc', 'Google Maps', 'Push Notifications', 'Food Delivery'],
};

const androidBubbles: CodingProject = {
  title: 'Android Bubbles in Flutter',
  description:
    'Open-source Flutter plugin (conversation_bubbles) that shows Android 11+ conversation bubbles, the floating chat heads, from your Flutter app. Comes with an example app.',
  longDescription:
    "Android Bubbles in Flutter (conversation_bubbles) is an open-source Flutter plugin that bridges Flutter apps to Android's native Conversation Bubbles system API (introduced in Android 11+). The plugin enables messaging and communication apps to pop out floating, multi-tasking chat heads over other applications, handling Android NotificationManager lifecycles, BubbleMetadata, shortcuts, and platform channel data transfer seamlessly.",
  categories: ['Mobile & Flutter'],
  status: 'Open Source on GitHub',
  role: 'Author & Maintainer',
  architecture: {
    frontend: ['Flutter (Dart)', 'Platform Channels'],
    backend: ['Android SDK', 'Kotlin / Java Native Interop'],
    infrastructure: ['Android NotificationManager', 'BubbleMetadata API'],
  },
  highlights: [
    'Bridges Android API 30+ native conversation bubble overlay system directly into Dart',
    'Supports dynamic shortcut management and notification intent routing',
    'Clean Dart API designed for straightforward integration into chat and social apps',
    'Comprehensive documentation and example application showcasing background state management',
  ],
  image: { alt: 'Android Bubbles in Flutter', name: 'android-bubbles-flutter' },
  actions: [{ icon: 'github', link: 'https://github.com/keepdeploying/conversation_bubbles', title: 'Package Source' }],
  tags: ['Flutter', 'Android'],
  expandedTags: ['Dart', 'Android SDK', 'Kotlin', 'Platform Channels', 'Notifications'],
};

const confide: CodingProject = {
  title: 'Confide',
  description:
    'Community app where people share thoughts, ask for advice and support each other. Built with Flutter and live on Google Play and the App Store.',
  longDescription:
    'Confide Community is a mobile social app built for peace and trust while interacting with a global community. I built the Flutter app for iOS and Android from the Figma design, using simple setState for screens and streams with singleton services for app-wide state, and connected it to the Confide REST API.',
  categories: ['Mobile & Flutter'],
  status: 'Available on App Stores',
  role: 'Mobile Application Developer',
  architecture: {
    frontend: ['Flutter (Dart)', 'Streams & Services (rxdart)', 'GoRouter'],
    backend: ['REST API (Dio)', 'Hive Local Storage'],
    infrastructure: ['Firebase Analytics & Crashlytics', 'Apple App Store', 'Google Play Store'],
  },
  highlights: [
    'Shipped to both the App Store and Google Play from one Flutter codebase',
    'App-wide state with streams and services instead of a heavy state library',
    'Sensitive data kept in secure on-device storage',
    'Crash reporting and analytics with Firebase',
  ],
  image: { alt: 'Confide Logo', name: 'confide', png: true },
  ctasEqualWeights: true,
  actions: [
    {
      icon: 'googleplay',
      link: 'https://play.google.com/store/apps/details?id=com.confidecommunity.app',
      title: 'Google Play',
    },
    {
      icon: 'apple',
      link: 'https://apps.apple.com/us/app/confide-join-our-community/id6503924952',
      title: 'App Store',
    },
  ],
  tags: ['Flutter', 'Community'],
  expandedTags: ['Dart', 'iOS & Android', 'rxdart', 'GoRouter', 'Social App'],
};

export const featuredProjects: CodingProject[] = [crosdatPikin, chainbills, confide];

export const projects: CodingProject[] = [
  crosdatPikin,
  {
    title: 'crosdatLMS',
    description:
      'Learning platform shared by many institutions: past questions, practice quizzes, assignments, grades, discussions and an AI assistant, with each school keeping its own structure.',
    longDescription:
      'crosdatLMS gives students, tutors and administrators from one or many institutions a single app, while each institution keeps its own faculties, departments, courses, users and policies. Students study past questions, take auto-scored practice quizzes, submit assignments and see their grades; tutors grade with rubrics and post announcements; admins manage the academic structure and question banks. AI features, including extracting past exam papers into question banks and a study assistant, sit behind institution-level controls and work with Gemini or any OpenAI-compatible provider. It is built to support classroom teaching, not replace it.',
    categories: ['AI & Cloud', 'Full-Stack Web'],
    status: 'Live',
    role: 'CTO, crosdat',
    architecture: {
      frontend: ['React 19', 'Vite', 'TanStack Query & Router', 'Tailwind CSS'],
      backend: ['NestJS', 'Prisma', 'PostgreSQL', 'BullMQ + Redis'],
      blockchainOrAi: ['Gemini (or any OpenAI-compatible provider)', 'AI past-exam extraction'],
      infrastructure: ['S3-compatible storage + ClamAV', 'Email, SMS & WhatsApp notifications', 'Google Cloud Logging'],
    },
    highlights: [
      'One account across every institution a student or tutor belongs to',
      'Question banks, past exams and auto-scored practice',
      'Assignments with rubrics and grade finalization',
      'Fine-grained roles and permissions with a full audit trail',
    ],
    image: { alt: 'crosdatLMS landing page', name: 'crosdat-lms' },
    actions: [{ icon: 'zap', link: 'https://lms.crosdat.org', title: 'Open the LMS' }],
    tags: ['React', 'NestJS'],
    expandedTags: ['TypeScript', 'PostgreSQL', 'Gemini', 'Multi-Tenant', 'EdTech'],
  },
  {
    title: 'crosdat.org',
    description:
      'Public website of the crosdat Center for Multidisciplinary Research at AE-FUNAI, rebuilt from WordPress as a fast, pre-rendered React site with its own content editor.',
    longDescription:
      'The website of the crosdat Center for Multidisciplinary Research, a research centre at Alex Ekwueme Federal University, Ndufu-Alike (AE-FUNAI) that designs studies, collects and analyses data, supports publication and trains researchers. It replaced the old WordPress site with a React site where every page is pre-rendered as static HTML, matches the LMS design, lets the team edit content through a CMS, and sends enquiries through a Cloudflare Worker.',
    categories: ['AI & Cloud', 'Full-Stack Web'],
    status: 'Live',
    role: 'CTO, crosdat',
    architecture: {
      frontend: ['React 19', 'React Router 7 (pre-rendered)', 'Tailwind CSS 4'],
      backend: ['Cloudflare Worker (enquiries)', 'Sveltia CMS'],
      infrastructure: ['Static hosting', 'Cloudflare Pages previews'],
    },
    highlights: [
      'Every page pre-rendered as static HTML for speed and SEO',
      'Content edited through a CMS, validated at build time',
      'Same enquiry checks in the browser and the Worker',
    ],
    image: { alt: 'crosdat.org home page', name: 'crosdat-org' },
    actions: [{ icon: 'externallink', link: 'https://crosdat.org', title: 'Visit' }],
    tags: ['React', 'Tailwind CSS'],
    expandedTags: ['TypeScript', 'React Router', 'Sveltia CMS', 'Cloudflare Workers'],
  },
  {
    title: 'Keep Deploying',
    description:
      'Website for Keep Deploying, my software agency and mentorship movement, rebuilt in React with animated illustrations, light and dark themes, and pre-rendered pages for search.',
    longDescription:
      'Keep Deploying is my software agency and mentorship movement: we build web and app products for clients, offer consultancy and IT support, and mentor young developers to ship and showcase their work. I rebuilt its website from scratch in React with Chakra UI, with pages for services, how we work, mentorship and contact, animated SVG illustrations, and light and dark themes. Every route is pre-rendered to static HTML with structured data, so pages load fast and can be found in search.',
    categories: ['Full-Stack Web', 'AI & Cloud'],
    status: 'Live',
    role: 'Founder & Lead Engineer',
    architecture: {
      frontend: ['React 19', 'Vite', 'TypeScript', 'Chakra UI 3', 'Framer Motion'],
      infrastructure: ['Pre-rendered HTML & structured data', 'GA4 lead tracking', 'Firebase Hosting'],
    },
    highlights: [
      'Animated SVG illustrations: idea-to-deploy pipeline, orbits and a mentorship path',
      'Every page pre-rendered with structured data for search',
      'GA4 events on every lead and contact action',
      'Light, dark and system themes',
    ],
    image: { alt: 'Keep Deploying home page', name: 'keepdeploying' },
    actions: [{ icon: 'externallink', link: 'https://keepdeploying.com', title: 'Visit' }],
    tags: ['React', 'Chakra UI'],
    expandedTags: ['TypeScript', 'Framer Motion', 'SEO', 'Firebase Hosting'],
  },
  orctra,
  chainbills,
  dado,
  androidBubbles,
  confide,
  {
    title: 'DevFest Abakaliki 2024',
    description:
      'Registration site for DevFest Abakaliki 2024: free and paid tickets through Paystack, plus an admin app for offline payments. Built with React and Firebase.',
    longDescription:
      "The custom website for GDG Abakaliki's DevFest 2024. Attendees registered and paid for tickets through Paystack (a free Premium ticket and a paid Luxury ticket with swag), and an admin app let organizers add people who paid in cash or by bank transfer and see every registered attendee. The event has passed and the domain is no longer active; the code is open source.",
    categories: ['Full-Stack Web', 'AI & Cloud'],
    status: 'Event Completed',
    role: 'Lead Frontend & Web Developer',
    architecture: {
      frontend: ['React', 'TypeScript', 'Vite', 'PrimeReact'],
      backend: ['Cloud Functions', 'Cloud Firestore'],
      infrastructure: ['Firebase Hosting', 'Firebase App Check', 'Paystack'],
    },
    highlights: [
      'Ticket registration with Paystack payments',
      'Admin app for offline payments and the attendee list',
      'Firebase App Check so only the official sites can reach the backend',
    ],
    image: { alt: 'DevFest Abakaliki 2024 Flyer', name: 'dfai24' },
    actions: [{ icon: 'github', link: 'https://github.com/obumnwabude/devfestabakaliki2024', title: 'Source Code' }],
    tags: ['React', 'Firebase'],
    expandedTags: ['TypeScript', 'Vite', 'PrimeReact', 'Paystack', 'Cloud Functions'],
  },
  {
    title: 'WalletSMSLockr',
    description:
      'Privacy app for Android that encrypts SMS before they leave your phone and locks files and notes in a vault tied to your device.',
    longDescription:
      "WalletSMSLockr is a privacy app built on the Lokdon encryption SDK. Set as the default SMS app on Android, it encrypts every SMS before sending, so other apps only see cipher text, and shows you the readable version. Its data vault encrypts files and text using your device's identifiers, and secure crypto and fiat wallets were planned as the next features.",
    categories: ['Mobile & Flutter'],
    status: 'No Longer on Google Play',
    role: 'Mobile Security Engineer',
    architecture: {
      frontend: ['Flutter (Dart)', 'Android Telephony'],
      backend: ['Lokdon Encryption SDK', 'Hive Local Storage'],
    },
    highlights: [
      'Encrypts SMS before they go over the carrier network',
      'Data vault for encrypting and sharing files and notes',
      "Works as Android's default SMS app",
    ],
    image: { alt: 'WalletSMSLockr Logo', name: 'walletsmslockr', png: true },
    actions: [],
    tags: ['Flutter', 'Security'],
    expandedTags: ['Dart', 'Android', 'Encryption', 'SMS', 'Lokdon SDK'],
  },
  {
    title: 'obumnwabude',
    description:
      'The portfolio site you are reading right now. A pre-rendered Vue 3 site with a custom Liquid Glass design: 3D tilt cards, glass drawers and bento expansions, with Google Analytics 4 on key interactions.',
    longDescription:
      'Personal portfolio and technical showcase engineered with Vue 3, TypeScript, and a modern Liquid Glass 2.0 design system. Features static site generation (SSG) pre-rendering, search engine optimization (SEO) schema structured data, interactive glass tilt surfaces, and comprehensive GA4 telemetry.',
    categories: ['Full-Stack Web'],
    status: 'Live & Continuously Deployed',
    role: 'Creator & Software Architect',
    architecture: {
      frontend: ['Vue 3', 'TypeScript', 'Vite', 'Modern Glassmorphic CSS'],
      infrastructure: ['Firebase Hosting', 'Static Pre-rendering (SSG)', 'Google Analytics 4'],
    },
    highlights: [
      'Liquid Glass theme with 3D mouse tilt, specular sheen and ambient lighting',
      'Pre-rendered pages with Open Graph and Twitter meta tags',
      'Google Analytics 4 events on key interactions',
    ],
    image: { alt: 'Obum Speaking', name: 'obum-speaking' },
    actions: [{ icon: 'github', link: 'https://github.com/obumnwabude/obumnwabude', title: 'Source Code on GitHub' }],
    tags: ['Vue 3', 'Firebase'],
    expandedTags: ['TypeScript', 'Vite', 'PrimeVue', 'Pre-rendering', 'Firebase Hosting'],
  },
  {
    title: 'CTLearn',
    description:
      "Learning app for Coders Triangle's CT Learn students, built with Flutter from the Figma design: class timetable, course materials and file downloads. On Google Play.",
    longDescription:
      "CTLearn is the mobile app for CT Learn, Coders Triangle's learning platform. I built it in Flutter from the team's Figma design, using the Stacked architecture, with a class timetable, course materials, and file uploads and downloads.",
    categories: ['Mobile & Flutter'],
    status: 'Store Release',
    role: 'Mobile Developer',
    architecture: {
      frontend: ['Flutter (Dart)', 'Stacked', 'Table Calendar'],
      backend: ['REST API', 'Hive Local Storage'],
    },
    highlights: [
      'Class timetable with a calendar view',
      'Course materials with file uploads and downloads',
      'Built to match the Figma design',
    ],
    image: { alt: 'CTLearn Logo', name: 'ctlearn', png: true },
    actions: [
      {
        icon: 'googleplay',
        link: 'https://play.google.com/store/apps/details?id=net.ctlearn.app',
        title: 'Download on Google Play',
      },
    ],
    tags: ['Flutter', 'Education'],
    expandedTags: ['Dart', 'Stacked', 'Education', 'Mobile'],
  },
  {
    title: 'Todo',
    description:
      'Minimalist single-screen Flutter todo app in dark mode, written as the canonical reference for the FilledStacks Stacked architecture (MVVM with reactive ViewModels and get_it services). Companion codebase to the freeCodeCamp Stacked tutorial.',
    longDescription:
      'A minimalist Flutter todo list application demonstrating the Stacked architecture pattern for scalable state management. Built to teach Stacked best practices, the app features a clean dark-mode interface and reactive task tracking.',
    categories: ['Mobile & Flutter'],
    status: 'Teaching Resource',
    role: 'Author & Developer',
    architecture: { frontend: ['Flutter (Dart)', 'Stacked State Management'] },
    highlights: [
      'Clean single-screen interface in dark mode',
      'Shows the Stacked pattern: views, ViewModels and services',
      'Tasks saved on the device with Hive',
    ],
    image: { alt: 'Screenshots of the Todo App', name: 'stacked-todo' },
    actions: [
      { icon: 'github', link: 'https://github.com/obumnwabude/Flutter_stacked_todo', title: 'Source Code on GitHub' },
    ],
    tags: ['Flutter', 'State Management'],
    expandedTags: ['Dart', 'Stacked', 'Hive', 'State Management'],
  },
  {
    title: 'LinkedIn Class',
    description:
      'Sign-in page for my free WhatsApp class on growing on LinkedIn: members logged in with LinkedIn to keep their record and connect with classmates.',
    longDescription:
      'The companion site for my free LinkedIn class on WhatsApp. Participants signed in with their LinkedIn accounts to record that they took the class, then came back to connect with every other member who had signed in.',
    categories: ['Full-Stack Web'],
    status: 'Event Completed',
    role: 'Full-Stack Developer',
    architecture: { frontend: ['Angular', 'TypeScript'], backend: ['Firebase', 'Cloud Functions'] },
    highlights: [
      'Sign in with LinkedIn',
      'A shared list of classmates to connect with',
      'Built with Angular and Firebase',
    ],
    image: { alt: 'LinkedIn Class Flyer', name: 'linkedin-class-ad' },
    actions: [
      { icon: 'externallink', link: 'https://linkedinclass.obumnwabude.com', title: 'Visit' },
      { icon: 'github', link: 'https://github.com/obumnwabude/linkedin-class', title: 'Source Code' },
    ],
    tags: ['Angular', 'Firebase'],
    expandedTags: ['TypeScript', 'Firebase', 'LinkedIn Sign-In', 'Cloud Functions'],
  },
  {
    title: 'Calculator',
    description:
      'Simple calculator app built with Flutter to practice the Stacked architecture. Runs on Android, iOS, web and Windows.',
    longDescription:
      'A Flutter calculator built to practice the Stacked architecture, with get_it and injectable for dependency injection. The same code builds for Android, iOS, web and Windows.',
    categories: ['Mobile & Flutter'],
    status: 'Open Source on GitHub',
    role: 'Mobile Developer',
    architecture: { frontend: ['Flutter (Dart)', 'Stacked Architecture'] },
    highlights: ['Stacked architecture with get_it and injectable', 'One codebase for Android, iOS, web and Windows'],
    image: { alt: 'Screens of Calculator', name: 'calculator' },
    actions: [{ icon: 'github', link: 'https://github.com/keepdeploying/calculator', title: 'Source Code' }],
    tags: ['Flutter', 'Mobile'],
    expandedTags: ['Dart', 'Stacked', 'Dependency Injection'],
  },
  {
    title: 'obum.me',
    description:
      'My URL shortener for links to my articles, profiles and videos. Built on Firebase (Firestore, Cloud Functions, Hosting), so it costs almost nothing to run.',
    longDescription:
      'A URL shortener built entirely on Firebase. Short links on obum.me redirect to their long links through Cloud Functions, unknown links show a custom 404 page, and the admin site at admin.obum.me lists every link publicly while only my account can edit them.',
    categories: ['Full-Stack Web', 'AI & Cloud'],
    status: 'Live',
    role: 'Full-Stack Developer',
    architecture: {
      frontend: ['Angular', 'TypeScript'],
      backend: ['Firebase Cloud Functions', 'Cloud Firestore'],
      infrastructure: ['Firebase Hosting'],
    },
    highlights: [
      'Redirects handled by Cloud Functions, with a custom 404 page',
      'Public admin list at admin.obum.me, editable only by me',
      'Runs entirely on Firebase',
    ],
    image: { alt: 'Screenshot of the 404 page', name: 'obum.me-404' },
    actions: [
      { icon: 'externallink', link: 'https://admin.obum.me', title: 'All Links' },
      { icon: 'github', link: 'https://github.com/obumnwabude/obum.me', title: 'Source Code on GitHub' },
    ],
    tags: ['Firebase', 'Angular'],
    expandedTags: ['Angular', 'Cloud Functions', 'Firestore', 'Firebase Auth', 'Serverless'],
  },
  {
    title: 'Tutorial Management System',
    description:
      'Responsive scheduling dashboard that pairs students with tutors for one-to-one sessions, using a shared scheduler form that opens as a bottom sheet on mobile and a side panel on wide screens. Real-time state stays in sync via Firestore across both roles.',
    longDescription:
      'A responsive two-way platform for coordinating tutorial sessions between educators and learners. Built with Angular and Firebase, the system features responsive scheduling forms, real-time session updates, and role-based access for both tutors and students.',
    categories: ['Full-Stack Web'],
    status: 'Live',
    role: 'Full-Stack Developer',
    architecture: {
      frontend: ['Angular', 'TypeScript', 'Material Design'],
      backend: ['Firebase Firestore', 'Cloud Functions'],
    },
    highlights: [
      'Responsive session scheduling with adaptive UI (bottom sheets on mobile, sidebar on desktop)',
      'Real-time session synchronization between tutors and students',
      'Secure role-based access control and session management',
    ],
    image: { alt: 'Screenshot of TMS', name: 'tms' },
    actions: [
      { icon: 'zap', link: 'https://tutorialmgt.web.app', title: 'Get Started' },
      { icon: 'github', link: 'https://github.com/obumnwabude/tutorialmgt', title: 'Source Code' },
    ],
    tags: ['Angular', 'Firebase'],
    expandedTags: ['Angular', 'Firebase', 'TypeScript', 'Material Design', 'Firestore'],
  },
  {
    title: 'Genesys Community',
    description:
      'Custom reporting form where members of the Genesys Campus Club at AE-FUNAI log their weekly progress, share what they shipped, and surface small wins to the rest of the community. Built with Angular and Firebase and used through multiple cohorts.',
    longDescription:
      'A community engagement platform for the Genesys Campus Club at AE-FUNAI. The application provides a structured form for members to share progress reports, document achievements, and celebrate milestones within the organization.',
    categories: ['Full-Stack Web'],
    status: 'Live',
    role: 'Developer',
    architecture: { frontend: ['Angular', 'TypeScript'], backend: ['Firebase Firestore', 'Cloud Functions'] },
    highlights: [
      'Custom progress and achievement reporting forms for club members',
      'Real-time data synchronization across the community',
      'Welcoming interface for campus organization engagement',
    ],
    image: { alt: 'Community Picture', name: 'genesys-community' },
    actions: [
      { icon: 'externallink', link: 'https://genesysaefunai.web.app', title: 'Join Us' },
      { icon: 'github', link: 'https://github.com/obumnwabude/genesys-community', title: 'Source Code' },
    ],
    tags: ['Angular', 'Firebase'],
    expandedTags: ['Angular', 'Firebase', 'TypeScript', 'Community', 'Firestore'],
  },
  {
    title: 'Battery Info',
    description:
      'One-screen Android app that surfaces live battery diagnostics (level, health, temperature, charging state), respects the system dark and light theme, and stays completely offline. Built with Flutter on top of the battery_info pub.dev plugin.',
    longDescription:
      'A lightweight Flutter application that displays real-time battery information on Android devices. The app respects system theme preferences and provides a single-screen interface showing battery level, health, temperature, and charging status.',
    categories: ['Mobile & Flutter'],
    status: 'Open Source on GitHub',
    role: 'Developer',
    architecture: { frontend: ['Flutter (Dart)', 'System Theme Integration'] },
    highlights: [
      'Real-time battery status display using Flutter battery_info plugin',
      'System theme awareness for seamless dark and light mode support',
      'Simple, focused single-screen user experience',
    ],
    image: { alt: 'Screens of Battery Info', name: 'battery-info' },
    actions: [{ icon: 'github', link: 'https://github.com/obumnwabude/battery_info', title: 'Source Code on GitHub' }],
    tags: ['Flutter', 'Android'],
    expandedTags: ['Flutter', 'Dart', 'Android', 'System Integration'],
  },
  {
    title: 'Mmèmmè',
    description:
      'Public calendar of halls and auditoriums in an institution: anyone can see approved event schedules and request a slot. Built with Flutter and Firebase; preview is live.',
    longDescription:
      "Mmèmmè solves a common problem in schools and institutions: booking a hall or auditorium usually means writing a letter and hoping there's no clash. It shows a public calendar of every requested and approved schedule across all halls an authority manages, and lets anyone request (and pay for) a slot.",
    categories: ['Mobile & Flutter', 'Full-Stack Web'],
    status: 'In Development',
    role: 'Developer',
    architecture: {
      frontend: ['Flutter (Dart)', 'Riverpod', 'Syncfusion Calendar'],
      backend: ['Firebase Auth (Google Sign-In)', 'Cloud Firestore'],
    },
    highlights: [
      'Public calendar of all hall schedules in one place',
      'Anyone can request a slot for an event',
      'Google sign-in with Firebase Auth',
    ],
    image: { alt: 'Mmèmmè Logo', name: 'mmemme' },
    actions: [{ icon: 'externallink', link: 'https://mmemme1.web.app', title: 'Visit Preview' }],
    tags: ['Flutter', 'Firebase'],
    expandedTags: ['Dart', 'Riverpod', 'Calendar', 'Firestore'],
  },
  {
    title: 'Christmas Cantata Quiz',
    description:
      "Quiz website for the Christmas Cantata of St. Cecilia's Choir, NFCS AE-FUNAI, with the event details and an online quiz. Built with Angular and Firebase.",
    longDescription:
      "The website for the Christmas Cantata of St. Cecilia's Choir, NFCS AE-FUNAI. It shared what the cantata was about and where it held, and ran an online quiz for participants.",
    categories: ['Full-Stack Web'],
    status: 'Event Completed',
    role: 'Developer',
    architecture: { frontend: ['Angular', 'TypeScript', 'Tailwind CSS', 'Nx'], backend: ['Firebase'] },
    highlights: ['Event page for the Christmas Cantata', 'Online quiz for participants', 'Light and dark themes'],
    image: { alt: 'Christmas Cantata Flyer', name: 'cantata' },
    actions: [
      { icon: 'externallink', link: 'https://choircarolquiz.web.app', title: 'Visit' },
      { icon: 'github', link: 'https://github.com/obumnwabude/choircarolquiz', title: 'Source Code on GitHub' },
    ],
    tags: ['Angular', 'Firebase'],
    expandedTags: ['TypeScript', 'Tailwind CSS', 'Nx', 'Quiz'],
  },
  {
    title: 'My Notes',
    description:
      'Notes web app built live in DSC AE-FUNAI\'s "Build MyNotes App with Firestore" workshop in October 2020. Still up as a teaching sample.',
    longDescription:
      'A simple notes app used in DSC AE-FUNAI\'s "Build MyNotes App with Firestore" hands-on workshop. It uses plain HTML, CSS and JavaScript with Cloud Firestore to create, update, delete and query notes.',
    categories: ['Full-Stack Web'],
    status: 'Teaching Resource',
    role: 'Instructor & Developer',
    architecture: { frontend: ['HTML', 'CSS', 'JavaScript'], backend: ['Cloud Firestore'] },
    highlights: [
      'Create, update, delete and query notes with Firestore',
      'Built live during a DSC workshop',
      'Firestore security rules included',
    ],
    image: { alt: 'Screens of using MyNotes', name: 'mynotes' },
    actions: [
      { icon: 'externallink', link: 'https://mynotesobum.web.app', title: 'Sample' },
      { icon: 'github', link: 'https://github.com/gdscaefunai/mynotes', title: 'Source Code' },
    ],
    tags: ['Firebase', 'JavaScript'],
    expandedTags: ['Firestore', 'JavaScript', 'Workshop'],
  },
  {
    title: 'GitHub Invite',
    description:
      'Invite people to your GitHub organization by username, without pasting invites by hand. Comes as a Node server, a static page and an npm package.',
    longDescription:
      "GitHub Invite sends invitations to join a GitHub organization through the GitHub API, using an admin's access token. It started as a request from a friend and grew into four versions: a Node monolith server, a static frontend, a Firebase version, and an npm package.",
    categories: ['Full-Stack Web', 'AI & Cloud'],
    status: 'Open Source on GitHub',
    role: 'Developer',
    architecture: {
      frontend: ['Static HTML & JavaScript'],
      backend: ['Node.js', 'GitHub API', 'Firebase'],
      infrastructure: ['npm Package', 'GitHub Pages'],
    },
    highlights: [
      'Invites users to a GitHub organization by username',
      'Four versions: Node server, static page, Firebase and npm package',
      'My first published npm package',
    ],
    image: { alt: 'Screenshot of GitHub Invite', name: 'github-invite' },
    actions: [
      { icon: 'externallink', link: 'https://githubinvite.web.app', title: 'Sample' },
      { icon: 'github', link: 'https://github.com/obumnwabude/github-invite', title: 'Source Code' },
    ],
    tags: ['Node.js', 'GitHub API'],
    expandedTags: ['JavaScript', 'npm', 'Firebase', 'Automation'],
  },
  {
    title: 'ECX #30DaysOfCode',
    description:
      'Personal submissions from the ECX #30DaysOfCode backend track in 2020, working through daily Node.js and JavaScript challenges from HTTP fundamentals up through API design and lightweight databases. Public archive of the full 30-day journey.',
    longDescription:
      'A collection of backend development challenges completed during the ECX #30DaysOfCode program in 2020. The submissions showcase Node.js solutions for progressive backend engineering tasks, from fundamentals to API design.',
    categories: ['Full-Stack Web'],
    status: 'Learning Archive',
    role: 'Participant',
    architecture: { backend: ['Node.js', 'JavaScript'] },
    highlights: [
      'Daily backend challenges covering HTTP, APIs, and databases',
      'Node.js and JavaScript fundamentals reinforcement',
      'Public archive of progression through structured program',
    ],
    image: { alt: '', name: 'backend' },
    actions: [
      { icon: 'github', link: 'https://github.com/obumnwabude/ecx-backend-30daysofcode', title: 'Submissions' },
    ],
    tags: ['Node.js', 'Backend'],
    expandedTags: ['Node.js', 'JavaScript', 'Backend', 'Challenge'],
  },
  {
    title: 'Wolverstore',
    description: 'E-commerce backend in Node.js, Express and MongoDB with JWT login, built during ECX #30DaysOfCode.',
    longDescription:
      'The backend for Wolverstore, an online store, built for days 27 to 29 of ECX #30DaysOfCode. It covers products, users and orders with Express and MongoDB, and secures accounts with hashed passwords and JWT login.',
    categories: ['Full-Stack Web'],
    status: 'Reference Implementation',
    role: 'Backend Developer',
    architecture: { backend: ['Node.js', 'Express.js', 'MongoDB (Mongoose)', 'JWT Auth'] },
    highlights: [
      'REST API for products, users and orders',
      'Hashed passwords and JWT login',
      'Built for ECX #30DaysOfCode',
    ],
    image: { alt: '', name: 'backend' },
    actions: [{ icon: 'github', link: 'https://github.com/obumnwabude/wolverstore', title: 'Source Code' }],
    tags: ['Node.js', 'Backend'],
    expandedTags: ['Express.js', 'MongoDB', 'JWT', 'E-Commerce'],
  },
];
