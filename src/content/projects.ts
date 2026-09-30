import type { CodingProject } from '@/types';

const chainbills: CodingProject = {
  title: 'Chainbills',
  description:
    'Cross-chain, non-custodial payable-link gateway that settles payments across EVM chains and Solana using Circle CCTP and Wormhole. Receive any crypto on any chain from anyone.',
  longDescription:
    'Chainbills is an interoperable cross-chain crypto payment gateway where users create a payable, share one link, and accept crypto from any supported chain. Payments settle on-chain through Circle CCTP and Wormhole across EVM and Solana, with no custodian in between. Built with Anchor/Rust PDAs on Solana and Solidity smart contracts on EVM, Chainbills features non-custodial merchant payment processing, multi-chain relayers, and real-time settlement tracking.',
  category: 'Web3 / Blockchain',
  status: 'Open Source & Production Ready',
  role: 'Creator & Full-Stack Web3 Engineer',
  architecture: {
    frontend: ['Vue / React', 'TypeScript', 'Tailwind CSS'],
    backend: ['Node.js', 'Firebase Cloud Functions'],
    blockchainOrAi: ['Circle CCTP', 'Wormhole', 'Solidity (EVM)', 'Anchor & Rust (Solana)'],
    infrastructure: ['Multi-Chain Relayers', 'Cloud Firestore'],
  },
  highlights: [
    'Cross-chain settlement powered by Circle CCTP and Wormhole across EVM and Solana',
    'Non-custodial payable invoices and payment nonces with PDA-level replay protection on Solana',
    'Single shareable payable link allowing payers to pay from any supported network with automatic routing',
    'Real-time activity audit trails, fee configurations, and multi-token balance tracking',
  ],
  image: { alt: 'Display of Chainbills', name: 'chainbills', png: true },
  actions: [
    {
      icon: 'zap',
      link: 'https://chainbills.xyz',
      title: 'Get Started',
    },
    {
      icon: 'github',
      link: 'https://github.com/chainbills/chainbills',
      title: 'Source Code',
    },
  ],
  tags: ['Solidity', 'Solana'],
  expandedTags: ['Web3', 'Solidity', 'Solana', 'Circle CCTP', 'Wormhole', 'Cross-Chain', 'Anchor Rust', 'TypeScript'],
};

const dado: CodingProject = {
  title: 'Dado Food',
  description:
    'On-Demand Food Delivery Ecosystem with Customer, Rider, and Vendor Mobile Apps serving happy users with local food.',
  longDescription:
    'Dado Food is a full-lifecycle on-demand food delivery and logistics ecosystem tailored for African culinary businesses and hungry customers. The ecosystem is composed of three synchronized native-compiled mobile apps built with Flutter: a consumer app for discovery and checkout, a rider app with turn-by-turn navigation and dispatch coordination, and a merchant vendor dashboard for real-time kitchen order management and menu availability.',
  category: 'Mobile & Flutter',
  status: 'Production Ecosystem',
  role: 'Lead Mobile Architect & Backend Engineer',
  architecture: {
    frontend: ['Flutter (Dart)', 'Bloc State Management', 'Google Maps Platform'],
    backend: ['Firebase Cloud Firestore', 'Cloud Functions', 'Node.js'],
    infrastructure: ['Firebase Cloud Messaging (FCM)', 'Realtime Location Tracking'],
  },
  highlights: [
    'Engineered 3 synchronized mobile clients across iOS and Android with single codebase efficiency',
    'Live geospatial delivery route tracking with real-time ETA updates for customers and dispatchers',
    'Sub-second order state synchronization using Firebase Realtime streams and Cloud Functions',
    'Resilient offline caching and graceful recovery for intermittent network conditions',
  ],
  image: { alt: 'Dado', name: 'dado', png: true },
  actions: [{ icon: 'rocket', link: 'https://dado.ng', title: 'All Apps' }],
  tags: ['Flutter', 'Firebase'],
  expandedTags: ['Flutter', 'Dart', 'Firebase', 'Mobile Architecture', 'Google Maps Platform', 'Bloc'],
};

