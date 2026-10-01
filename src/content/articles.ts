import type { Article } from '@/types';

export const articles: Article[] = [
  {
    title: 'What Every Dev Should Know About Tracking Product Data',
    date: { month: 8, year: 2026 },
    category: 'Architectures',
    readTime: '16 min read',
    description:
      'Three categories of product data every developer should track, when to start, event naming that stays useful, and how to handle privacy responsibly.',
    longDescription:
      'A practical primer on the three categories of product data developers should track (user behavior, system and backend performance, and business metrics), why teams should implement tracking early and maintain it continuously, and how to design event names and parameters that stay useful over time. Covers privacy and consent handling under regulations like GDPR.',
    tags: ['Product Analytics', 'Data Tracking', 'Event Instrumentation', 'GDPR', 'Backend'],
    keyTakeaways: [
      'Product data replaces guesses with data-backed decisions across user, system, and business dimensions.',
      'Start tracking immediately: historical data cannot be reconstructed after the fact.',
      'Use consistent verb_noun event names and only track what you would actually act on.',
      'Exclude personally identifiable information and obtain proper consent under GDPR and similar regulations.',
    ],
    topicsCovered: ['Behavioral Analytics', 'System Metrics', 'Event Naming', 'Consent & Privacy'],
    image: { alt: 'Tracking Product Data', name: 'tracking-product-data' },
    link: 'https://www.freecodecamp.org/news/what-devs-should-know-about-tracking-product-data/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How to Make Your Antigravity Agent Skills Configurable (Without Forking Them)',
    date: { month: 7, year: 2026 },
    readTime: '12 min read',
    category: 'Architectures',
    description:
      'Make Antigravity Agent Skills reusable and customizable across teams without forking, using a default-plus-override YAML config pattern.',
    longDescription:
      'A step-by-step guide to making Antigravity Agent Skills reusable across teams by pairing a default YAML config with a per-project override, and using a small Python loader to deep-merge the two. Keeps skill logic shared while letting each project bend behavior locally, with worked examples for git commits, changelogs, and license headers.',
    tags: ['AI Agents', 'Antigravity', 'Python', 'YAML', 'Developer Tools'],
    keyTakeaways: [
      'Static skills require forking to change behavior; configurable skills use a config.default.yaml plus a per-project .agent/skills.config.yaml.',
      'A small Python deep-merge loader keeps shared skill logic clean while letting each project override behavior.',
      'Skills load on demand: the agent reads the full instruction file only when a request matches.',
      'One skill can serve multiple teams with distinct requirements without code divergence.',
    ],
    topicsCovered: ['Agent Skills', 'YAML Config', 'Deep Merge', 'Reusable Automation'],
    image: { alt: 'Antigravity Agent Skills', name: 'antigravity-agent-skills' },
    link: 'https://www.freecodecamp.org/news/make-your-antigravity-agent-skills-configurable-without-forking-them/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'Road to Mastery - Being a Google Developer Expert',
    date: { month: 12, year: 2025 },
    category: 'Stories',
    description:
      'Becoming an Expert has catapulted my developer career. I have learned much more and met more industry leaders thanks to the GDE program.',
    longDescription:
      'An introspective reflection detailing the milestones, challenges, and impact of becoming recognized as a Google Developer Expert in Cloud AI & Dart-Flutter. Chronicles the journey of mentoring thousands of developers across Africa, speaking at regional DevFest conferences, collaborating at the Google Kenya office, and balancing rigorous engineering delivery with developer advocacy.',
    readTime: '6 min read',
    tags: ['Google Developer Expert', 'Cloud AI', 'Flutter', 'Career', 'Mentorship'],
    keyTakeaways: [
      'The tangible compounding impact of consistent public learning, open-source building, and community mentorship.',
      'What the Google Developer Expert evaluation entails and how it connects you directly with Google product teams.',
      'Practical techniques for balancing hands-on technical architecture with community leadership.',
    ],
    topicsCovered: ['GDE Program', 'Developer Advocacy', 'Cloud AI', 'Community Impact', 'Career Growth'],
    image: { alt: 'Obum at Google Kenya Office', name: 'obum-google-kenya' },
    link: 'https://stories.obumnwabude.com/6157b05ed803',
    publishedOn: 'Medium',
  },
  {
    title: 'How to Implement RBAC in a Community Dashboard with Nuxt',
    date: { month: 11, year: 2024 },
    readTime: '16 min read',
    category: 'Architectures',
    description:
      'Learn how to integrate Role Based Access Control (RBAC) with Permit.io in Nuxt to create different access levels in an example app.',
    longDescription:
      'A deep-dive engineering tutorial on establishing fine-grained authorization in modern full-stack web applications. Contrasts the critical distinction between authentication (verifying identity) and authorization (verifying permissions). Demonstrates step-by-step how to integrate Permit.io as an Authorization-as-a-Service layer inside a full-stack Nuxt 3 application with Tailwind CSS and TypeScript, managing Posts, Materials, and Announcements across Admin, Mentor, and Member roles.',
    tags: ['Nuxt 3', 'Vue 3', 'Permit.io', 'RBAC', 'TypeScript', 'Tailwind CSS'],
    keyTakeaways: [
      'Authentication vs. Authorization: decoupling identity checks from policy enforcement.',
      'Offloading complex role hierarchies, permissions, and audit logs to Permit.io Authorization-as-a-Service.',
      'Non-uniform role capabilities across resource types: Admins full CRUD, Mentors manage materials, Members create/delete posts only.',
      'Protecting server API event handlers (e.g., posts.delete.ts) using Nuxt server middleware and Permit PDP verification.',
      'Dynamic client-side UI rendering based on granular user permissions.',
    ],
    topicsCovered: [
      'Role-Based Access Control',
      'Nuxt Server Routes',
      'Permit.io PDP',
      'Full-Stack Vue',
      'API Security',
    ],
    repoUrl: 'https://github.com/obumnwabude/rbac-community-dashboard',
    image: { alt: 'RBAC Community Dashboard', name: 'rbac-community-dashboard' },
    link: 'https://www.freecodecamp.org/news/rbac-community-dashboard-with-nuxt/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How to Use Streams and Services for Flutter State',
    date: { month: 9, year: 2024 },
    readTime: '16 min read',
    category: '#Flutter',
    description:
      "Explore an Easy and Flexible State Management Architecture in Flutter with rxdart's Stream manipulations and singleton classes.",
    longDescription:
      'Presents a lightweight, flexible, and decoupled state management architectural pattern for Flutter applications. Rather than adopting heavy, opinionated frameworks, this approach pairs Dart’s built-in asynchronous broadcast streams with singleton service classes. Shows how to combine StreamController and RxDart operators to build responsive, memory-safe data pipelines that react cleanly to application lifecycle events.',
    tags: ['Flutter', 'Dart', 'State Management', 'Streams', 'RxDart', 'Architecture'],
    keyTakeaways: [
      'Separating ephemeral UI state from long-lived application domain services without heavy third-party state libraries.',
      'Leveraging Dart StreamController broadcast streams and StreamBuilder for reactive rendering.',
      'Enhancing reactive pipelines using RxDart BehaviorSubject, debounce, and combineLatest operators.',
      'Safely subscribing to and cancelling streams during AppLifecycleState changes to prevent memory leaks.',
    ],
    topicsCovered: [
      'Broadcast Streams',
      'Singleton Services',
      'RxDart Operators',
      'App Lifecycle',
      'Memory Management',
    ],
    repoUrl: 'https://github.com/obumnwabude/write',
    image: { alt: 'Flutter Streams and Services', name: 'flutter-streams-and-services' },
    link: 'https://www.freecodecamp.org/news/flutter-streams-and-services/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How is Flutter Platform-Agnostic?',
    date: { month: 5, year: 2024 },
    readTime: '9 min read',
    category: '#Flutter',
    description:
      'Explore how Flutter is platform-agnostic through how it renders user interfaces and through platform channels.',
    longDescription:
      "An architectural exploration into Flutter's internal design that enables it to achieve true pixel-consistent cross-platform execution. Contrasts native OEM widget wrappers and WebView-based hybrid tools with Flutter's self-contained rendering pipeline (Skia & Impeller). Details the boundary between the host operating system shell and the inner Flutter engine, showing how platform channels handle asynchronous hardware communication.",
    tags: ['Flutter', 'Dart', 'Mobile Architecture', 'Impeller', 'Platform Channels', 'Cross-Platform'],
    keyTakeaways: [
      'How Flutter bypasses native OEM controls by drawing directly onto a single OS canvas using Skia/Impeller.',
      'The exact contract between the native host shell (Android Activity / iOS View Controller) and the Flutter engine.',
      'How Method Channels and Event Channels marshal binary data across the native Dart-C++ barrier.',
      'Why Flutter achieves identical visual fidelity across Android, iOS, Web, macOS, Windows, and Linux.',
    ],
    topicsCovered: [
      'Impeller Rendering Engine',
      'Host OS Shell',
      'BinaryMessenger',
      'Platform Channels',
      'Cross-Platform Compilers',
    ],
    image: { alt: 'Flutter Platform Agnostic Architecture', name: 'flutter-platform-agnostic' },
    link: 'https://www.freecodecamp.org/news/how-is-flutter-platform-agnostic/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How to Always Have A BuildContext in Flutter Outside of UI Code',
    date: { month: 4, year: 2024 },
    readTime: '12 min read',
    category: '#Flutter',
    description:
      'How to get a valid BuildContext where the widget tree does not reach: background services, HTTP interceptors, domain models. Walks through wiring a global NavigatorState key so snackbars, dialogs, and route pushes work safely from anywhere in the codebase.',
    longDescription:
      'Solves one of the most frequent friction points in Flutter development: needing a BuildContext inside background services, HTTP interceptors, or domain models where widget trees are inaccessible. Examines what BuildContext actually represents in the underlying Element tree, and walks through safely configuring a global NavigatorState key to display snackbars, dialogs, and route transitions from anywhere in your codebase.',
    tags: ['Flutter', 'Dart', 'BuildContext', 'NavigatorKey', 'Element Tree', 'Clean Code'],
    keyTakeaways: [
      'Demystifying BuildContext as a reference to a specific node in Flutter’s Element tree.',
      'Why passing BuildContext down multiple service layers violates separation of concerns and leads to memory leaks.',
      'Setting up a global GlobalKey<NavigatorState> to trigger navigation, bottom sheets, and alerts safely.',
      'Handling asynchronous gaps and unmounted context guards with mounted checks.',
    ],
    topicsCovered: ['Element Tree', 'GlobalKey<NavigatorState>', 'Service Locator Pattern', 'Asynchronous Gaps'],
    image: { alt: 'Flutter BuildContext Guide', name: 'flutter-always-build-context' },
    link: 'https://www.freecodecamp.org/news/how-to-always-have-a-buildcontext-in-flutter-outside-ui-code/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How to structure any booking/reservation system with Firebase',
    date: { month: 9, year: 2023 },
    category: 'Architectures',
    description:
      'Design a real-time booking and reservation engine on Firebase that survives concurrent slot grabs, using Firestore atomic transactions to kill double-booking races and scheduled Cloud Functions to reap expired holds automatically.',
    longDescription:
      'A practical architectural guide on designing real-time booking and reservation engines using Google Firebase. Addresses data normalization, concurrent slot reservations, preventing double-booking race conditions through Firestore transactions, and implementing automated expiration timers using Firebase Cloud Functions.',
    readTime: '8 min read',
    tags: ['Firebase', 'Firestore', 'Cloud Functions', 'System Design', 'NoSQL'],
    keyTakeaways: [
      'Structuring NoSQL collections for date-based scheduling and resource slot allocation.',
      'Preventing double-booking race conditions using atomic Cloud Firestore transactions.',
      'Automating reservation expiration and cleanup with scheduled Firebase Cloud Functions.',
    ],
    topicsCovered: ['Atomic Transactions', 'NoSQL Modeling', 'Race Condition Prevention', 'Scheduled Functions'],
    image: { alt: 'Firebase Booking System', name: 'firebase-booking' },
    link: 'https://stories.obumnwabude.com/how-to-structure-any-booking-reservation-system-with-firebase-e7f1774e848e',
    publishedOn: 'Medium',
  },
  {
    title: 'Hosting a Tech Community Event',
    date: { month: 8, year: 2023 },
    category: 'Communities',
    readTime: '8 min read',
    description: 'How to handle your event in real time and things you should do when the event is taking place.',
    longDescription:
      'A battle-tested field guide for community organizers on executing successful live tech events. Covers real-time speaker coordination, handling audiovisual hiccups, keeping attendees engaged during transitions, and facilitating productive breakout discussions.',
    tags: ['Community', 'Leadership', 'Event Organization', 'Public Speaking'],
    keyTakeaways: [
      'Establishing a reliable run-of-show schedule and speaker check-in protocol.',
      'Techniques for handling unforeseen technical glitches smoothly without losing audience attention.',
      'Fostering genuine networking and collaborative Q&A dynamics during physical and hybrid gatherings.',
    ],
    topicsCovered: ['Event Facilitation', 'Audience Engagement', 'Crisis Management', 'Community Building'],
    image: { alt: 'Host Community Event', name: 'host-community-event' },
    link: 'https://blog.obumnwabude.com/hosting-a-tech-community-event',
    publishedOn: 'Hashnode',
  },
  {
    title: 'How To Improve Flutter Forms',
    date: { month: 8, year: 2023 },
    readTime: '10 min read',
    category: '#Flutter',
    description:
      'Small UX moves that dramatically lower drop-off on Flutter forms: chained FocusNode transitions with TextInputAction.next, debounced remote validation to stop input stutter, and error messaging that does not shift the layout as it appears.',
    longDescription:
      'A UX-focused guide on engineering delight into mobile forms built with Flutter. Demonstrates keyboard action chaining, focus management, debounced async validation, accessible input hints, and ergonomic submit flows that dramatically lower user drop-off.',
    tags: ['Flutter', 'UX Design', 'Forms', 'FocusNode', 'Mobile UI'],
    keyTakeaways: [
      'Chaining FocusNode transitions using TextInputAction.next for effortless keyboard typing.',
      'Debouncing remote validation calls to reduce server load and eliminate input stuttering.',
      'Designing accessible error messages that do not shift surrounding layout elements abruptly.',
    ],
    topicsCovered: ['FocusNode Management', 'Debounced Validation', 'Keyboard Actions', 'Mobile Form UX'],
    image: { alt: 'Improve Flutter Forms', name: 'improve-flutter-forms' },
    link: 'https://dev.to/obumnwabude/how-to-improve-flutter-forms-ni3',
    publishedOn: 'Dev.to',
  },
  {
    title: 'How to Prevent Account Loss When using Two-Factor Authentication',
    date: { month: 2, year: 2023 },
    readTime: '10 min read',
    category: 'Architectures',
    description:
      'How multi-factor authentication can lock you out of your own account, and how to avoid it. Covers authenticator app sync, cryptographic backup codes, hardware security keys (FIDO2 and WebAuthn), and why SMS 2FA fails as both a security guarantee and a recovery fallback.',
    longDescription:
      'An essential cybersecurity advisory analyzing how multi-factor authentication systems can inadvertently lead to permanent user lockout. Explains authenticator app synchronization, offline emergency recovery keys, hardware security keys (FIDO2/WebAuthn), and why SMS verification fails as both a security guarantee and a recovery backup.',
    tags: ['Security', '2FA', 'Authentication', 'Cybersecurity', 'WebAuthn'],
    keyTakeaways: [
      'The dangers of single-device authenticator apps without encrypted cloud synchronization.',
      'Best practices for generating, testing, and storing cryptographic emergency recovery backup codes.',
      'Why SMS-based 2FA is susceptible to SIM swapping and should not be used as an account recovery fallback.',
    ],
    topicsCovered: ['TOTP Security', 'Account Recovery Codes', 'FIDO2 & WebAuthn', 'SIM Swap Prevention'],
    image: { alt: 'Two Factor Authentication Security', name: '2fa-security' },
    link: 'https://www.freecodecamp.org/news/how-to-prevent-account-loss-when-using-two-factor-authentication/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How to Brand Your Flutter app',
    date: { month: 2, year: 2023 },
    category: '#Flutter',
    description:
      'Set up a coherent design system in a Flutter app with Material 3: unified ThemeData, ColorScheme.fromSeed for automatic light and dark schemes, a typography scale, custom splash screens, and native launcher icons across Android and iOS.',
    longDescription:
      'A practical guide to implementing a coherent design system in Flutter using Material Design 3. Details configuring unified ThemeData, dynamic ColorScheme generation from core brand colors, responsive typography scale setup, custom splash screens, and platform-specific app icons.',
    readTime: '7 min read',
    tags: ['Flutter', 'Branding', 'Material 3', 'ThemeData', 'Design Systems'],
    keyTakeaways: [
      'Generating cohesive light and dark color schemes from a single seed color with Material 3.',
      'Organizing theme tokens cleanly into centralized styling files for project-wide maintainability.',
      'Configuring native launcher icons and splash screens across Android and iOS.',
    ],
    topicsCovered: ['ThemeData', 'ColorScheme.fromSeed', 'Typography Scale', 'Asset Branding'],
    image: { alt: 'Branding Flutter App', name: 'branding-flutter' },
    link: 'https://web.archive.org/web/20230308132853/https://sweetcode.io/what-does-branding-a-flutter-app-entail/',
    publishedOn: 'SweetCode',
  },
  {
    title: 'Firebase CORS Proxy Server',
    date: { month: 1, year: 2023 },
    category: 'Architectures',
    description:
      'Learn how to bypass CORS issues making API calls through a CORS server that you setup for free yourself with Firebase.',
    longDescription:
      'A developer workaround tutorial detailing how Cross-Origin Resource Sharing (CORS) functions in web browsers and why third-party APIs often block client-side fetch calls. Demonstrates how to deploy a lightweight, zero-cost reverse proxy using Firebase Cloud Functions to attach necessary CORS headers safely.',
    readTime: '6 min read',
    tags: ['Firebase', 'Cloud Functions', 'CORS', 'Web Security', 'Node.js'],
    keyTakeaways: [
      'Understanding why browsers enforce the Same-Origin Policy and CORS restrictions.',
      'Deploying a lightweight serverless proxy on Firebase Cloud Functions with the cors middleware.',
      'Caching upstream API responses at the edge to reduce latency and downstream rate limits.',
    ],
    topicsCovered: ['Same-Origin Policy', 'CORS Headers', 'Reverse Proxy', 'Serverless Functions'],
    image: { alt: 'Firebase CORS Proxy', name: 'firebase-cors-proxy' },
    link: 'https://stories.obumnwabude.com/how-to-create-a-cors-proxy-server-with-firebase-functions-f4be840026b5',
    publishedOn: 'Medium',
  },
  {
    title: 'Guide to Testing Angular apps',
    date: { month: 12, year: 2022 },
    category: 'Architectures',
    description:
      'Learn the basics of testing Angular apps, including guide for unit testing, component testing, and end-to-end testing.',
    longDescription:
      'A thorough guide to software quality assurance in Angular applications. Covers unit testing services with Jasmine and Karma, testing component templates with TestBed and ComponentFixture, mocking HTTP requests with HttpClientTestingModule, and establishing end-to-end automation pipelines.',
    readTime: '11 min read',
    tags: ['Angular', 'Testing', 'Jasmine', 'Karma', 'Quality Assurance', 'TypeScript'],
    keyTakeaways: [
      'Configuring Angular TestBed to isolate components with mocked dependency providers.',
      'Testing asynchronous service calls with HttpClientTestingModule and TestRequest assertions.',
      'Writing maintainable component harness tests that survive DOM restructuring.',
    ],
    topicsCovered: ['Angular TestBed', 'Unit Testing', 'HTTP Mocking', 'E2E Testing'],
    image: { alt: 'Testing Angular Apps', name: 'test-angular' },
    link: 'https://reflect.run/articles/guide-to-testing-angular-apps/',
    publishedOn: 'Reflect',
  },
  {
    title: 'Flutter For Front-End Web Developers',
    date: { month: 9, year: 2022 },
    readTime: '8 min read',
    category: '#Flutter',
    description:
      'A translation guide for web developers picking up Flutter: which HTML and CSS mental models carry over (Flexbox, the box model), which do not (declarative Element tree, constraints-down-sizes-up), and how to reason about widget hierarchies without a DOM.',
    longDescription:
      'An in-depth transition guide for web developers moving to Flutter. Maps familiar HTML and CSS paradigms (Flexbox, CSS Grid, margin/padding box models) to their Flutter widget equivalents (Column, Row, Container, Expanded). Clarifies the mindset shift from declarative DOM trees to reactive Dart widget hierarchies.',
    tags: ['Flutter', 'Web Development', 'CSS-Tricks', 'CSS', 'Dart'],
    keyTakeaways: [
      'Translating Flexbox layout mental models (flex-direction, justify-content) into Column and Row widgets.',
      'Understanding how Flutter manages layout constraints: Constraints go down. Sizes go up. Parent sets position.',
      "Comparing CSS state styling with Flutter's reactive rebuild cycles.",
    ],
    topicsCovered: ['Flexbox to Flutter', 'Box Constraints', 'Widget Trees', 'CSS Mental Models'],
    image: { alt: 'Flutter for Web Developers', name: 'flutter-clouds' },
    link: 'https://css-tricks.com/flutter-for-front-end-web-developers/',
    publishedOn: 'CSS-Tricks',
  },
  {
    title: 'Why I Chose Angular to Build a URL Shortener',
    date: { month: 7, year: 2022 },
    category: 'Architectures',
    readTime: '8 min read',
    description:
      "Reviews the available tools, decision choices, and factors that influenced choosing Angular for the project's frontend.",
    longDescription:
      "An architectural post-mortem evaluating modern frontend framework options for a serverless utility tool. Analyzes why Angular's built-in dependency injection, strict TypeScript typing, modular router, and comprehensive tooling made it an ideal frontend paired with Firebase serverless hosting and Firestore database.",
    tags: ['Angular', 'CSS-Tricks', 'Frontend Architecture', 'Firebase', 'TypeScript'],
    keyTakeaways: [
      'Evaluating architectural trade-offs between Angular, React, and Vue for utility applications.',
      "Leveraging Angular's first-party dependency injection for clean API service abstraction.",
      'Achieving rapid deployment with Firebase Hosting and serverless redirects.',
    ],
    topicsCovered: ['Framework Comparison', 'Dependency Injection', 'Firebase Integration', 'Modular Architecture'],
    image: { alt: 'Angular URL Shortener', name: 'angular-url-shortener' },
    link: 'https://css-tricks.com/why-i-chose-angular-to-build-a-url-shortener/',
    publishedOn: 'CSS-Tricks',
  },
  {
    title: 'How to Use Stacked Architecture',
    date: { month: 7, year: 2022 },
    readTime: '26 min read',
    category: '#Flutter',
    description:
      'Explains what Stacked architecture is and guides you through creating a simple Todo App in Flutter with Stacked.',
    longDescription:
      "A hands-on tutorial demonstrating FilledStacks' Stacked architecture (MVVM pattern) in Flutter. Walks through separating business logic into ViewModels, binding state reactively with ViewModelBuilder, establishing singleton services with get_it, and building a clean, unit-testable Todo application.",
    tags: ['Flutter', 'Stacked Architecture', 'MVVM', 'State Management', 'Dart'],
    keyTakeaways: [
      'Understanding the MVVM pattern in Flutter: Views, ViewModels, and Services.',
      'Binding reactive UI widgets to ViewModels with ViewModelBuilder.reactive.',
      'Injecting domain services cleanly using dependency inversion with get_it.',
    ],
    topicsCovered: ['MVVM in Flutter', 'ViewModelBuilder', 'Dependency Injection', 'Clean Architecture'],
    repoUrl: 'https://github.com/obumnwabude/Flutter_stacked_todo',
    image: { alt: 'Stacked Architecture Todo App', name: 'fcc-flutter-stacked-todo' },
    link: 'https://www.freecodecamp.org/news/flutter-stacked-architecture-todo-app/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'Why You Should Use Flutter',
    date: { month: 7, year: 2022 },
    readTime: '16 min read',
    category: '#Flutter',
    description:
      'A technical and business case for adopting Flutter: sub-second stateful hot reload, a single codebase compiling natively to iOS, Android, web, and desktop, high-performance Impeller rendering, and the depth of the pub.dev package ecosystem.',
    longDescription:
      'A comprehensive technical and strategic analysis of the Flutter ecosystem for engineering teams and product leaders. Breaks down stateful hot reload, multi-platform compilation from a single codebase, high-performance 60/120fps graphics rendering, and the thriving pub.dev open-source package ecosystem.',
    tags: ['Flutter', 'Dart', 'Cross-Platform', 'Mobile Development', 'Product Strategy'],
    keyTakeaways: [
      'Accelerating developer velocity through sub-second stateful hot reload.',
      'Deploying natively compiled binaries across iOS, Android, Web, and Desktop from one repository.',
      'Evaluating the business ROI and long-term maintenance cost reductions of unified codebases.',
    ],
    topicsCovered: ['Stateful Hot Reload', 'Compilation Strategy', 'Business Value', 'Ecosystem Maturity'],
    image: { alt: 'Why You Should Use Flutter', name: 'fcc-why-flutter' },
    link: 'https://www.freecodecamp.org/news/why-you-should-use-flutter/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How to Implement Any UI in Flutter',
    date: { month: 6, year: 2022 },
    readTime: '14 min read',
    category: '#Flutter',
    description: 'A guide that will help you convert any user interface image, piece, or screen into Flutter code.',
    longDescription:
      'A systematic methodology for deconstructing complex UI/UX designs into modular Flutter widget trees. Teaches developers how to break down mockups from top-left to bottom-right, identifying layout primitives (Row, Column, Stack, Positioned), selecting appropriate pub.dev packages, and utilizing CustomPainter for complex visual shapes.',
    tags: ['Flutter', 'UI Design', 'Widget Tree', 'CustomPaint', 'Layout Decomposition'],
    keyTakeaways: [
      'The top-left to bottom-right visual scanning method for identifying parent and child widget boundaries.',
      'Composing complex layered interfaces with Stack, Positioned, and Align widgets.',
      'Knowing when to compose existing widgets versus drawing custom paths with CustomPaint.',
    ],
    topicsCovered: ['UI Decomposition', 'Layout Primitives', 'CustomPainter', 'Widget Composition'],
    image: { alt: 'Implement Any UI in Flutter', name: 'fcc-any-ui-flutter' },
    link: 'https://www.freecodecamp.org/news/how-to-implement-any-ui-in-flutter/',
    publishedOn: 'freeCodeCamp',
  },
  {
    title: 'How to Promote a Tech Community Event',
    date: { month: 6, year: 2022 },
    readTime: '7 min read',
    category: 'Communities',
    description:
      'A promotion playbook for community organisers: crafting an event message that lands, sequencing across social media, email, blogs and partner communities, and timing the cadence so interest peaks the week of the event.',
    longDescription:
      'A strategic marketing guide for community organizers on building awareness and driving attendance for tech events. Covers multi-channel promotion tactics, crafting compelling event messaging, leveraging social media and mailing lists, and measuring promotional reach.',
    keyTakeaways: [
      "Developing a coherent marketing message that clearly articulates the event's value to target attendees.",
      'Executing a multi-channel promotion strategy spanning social media, email, blogs, and community forums.',
      'Timing promotional cadence to build momentum and peak interest closer to the event date.',
    ],
    topicsCovered: ['Event Marketing', 'Social Media', 'Audience Targeting', 'Promotion Strategy'],
    tags: ['Community', 'Event Promotion', 'Marketing', 'Leadership', 'Social Media'],
    image: { alt: '', name: 'promote-community-event' },
    link: 'https://blog.obumnwabude.com/how-to-promote-a-tech-community-event',
    publishedOn: 'Hashnode',
  },
  {
    title: 'How to Plan Your Community Event',
    date: { month: 5, year: 2022 },
    readTime: '11 min read',
    category: 'Communities',
    description:
      "Don't just start hosting the event. Please, first plan it. Planning is like being in the event before it happens. ",
    longDescription:
      'A comprehensive planning guide for community organizers on preparing the logistics, structure, and flow of a successful tech event. Covers venue selection, speaker coordination, budget planning, timeline management, and contingency preparation.',
    keyTakeaways: [
      'Breaking down event planning into core phases: venue and date selection, speaker recruitment, budget approval, and timeline mapping.',
      'Creating a detailed run-of-show document that sequences speakers, breaks, networking, and logistics coordination.',
      'Identifying and mitigating potential failure points with contingency plans and clear escalation protocols.',
    ],
    topicsCovered: ['Event Planning', 'Logistics', 'Timeline', 'Budget', 'Coordination'],
    tags: ['Community', 'Event Planning', 'Leadership', 'Organization', 'Project Management'],
    image: { alt: '', name: 'plan-community-event' },
    link: 'https://blog.obumnwabude.com/how-to-plan-your-community-event',
    publishedOn: 'Hashnode',
  },
  {
    title: 'Grow a Tech Community',
    date: { month: 5, year: 2022 },
    readTime: '4 min read',
    category: 'Communities',
    description:
      "Grow a tech community because you want to mentor people (where you can). You will impact people's lives and become a leader.",
    longDescription:
      'A leadership guide on scaling a tech community from a small group to a thriving, self-sustaining ecosystem. Focuses on mentorship culture, recruiting volunteer leaders, retaining active members, and creating value loops that attract newcomers.',
    keyTakeaways: [
      'Building a mentorship-first culture where experienced members actively guide and sponsor newcomers.',
      'Identifying and empowering volunteer co-organizers to distribute leadership and prevent organizer burnout.',
      'Creating feedback loops and value propositions that retain members and attract quality referrals.',
    ],
    topicsCovered: ['Community Growth', 'Mentorship', 'Leadership', 'Retention', 'Culture'],
    tags: ['Community', 'Leadership', 'Mentorship', 'Growth Strategy', 'Engagement'],
    image: { alt: '', name: 'grow-tech-community' },
    link: 'https://blog.obumnwabude.com/grow-a-tech-community',
    publishedOn: 'Hashnode',
  },
  {
    title: '5 things you will Gain from Tech Communities',
    date: { month: 5, year: 2022 },
    readTime: '4 min read',
    category: 'Communities',
    description:
      "Community works for many people and it will work for you too. We are talking of huge benefits you won't find in other places.",
    longDescription:
      'A motivational guide highlighting the tangible and intangible benefits of active participation in tech communities. Covers networking opportunities, skill acceleration through peer learning, access to mentorship, career advancement, and the personal fulfillment of contributing to something larger.',
    keyTakeaways: [
      'Accelerating technical and professional growth through access to mentors, code reviews, and peer collaboration.',
      'Building a professional network that surfaces job opportunities, partnerships, and lifelong relationships.',
      'Gaining confidence and visibility through speaking opportunities, leadership roles, and public recognition.',
    ],
    topicsCovered: ['Community Benefits', 'Networking', 'Professional Growth', 'Mentorship', 'Career'],
    tags: ['Community', 'Networking', 'Career Development', 'Learning', 'Professional Growth'],
    image: { alt: '', name: 'gains-from-communities' },
    link: 'https://blog.obumnwabude.com/5-things-you-will-gain-from-tech-communities',
    publishedOn: 'Hashnode',
  },
  {
    title: '10 Ways to Contribute to Tech communities',
    date: { month: 5, year: 2022 },
    readTime: '7 min read',
    category: 'Communities',
    description:
      'Give back to the community. The active participation of community members is the fuel that fires the life of a given tech community.',
    longDescription:
      'A practical guide listing concrete, low-barrier ways for community members at any skill level to contribute to tech communities. Includes speaking, mentoring, organizing events, creating tutorials, moderating discussions, and maintaining shared resources.',
    keyTakeaways: [
      'Contributing through speaking, writing, and content creation makes your expertise available to broader audiences.',
      'Mentoring and code reviews directly multiply the growth of less experienced community members.',
      'Organizing events, moderating forums, and maintaining shared resources sustain the infrastructure communities depend on.',
    ],
    topicsCovered: ['Contribution Pathways', 'Speaking', 'Mentoring', 'Event Organization', 'Content Creation'],
    tags: ['Community', 'Contribution', 'Volunteerism', 'Leadership', 'Knowledge Sharing'],
    image: { alt: '', name: 'contribute-tech-communities' },
    link: 'https://blog.obumnwabude.com/10-ways-to-contribute-to-tech-communities',
    publishedOn: 'Hashnode',
  },
  {
    title: 'On Tech Community Events',
    date: { month: 5, year: 2022 },
    readTime: '7 min read',
    category: 'Communities',
    description:
      'Community events are moments of bonding and celebration. They are organised to keep the community alive.',
    longDescription:
      'A reflection on the role and importance of events in sustaining tech communities. Explores how in-person and hybrid gatherings deepen relationships, create shared identity, facilitate knowledge exchange, and keep communities energized and connected.',
    keyTakeaways: [
      'Community events create high-trust environments where members bond beyond transactional interactions.',
      'In-person gatherings accelerate collaboration and open doors for partnerships that remote communication cannot replicate.',
      'Regular events maintain community momentum and signal that the group remains active and welcoming.',
    ],
    topicsCovered: ['Community Events', 'Social Bonding', 'Networking', 'Community Momentum', 'Engagement'],
    tags: ['Community', 'Events', 'Engagement', 'Bonding', 'Networking'],
    image: { alt: '', name: 'community-events' },
    link: 'https://blog.obumnwabude.com/on-tech-community-events',
    publishedOn: 'Hashnode',
  },
  {
    title: 'Understand Tech Communities',
    date: { month: 5, year: 2022 },
    readTime: '4 min read',
    category: 'Communities',
    description:
      'A primer on what tech communities actually are: self-organised groups of people who share (or want to share) digital skills, built on peer learning, mentorship, and inclusive governance rather than institutional hierarchy.',
    longDescription:
      'An introductory primer defining what tech communities are, their structure, core values, and role in the broader tech ecosystem. Explains how communities provide safe spaces for learning, peer support, and collective problem-solving.',
    keyTakeaways: [
      'Tech communities are self-organized groups united by shared learning interests and professional goals.',
      'Communities provide psychological safety and peer support that traditional institutional learning cannot.',
      'Healthy communities balance openness to newcomers with quality standards and inclusive governance.',
    ],
    topicsCovered: ['Community Definition', 'Community Structure', 'Community Values', 'Inclusivity', 'Governance'],
    tags: ['Community', 'Fundamentals', 'Culture', 'Organization', 'Learning'],
    image: { alt: '', name: 'understanding-tech-communities' },
    link: 'https://blog.obumnwabude.com/understanding-tech-communities',
    publishedOn: 'Hashnode',
  },
  {
    title: 'Understand Serverless Architecture',
    date: { month: 2, year: 2022 },
    readTime: '8 min read',
    category: 'Architectures',
    description:
      'A primer on serverless computing: how function-as-a-service platforms let you ship business logic without provisioning servers, why pay-per-execution and auto-scaling change the cost model, and the trade-offs (cold starts, vendor lock-in) to weigh before adopting it.',
    longDescription:
      'An architectural primer on serverless computing models that offload infrastructure management to cloud providers. Contrasts function-as-a-service platforms with traditional server provisioning, explaining cost efficiency, auto-scaling, and operational simplification.',
    keyTakeaways: [
      'Serverless platforms abstract server management, allowing developers to focus on business logic and event handlers.',
      'Automatic horizontal scaling and pay-per-execution pricing reduce operational overhead and lower infrastructure costs.',
      'Cold start latencies and vendor lock-in are design trade-offs to evaluate before adopting serverless architectures.',
    ],
    topicsCovered: ['FaaS', 'Cloud Computing', 'Auto-Scaling', 'Cost Optimization', 'Infrastructure'],
    tags: ['Serverless', 'Architecture', 'Cloud', 'Microservices', 'DevOps'],
    image: { alt: '', name: 'serverless-architecture', png: true },
    link: 'https://keepdeploying.com/67bbbcd7ddd6',
    publishedOn: 'Keep Deploying',
  },
  {
    title: 'How To Build Flutter Form for Managing Questions',
    date: { month: 2, year: 2022 },
    readTime: '6 min read',
    category: '#Flutter',
    description:
      'Build a dynamic Flutter question form: add and remove rows without losing internal state, validate fields in real time with visual error hints, and coordinate multiple controllers so the whole form stays in sync as users type.',
    longDescription:
      'A practical tutorial on building dynamic question forms in Flutter with real-time validation and user feedback. Demonstrates handling form state, responding to user input changes, and managing collections of repeated form fields.',
    keyTakeaways: [
      'Building dynamic form fields that add and remove rows without losing internal state.',
      'Implementing real-time field validation with visual error indicators that guide user corrections.',
      'Managing complex form state through controllers and listeners that coordinate multiple inputs.',
    ],
    topicsCovered: ['Form Fields', 'Validation', 'State Management', 'User Feedback', 'Dynamic Forms'],
    tags: ['Flutter', 'Forms', 'Dart', 'UI', 'User Input'],
    image: { alt: '', name: 'flutter-form' },
    link: 'https://dev.to/obumnwabude/how-to-build-a-flutter-form-for-managing-questions-and-their-answers-4h4l',
    publishedOn: 'DEV',
  },
  {
    title: 'How I first perceived TEDx',
    date: { month: 12, year: 2020 },
    readTime: '10 min read',
    category: 'Stories',
    description:
      'A personal reflection on why TEDx keeps pulling me in: local speakers, world-class ideas, and the specific feeling of walking out of a talk holding a thought that reshapes something you were already carrying.',
    longDescription:
      'A personal reflection on the transformative impact of attending TEDx events. Explores why ideas worth spreading resonate deeply and how local TEDx conferences provide accessible platforms for discovering inspiring talks and building a culture of intellectual curiosity.',
    keyTakeaways: [
      'TEDx brings global-quality talks to local audiences with speakers from your own community.',
      'Attending events with "ideas worth spreading" broadens perspective and creates meaningful connections.',
      'Local TEDx events foster a culture of learning and intellectual exchange at scale.',
    ],
    topicsCovered: ['TED Talks', 'Ideas Worth Spreading', 'Public Speaking', 'Community Learning'],
    tags: ['TEDx', 'Personal Growth', 'Ideas', 'Events', 'Learning', 'Inspiration'],
    image: { alt: 'Obum attending TEDx Ikenegbu', name: 'tedx-perception' },
    link: 'https://stories.obumnwabude.com/2f0ec5830702',
    publishedOn: 'Medium',
  },
  {
    title: 'Becoming a Developer',
    date: { month: 8, year: 2020 },
    readTime: '10 min read',
    category: 'Stories',
    description:
      'The full arc of how I became a developer: secondary school beginnings, scholarship acceptances, first shipped projects, volunteer work with student communities, and the eventual step into organising the kinds of events I used to attend.',
    longDescription:
      "A comprehensive career narrative tracing the author's path from secondary school through scholarships, hands-on project building, volunteer contributions, community involvement, and event organization. Illustrates how multiple foundational experiences combine to shape a complete developer identity.",
    keyTakeaways: [
      'Developer identity grows through a combination of formal learning, hands-on projects, and community contribution.',
      'Scholarships and mentorship programs provide critical access and guidance during early career stages.',
      'Community involvement, event organizing, and volunteering amplify impact and deepen technical understanding.',
    ],
    topicsCovered: ['Career Path', 'Scholarships', 'Project Building', 'Community Involvement', 'Mentorship'],
    tags: ['Career', 'Developer Journey', 'Learning', 'Community', 'Growth'],
    image: { alt: 'Congratulatory Email from GDSC', name: 'developer-story' },
    link: 'https://stories.obumnwabude.com/1d5d0a7462e',
    publishedOn: 'Medium',
  },
  {
    title: 'Making GitHub-Invite',
    date: { month: 6, year: 2020 },
    category: 'Stories',
    readTime: '10 min read',
    description:
      'The story of building GitHub-Invite: why the ask first sounded pointless (why not just paste invitations manually?), the two realisations that changed my mind, and what it took to ship a small tool that quietly saved organisers hours per cohort.',
    longDescription:
      "A product story detailing the conception and execution of GitHub-Invite, a tool that solves a practical problem in collaborative development. Documents the author's journey from initial skepticism to building a solution that streamlines a common workflow.",
    keyTakeaways: [
      "Skepticism about a problem's worth can be overcome by recognizing genuine friction in real workflows.",
      'Building tools for a specific pain point creates immediate value and user satisfaction.',
      'Side projects often arise from solving your own challenges and sharing solutions with the community.',
    ],
    topicsCovered: ['Product Development', 'Developer Tools', 'GitHub Integration', 'Problem Solving'],
    tags: ['GitHub', 'Project', 'Tool Building', 'Development', 'Open Source'],
    image: {
      alt: 'Screenshot of Successful Invitation in GitHub Invite',
      name: 'making-github-invite',
    },
    link: 'https://stories.obumnwabude.com/fb7e06641d54',
    publishedOn: 'Medium',
  },
  {
    title: 'Taking Part in ECX #30DaysOfCode',
    date: { month: 4, year: 2020 },
    category: 'Stories',
    readTime: '9 min read',
    description:
      'A retrospective on completing the ECX #30DaysOfCode backend track during the COVID lockdown: 30 mentor-set tasks in 30 days, a public leaderboard that kept everyone honest, and the way a daily challenge structures an otherwise shapeless week.',
    longDescription:
      'A retrospective on participating in the ECX #30DaysOfCode challenge during the COVID-19 pandemic. Chronicles the daily discipline of completing mentor-assigned tasks across different learning tracks and competing on the leaderboard while building community connection during isolation.',
    keyTakeaways: [
      'Structured daily coding challenges with mentor guidance accelerate skill building and maintain motivation.',
      'Leaderboards and peer competition create healthy accountability and foster community engagement.',
      'During isolation, remote coding challenges provide structure, purpose, and meaningful connection.',
    ],
    topicsCovered: ['Coding Challenge', 'Mentorship', 'Daily Discipline', 'Community Competition'],
    tags: ['ECX', '30DaysOfCode', 'Challenge', 'Learning', 'Community', 'Mentorship'],
    image: {
      alt: 'Day 4 flyer of ECX #30DaysOfCode',
      name: 'ecx-30daysofcode',
    },
    link: 'https://stories.obumnwabude.com/d8d011225e7f',
    publishedOn: 'Medium',
  },
  {
    title: 'My #GADS Story',
    date: { month: 2, year: 2020 },
    category: 'Stories',
    readTime: '6 min read',
    description:
      'How the Google Africa Developer Scholarship shaped my early career: full access to Pluralsight, the Enugu GADS meetup community, and the moment those two things compounded into the confidence to build and share work in public.',
    longDescription:
      'A personal reflection on the impact of the Google Africa Developer Scholarship program. Chronicles access to premium learning resources, participation in local meetups, networking with peers, and how the scholarship accelerated skill development during early career growth.',
    keyTakeaways: [
      'Scholarships provide access to professional development resources and communities that would otherwise be economically inaccessible.',
      'Peer learning and local meetups create accountability and social proof that reinforce solo online learning.',
      'Early-stage investment in developer education multiplies impact when recipients become mentors and community leaders.',
    ],
    topicsCovered: [
      'Scholarship Impact',
      'Learning Resources',
      'Community Participation',
      'Career Growth',
      'Mentorship',
    ],
    tags: ['GADS', 'Scholarship', 'Career', 'Learning', 'Africa'],
    image: { alt: 'Picture of GADS Enugu Community', name: 'gads-story' },
    link: 'https://stories.obumnwabude.com/e64d29d93768',
    publishedOn: 'Medium',
  },
];