const orctra: CodingProject = {
  title: 'Orctra',
  description:
    'Gamified capital economy live on EVM (minting active) with Solana settlement rolling out. Features on-chain prediction ladders, liquidity vaults, and cross-chain settlement.',
  longDescription:
    'Orctra is a gamified capital economy protocol built across EVM and Solana. The protocol features on-chain prediction ladders with progressive multiplier rungs, liquidity swap vaults, NFT-to-token swap fees, and automated royalty distributions. Engineered with high-performance smart contracts on EVM and Solana (Anchor/Rust), Orctra enables non-custodial participants to speculate on asset directions, climb prize ladders, and earn protocol yield with cryptographic settlement.',
  category: 'Web3 / Blockchain',
  status: 'Live on EVM',
  role: 'Lead Architect & Smart Contract Developer',
  architecture: {
    frontend: ['React / Vite', 'TypeScript', 'Tailwind CSS', 'Lucide Icons'],
    backend: ['On-Chain State Machine', 'Decentralized Oracle Relays'],
    blockchainOrAi: ['Solidity (EVM)', 'Anchor & Rust (Solana)', 'Prediction Multiplier Ladders', 'Liquidity Vaults'],
    infrastructure: ['Cross-Chain Settlement Relays', 'Non-Custodial Wallet Connectors'],
  },
  highlights: [
    'Multi-chain protocol deployed across EVM and Solana with non-custodial signature verification',
    'Interactive prediction ladders featuring directional rungs, dynamic multipliers, and instant settlement',
    'Automated liquidity vaults supporting minting, swaps, activation, and reward pool fee routing',
    'Secondary marketplace royalty routing and holder reward distribution mechanics',
  ],
  image: { alt: 'Flyer Image', name: 'orctra' },
  actions: [
    {
      icon: 'zap',
      link: 'https://orctra.com',
      title: 'Trade Now',
    },
    {
      icon: 'externallink',
      link: 'https://x.com/orctra',
      title: 'Follow Us',
    },
  ],
  tags: ['Solidity', 'Solana'],
  expandedTags: ['Web3', 'Solidity', 'Solana', 'Anchor Rust', 'Prediction Ladders', 'DeFi Vaults', 'React'],
};

const androidBubbles: CodingProject = {
  title: 'Android Bubbles in Flutter',
  description:
    "Open-source Flutter plugin that exposes Android's native Conversation Bubbles overlay (introduced in Android 11) to Dart apps, so messaging and chat features can pop out as floating, multi-tasking chat heads over other apps. Ships with a working example and clean platform-channel bindings for NotificationManager and BubbleMetadata.",
  longDescription:
    "Android Bubbles in Flutter (conversation_bubbles) is an open-source Flutter plugin that bridges Flutter apps to Android's native Conversation Bubbles system API (introduced in Android 11+). The plugin enables messaging and communication apps to pop out floating, multi-tasking chat heads over other applications, handling Android NotificationManager lifecycles, BubbleMetadata, shortcuts, and platform channel data transfer seamlessly.",
  category: 'Open Source Tooling',
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
  actions: [
    {
      icon: 'github',
      link: 'https://github.com/keepdeploying/conversation_bubbles',
      title: 'Package Source',
    },
  ],
  tags: ['Flutter', 'Android'],
  expandedTags: ['Flutter', 'Dart', 'Android SDK', 'Kotlin', 'Platform Channels'],
};

const confide: CodingProject = {
  title: 'Confide',
  description:
    'Mobile-first social network built as a safe, supportive space where members share confidences, seek advice, and celebrate small wins in dual anonymous and identified posting modes. Live on both Google Play and the App Store.',
  longDescription:
    'Confide Community is a mobile social network offering a supportive, private space where users can voice thoughts, share personal dilemmas, seek advice, and find mutual inspiration. Built with Flutter for iOS and Android, the application features community moderation, anonymous and identified posting modes, real-time discussions, and accessible wellness resources.',
  category: 'Mobile & Flutter',
  status: 'Available on App Stores',
  role: 'Mobile Application Developer',
  architecture: {
    frontend: ['Flutter (Dart)', 'Material Design 3', 'Provider / Riverpod'],
    backend: ['Cloud REST API', 'Push Notifications'],
    infrastructure: ['Apple App Store', 'Google Play Store'],
  },
  highlights: [
    'Dual-mode posting providing anonymous sharing while maintaining community moderation standards',
    'Silky-smooth feed rendering with optimistic UI updates and image caching',
    'Cross-platform deployment to both Apple App Store and Google Play Store',
    'Encrypted user profile state and fine-grained privacy controls',
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
  expandedTags: ['Flutter', 'Dart', 'iOS & Android', 'Community', 'Mobile Security'],
};

export const featuredProjects: CodingProject[] = [orctra, chainbills, dado, androidBubbles, confide];

export const projects: CodingProject[] = [
  orctra,
  chainbills,
  dado,
  androidBubbles,
  confide,
  {
    title: 'DevFest Abakaliki 2024',
    description:
      "Official event portal for DevFest Abakaliki 2024, the Google Developer Groups community's flagship annual conference, covering ticket reservations, live speaker schedules, venue navigation, and sponsor showcases on a responsive React and Firebase build. Led end to end by Obum.",
    longDescription:
      'Official web portal for DevFest Abakaliki 2024 organized by Google Developer Groups (GDG) Abakaliki. Obum led the frontend and backend engineering, designing a responsive, fast-loading event portal for attendee ticket reservation, speaker schedule discovery, venue navigation, and sponsor showcases.',
    category: 'Full-Stack Web',
    status: 'Delivered for Event',
    role: 'Lead Frontend & Web Developer',
    architecture: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],
      backend: ['Firebase Firestore', 'Firebase Hosting'],
    },
    highlights: [
      'Engineered interactive event schedule with real-time speaker profile inspection',
      'Integrated ticket booking flows with instant confirmation and QR code passes',
      'Optimized asset loading achieving sub-second Largest Contentful Paint (LCP)',
    ],
    image: { alt: 'DevFest Abakaliki 2024 Flyer', name: 'dfai24' },
    actions: [
      {
        icon: 'ticket',
        link: 'https://devfestabakaliki.com',
        title: 'Get Ticket',
      },
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/devfestabakaliki2024',
        title: 'Source Code',
      },
    ],
    tags: ['React', 'Firebase'],
    expandedTags: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS', 'Cloud Firestore'],
  },
  {
    title: 'WalletSMSLockr',
    description:
      'Privacy-first Android app that end-to-end encrypts SMS between sender and intended recipient, and holds sensitive vault data locally under device-bound cryptographic identifiers so nothing leaks if the phone is lost or the app is uninstalled.',
    longDescription:
      'WalletSMSLockr is a privacy-focused mobile security vault and encrypted messaging application. It ensures sensitive SMS communications remain strictly between intended parties by utilizing end-to-end cryptographic encryption paired with hardware device identifiers for local vault protection.',
    category: 'Mobile & Flutter',
    status: 'Store Release',
    role: 'Mobile Security Engineer',
    architecture: {
      frontend: ['Flutter (Dart)', 'Local Hardware Keystore'],
      backend: ['End-to-End Encryption Engine', 'Device Identifier Vault'],
    },
    highlights: [
      'Client-side symmetric and asymmetric encryption keeping communications confidential',
      'Zero-knowledge hardware vault secured by device biometric and hardware keys',
      'Offline-first architecture ensuring message privacy without third-party cloud leaks',
    ],
    image: { alt: 'WalletSMSLockr Logo', name: 'walletsmslockr', png: true },
    actions: [
      {
        icon: 'googleplay',
        link: 'https://play.google.com/store/apps/details?id=com.lokdon.walletsmslockr',
        title: 'Download on Google Play',
      },
    ],
    tags: ['Flutter', 'Security'],
    expandedTags: ['Flutter', 'Dart', 'Security', 'Encryption', 'Cryptography', 'Android'],
  },
  {
    title: 'obumnwabude',
    description:
      'The portfolio site you are reading right now. A statically pre-rendered Vue 3 showcase built on a custom Liquid Glass 2.0 design system, with 3D mouse-tilt cards, glass drawers and bento expansions, and deep GA4 telemetry across every meaningful interaction.',
    longDescription:
      'Personal portfolio and technical showcase engineered with Vue 3, TypeScript, and a modern Liquid Glass 2.0 design system. Features static site generation (SSG) pre-rendering, search engine optimization (SEO) schema structured data, interactive glass tilt surfaces, and comprehensive GA4 telemetry.',
    category: 'Full-Stack Web',
    status: 'Live & Continuously Deployed',
    role: 'Creator & Software Architect',
    architecture: {
      frontend: ['Vue 3', 'TypeScript', 'Vite', 'Modern Glassmorphic CSS'],
      infrastructure: ['Firebase Hosting', 'Static Pre-rendering (SSG)', 'Google Analytics 4'],
    },
    highlights: [
      'Liquid Glass 2.0 theme featuring 3D mouse tilt, specular sheen, and chromatic ambient lighting',
      'Zero-runtime overhead SSG pre-rendering pipeline with Open Graph & Twitter meta tags',
      'Deep behavioral telemetry and Google Analytics 4 tracking engine',
    ],
    image: {
      alt: 'Obum Speaking',
      name: 'obum-speaking',
    },
    actions: [
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/obumnwabude',
        title: 'Source Code on GitHub',
      },
    ],
    tags: ['Vue 3', 'Firebase'],
    expandedTags: ['Vue 3', 'TypeScript', 'Glassmorphism', 'SSG', 'Firebase'],
  },
  {
    title: 'CTLearn',
    description:
      'Cross-platform Flutter app for academic management and live student-to-tutor collaboration, covering course material distribution, Q&A channels, attendance tracking, and assignment submissions across Android and iOS. Ships on Google Play.',
    longDescription:
      'CTLearn is an educational management platform connecting academic tutors with students. Engineered with Flutter, the app provides real-time course material distribution, interactive Q&A channels, attendance tracking, and intuitive assignment submissions.',
    category: 'Mobile & Flutter',
    status: 'Store Release',
    role: 'Mobile Developer',
    architecture: {
      frontend: ['Flutter (Dart)', 'State Management', 'REST API Client'],
      backend: ['Cloud Database', 'Push Notifications'],
    },
    highlights: [
      'Interactive student-tutor messaging and academic resource sharing',
      'Intuitive timetable, course schedule, and attendance management',
      'Smooth performance across Android and iOS devices',
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
    expandedTags: ['Flutter', 'Dart', 'Education', 'Mobile'],
  },
  {
    title: 'Todo',
    description:
      'Minimalist single-screen Flutter todo app in dark mode, written as the canonical reference for the FilledStacks Stacked architecture (MVVM with reactive ViewModels and get_it services). Companion codebase to the freeCodeCamp Stacked tutorial.',
    longDescription:
      'A minimalist Flutter todo list application demonstrating the Stacked architecture pattern for scalable state management. Built to teach Stacked best practices, the app features a clean dark-mode interface and reactive task tracking.',
    category: 'Mobile & Flutter',
    status: 'Teaching Resource',
    role: 'Author & Developer',
    architecture: {
      frontend: ['Flutter (Dart)', 'Stacked State Management'],
    },
    highlights: [
      'Clean single-screen interface with dark mode support',
      'Demonstrates Stacked architecture patterns for education',
      'Reactive task state updates and persistence',
    ],
    image: { alt: 'Screenshots of the Todo App', name: 'stacked-todo' },
    actions: [
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/Flutter_stacked_todo',
        title: 'Source Code on GitHub',
      },
    ],
    tags: ['Flutter', 'State Management'],
    expandedTags: ['Flutter', 'Dart', 'Stacked Architecture', 'State Management'],
  },
  {
    title: 'LinkedIn Class',
    description:
      'Registration portal built to gatekeep a live LinkedIn skills class, using LinkedIn OAuth as the login so only real LinkedIn accounts could enroll, plus a Firebase backend for participant tracking and post-class material distribution.',
    longDescription:
      'Event registration portal built to manage participants for a LinkedIn professional development workshop. The platform integrates LinkedIn OAuth authentication, tracks registrations, and grants secure access to class materials.',
    category: 'Full-Stack Web',
    status: 'Event Completed',
    role: 'Full-Stack Developer',
    architecture: {
      frontend: ['Angular', 'TypeScript'],
      backend: ['Firebase', 'Cloud Functions'],
    },
    highlights: [
      'LinkedIn OAuth integration for participant authentication',
      'Real-time registration tracking and participant management',
      'Secure access control for class materials',
    ],
    image: { alt: 'LinkedIn Class Flyer', name: 'linkedin-class-ad' },
    actions: [
      {
        icon: 'externallink',
        link: 'https://linkedinclass.obumnwabude.com',
        title: 'Visit',
      },
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/linkedin-class',
        title: 'Source Code',
      },
    ],
    tags: ['Angular', 'Firebase'],
    expandedTags: ['Angular', 'Firebase', 'TypeScript', 'OAuth', 'Cloud Functions'],
  },
  {
    title: 'Calculator',
    description:
      'Cross-platform Flutter scientific calculator supporting compound expressions, operator precedence, and history recall, implemented with the Stacked MVVM pattern for clean state management. Shipped on Google Play.',
    longDescription:
      'A Flutter-based scientific calculator application demonstrating advanced state management with the Stacked architecture pattern. The app supports complex mathematical expressions, history tracking, and cross-platform iOS and Android functionality.',
    category: 'Mobile & Flutter',
    status: 'Store Release',
    role: 'Mobile Developer',
    architecture: {
      frontend: ['Flutter (Dart)', 'Stacked Architecture'],
    },
    highlights: [
      'Complex mathematical expression evaluation with proper operator precedence',
      'Clean Stacked state management for calculation history',
      'Available on Google Play Store for Android users',
    ],
    image: { alt: 'Screens of Calculator', name: 'calculator' },
    actions: [
      {
        icon: 'googleplay',
        link: 'https://play.google.com/store/apps/details?id=com.keepdeploying.calculator',
        title: 'Google Play',
      },
      {
        icon: 'github',
        link: 'https://github.com/keepdeploying/calculator',
        title: 'Source Code',
      },
    ],
    tags: ['Flutter', 'Mobile'],
    expandedTags: ['Flutter', 'Dart', 'Stacked Architecture', 'Mobile App'],
  },
  {
    title: 'obum.me',
    description:
      'Personal URL shortener that fronts every link Obum shares (profiles, GitHub, achievements) under a memorable custom slug. Built end to end on Firebase (Firestore, Cloud Functions, Hosting), so it stays effectively free to keep running.',
    longDescription:
      "A serverless URL shortener built entirely on Firebase infrastructure. The service provides custom short links to Obum's professional profiles, social accounts, and key projects, with real-time analytics and link management through a simple Angular web interface.",
    category: 'Full-Stack Web',
    status: 'Live',
    role: 'Full-Stack Developer',
    architecture: {
      frontend: ['Angular', 'TypeScript'],
      backend: ['Firebase Cloud Functions', 'Cloud Firestore'],
      infrastructure: ['Firebase Hosting'],
    },
    highlights: [
      'Serverless URL shortening with custom aliases using Firebase Functions',
      'Real-time link analytics and click tracking via Firestore',
      'Minimal infrastructure footprint deployed entirely on Firebase',
    ],
    image: { alt: 'Screenshot of the 404 page', name: 'obum.me-404' },
    actions: [
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/obum.me',
        title: 'Source Code on GitHub',
      },
    ],
    tags: ['Firebase', 'Angular'],
    expandedTags: ['Firebase', 'Angular', 'TypeScript', 'Cloud Functions', 'Firestore', 'Serverless'],
  },
  {
    title: 'Tutorial Management System',
    description:
      'Responsive scheduling dashboard that pairs students with tutors for one-to-one sessions, using a shared scheduler form that opens as a bottom sheet on mobile and a side panel on wide screens. Real-time state stays in sync via Firestore across both roles.',
    longDescription:
      'A responsive two-way platform for coordinating tutorial sessions between educators and learners. Built with Angular and Firebase, the system features responsive scheduling forms, real-time session updates, and role-based access for both tutors and students.',
    category: 'Full-Stack Web',
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
      {
        icon: 'zap',
        link: 'https://tutorialmgt.web.app',
        title: 'Get Started',
      },
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/tutorialmgt',
        title: 'Source Code',
      },
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
    category: 'Full-Stack Web',
    status: 'Live',
    role: 'Developer',
    architecture: {
      frontend: ['Angular', 'TypeScript'],
      backend: ['Firebase Firestore', 'Cloud Functions'],
    },
    highlights: [
      'Custom progress and achievement reporting forms for club members',
      'Real-time data synchronization across the community',
      'Welcoming interface for campus organization engagement',
    ],
    image: { alt: 'Community Picture', name: 'genesys-community' },
    actions: [
      {
        icon: 'externallink',
        link: 'https://genesysaefunai.web.app',
        title: 'Join Us',
      },
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/genesys-community',
        title: 'Source Code',
      },
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
    category: 'Mobile & Flutter',
    status: 'Open Source on GitHub',
    role: 'Developer',
    architecture: {
      frontend: ['Flutter (Dart)', 'System Theme Integration'],
    },
    highlights: [
      'Real-time battery status display using Flutter battery_info plugin',
      'System theme awareness for seamless dark and light mode support',
      'Simple, focused single-screen user experience',
    ],
    image: { alt: 'Screens of Battery Info', name: 'battery-info' },
    actions: [
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/battery_info',
        title: 'Source Code on GitHub',
      },
    ],
    tags: ['Flutter', 'Android'],
    expandedTags: ['Flutter', 'Dart', 'Android', 'System Integration'],
  },
  {
    title: 'Mmèmmè',
    description:
      'Public event calendar for venues managed by a central authority, so citizens can see every approved gathering in one place and organizers can request slots without back-and-forth emails. Built with Flutter and Firebase; preview is live.',
    longDescription:
      'A community event calendar platform for managing venue schedules and event approvals. Built with Flutter and Firebase, Mmèmmè provides a public-facing calendar where citizens can view all approved events at municipal venues in real time.',
    category: 'Mobile & Flutter',
    status: 'In Development',
    role: 'Developer',
    architecture: {
      frontend: ['Flutter (Dart)'],
      backend: ['Firebase Firestore'],
    },
    highlights: [
      'Real-time public event calendar for venue availability',
      'Event approval workflow for authority management',
      'Cross-platform mobile access to community schedules',
    ],
    image: { alt: 'Mmèmmè Logo', name: 'mmemme' },
    actions: [
      {
        icon: 'externallink',
        link: 'https://mmemme1.web.app',
        title: 'Visit Preview',
      },
    ],
    tags: ['Flutter', 'Firebase'],
    expandedTags: ['Flutter', 'Dart', 'Firebase', 'Calendar', 'Community'],
  },
  {
    title: 'Christmas Cantata Quiz',
    description:
      'Two-round competitive quiz portal built for a Christmas Cantata programme, running timed multiple-choice questions on selected Bible chapters with a live leaderboard as participants play across both rounds. Angular front end backed by Firebase.',
    longDescription:
      'An interactive online quiz platform built for Christmas Cantata event participants. The application features timed multiple-choice rounds with real-time scoring, leaderboards, and secure participant tracking.',
    category: 'Full-Stack Web',
    status: 'Event Completed',
    role: 'Developer',
    architecture: {
      frontend: ['Angular', 'TypeScript'],
      backend: ['Firebase Firestore', 'Cloud Functions'],
    },
    highlights: [
      'Real-time timed quiz rounds with instant scoring',
      'Competitive leaderboard tracking across participants',
      'Responsive interface for desktop and mobile participation',
    ],
    image: { alt: 'Christmas Cantata Flyer', name: 'cantata' },
    actions: [
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/choircarolquiz',
        title: 'Source Code on GitHub',
      },
    ],
    tags: ['Angular', 'Firebase'],
    expandedTags: ['Angular', 'Firebase', 'TypeScript', 'Quiz Platform', 'Realtime'],
  },
  {
    title: 'My Notes',
    description:
      'Note-taking web app written as the reference project for a GDSC AE-FUNAI Firebase workshop, showing off Firestore real-time syncing, security rules, and Firebase Authentication in the smallest useful form. Still up as a teaching sample.',
    longDescription:
      'A note-taking application built to demonstrate Firestore best practices during a GDSC Firebase workshop series. The app showcases real-time data synchronization, cloud storage, and authentication patterns using vanilla JavaScript and Firebase.',
    category: 'Full-Stack Web',
    status: 'Teaching Resource',
    role: 'Instructor & Developer',
    architecture: {
      frontend: ['HTML', 'CSS', 'JavaScript'],
      backend: ['Firebase Firestore', 'Firebase Authentication'],
    },
    highlights: [
      'Real-time note synchronization using Firestore listeners',
      'Firebase Authentication for user access control',
      'Educational example for GDSC workshop participants',
    ],
    image: { alt: 'Screens of using MyNotes', name: 'mynotes' },
    actions: [
      {
        icon: 'externallink',
        link: 'https://mynotesobum.web.app',
        title: 'Sample',
      },
      {
        icon: 'github',
        link: 'https://github.com/gdscaefunai/mynotes',
        title: 'Source Code',
      },
    ],
    tags: ['Firebase', 'JavaScript'],
    expandedTags: ['Firebase', 'Firestore', 'JavaScript', 'Authentication'],
  },
  {
    title: 'GitHub Invite',
    description:
      'Small utility that takes a GitHub username and an organization name and sends an org invitation through the GitHub API, so organizers can onboard cohorts in bulk instead of pasting invites by hand. Node.js backend on Firebase Functions.',
    longDescription:
      'A Node.js utility that automates GitHub organization invitations. Users provide a GitHub username and organization identifier, and the tool uses the GitHub API to send direct org invitations.',
    category: 'Cloud & AI',
    status: 'Open Source on GitHub',
    role: 'Developer',
    architecture: {
      backend: ['Node.js', 'GitHub API'],
    },
    highlights: [
      'GitHub API integration for organization invitations',
      'Simple web interface for bulk user invitations',
      'Programmatic org membership management',
    ],
    image: { alt: 'Screenshot of GitHub Invite', name: 'github-invite' },
    actions: [
      {
        icon: 'externallink',
        link: 'https://githubinvite.web.app',
        title: 'Sample',
      },
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/github-invite',
        title: 'Source Code',
      },
    ],
    tags: ['Node.js', 'GitHub API'],
    expandedTags: ['Node.js', 'GitHub API', 'JavaScript', 'Automation'],
  },
  {
    title: 'ECX #30DaysOfCode',
    description:
      'Personal submissions from the ECX #30DaysOfCode backend track in 2020, working through daily Node.js and JavaScript challenges from HTTP fundamentals up through API design and lightweight databases. Public archive of the full 30-day journey.',
    longDescription:
      'A collection of backend development challenges completed during the ECX #30DaysOfCode program in 2020. The submissions showcase Node.js solutions for progressive backend engineering tasks, from fundamentals to API design.',
    category: 'Cloud & AI',
    status: 'Learning Archive',
    role: 'Participant',
    architecture: {
      backend: ['Node.js', 'JavaScript'],
    },
    highlights: [
      'Daily backend challenges covering HTTP, APIs, and databases',
      'Node.js and JavaScript fundamentals reinforcement',
      'Public archive of progression through structured program',
    ],
    image: { alt: '', name: 'backend' },
    actions: [
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/ecx-backend-30daysofcode',
        title: 'Submissions',
      },
    ],
    tags: ['Node.js', 'Backend'],
    expandedTags: ['Node.js', 'JavaScript', 'Backend', 'Challenge'],
  },
  {
    title: 'Wolverstore',
    description:
      'Node.js and Express backend for an e-commerce marketplace, covering product catalogs, carts, checkout, and order state. Fully documented on Postman so a frontend can wire against it without hunting through source code.',
    longDescription:
      'A Node.js backend service for an e-commerce platform providing product catalogs, shopping cart management, and order processing APIs. Built with Express.js and documented via Postman for developer integration.',
    category: 'Full-Stack Web',
    status: 'Reference Implementation',
    role: 'Backend Developer',
    architecture: {
      backend: ['Node.js', 'Express.js', 'REST API'],
    },
    highlights: [
      'RESTful API design for product and cart management',
      'Order processing and transaction handling',
      'Comprehensive Postman documentation for API consumers',
    ],
    image: { alt: '', name: 'backend' },
    actions: [
      {
        icon: 'document',
        link: 'https://documenter.getpostman.com/view/11131742/SzfAxRPo',
        title: 'Documentation',
      },
      {
        icon: 'github',
        link: 'https://github.com/obumnwabude/wolverstore',
        title: 'Source Code',
      },
    ],
    tags: ['Node.js', 'Backend'],
    expandedTags: ['Node.js', 'Express.js', 'REST API', 'E-Commerce', 'Backend'],
  },
];
