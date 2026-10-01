import type { CommunityEvent } from '@/types';

export const community: CommunityEvent[] = [
  {
    title: 'Deploy your AI with Agent Studio in Google Cloud',
    date: { month: 5, year: 2026 },
    description:
      '@ #BuildwithAI Bauchi. We explored the new Agent Studio in Google Cloud and deployed an AI Chatbot with Cloud Run.',
    longDescription:
      'A hands-on Google Developer Groups workshop delivered for #BuildwithAI Bauchi. Focused on orchestrating autonomous generative AI agents using Google Cloud Agent Studio. Guided participants through configuring reasoning engines, wiring custom API tools to LLMs, managing system prompts, and packaging the resulting conversational agent in Docker for serverless deployment on Google Cloud Run.',
    eventSeries: '#BuildwithAI',
    location: 'Bauchi, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Configuring Google Cloud Agent Studio and reasoning engines',
      'Prompt engineering with structured JSON schema responses',
      'Wiring custom OpenAPI and database tool declarations to Gemini',
      'Containerizing conversational agents and deploying to Cloud Run',
    ],
    keyTakeaways: [
      'How to build deterministic tool calling flows on top of non-deterministic LLMs.',
      'Containerizing agent runtime microservices for scalable serverless scaling on Google Cloud Run.',
      'Securing production AI deployments using Google Cloud IAM and service accounts.',
    ],
    resources: {
      codelab: 'https://www.skills.google/paths/1282/course_templates/1120/labs/532046',
    },
    image: { alt: 'Obum at Event', name: 'obum-bwai-bauchi-26' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://www.skills.google/paths/1282/course_templates/1120/labs/532046',
        title: 'Google Skills Lab',
      },
    ],
    tags: ['Workshop', 'AI', 'Google Cloud'],
    expandedTags: ['Workshop', 'AI', 'Google Cloud', 'Agent Studio', 'Cloud Run'],
  },
  {
    title: 'Create your AI with RAG in Google Cloud',
    date: { month: 4, year: 2026 },
    description: '@ #BuildwithAI Abakaliki. We explored grounding techniques in AI applications.',
    longDescription:
      'A technical workshop for GDG Abakaliki exploring practical Retrieval-Augmented Generation (RAG) architectures with Google Cloud and the Gemini API. Demonstrated how to overcome LLM hallucinations by grounding generative models with private domain documents, vector embeddings, and Google Cloud Vertex AI Search.',
    eventSeries: '#BuildwithAI',
    location: 'Abakaliki, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Fundamentals of LLM hallucinations and vector search grounding',
      'Generating vector embeddings with Vertex AI text-embedding models',
      'Configuring Vertex AI Search indexes and datastores',
      'Executing grounded generation queries with Google Colab notebooks',
    ],
    keyTakeaways: [
      'Grounded responses significantly reduce hallucination rates in enterprise AI workflows.',
      'Understanding semantic chunking strategies for document indexing.',
      'Interpreting grounding attribution metadata returned by the Gemini API.',
    ],
    resources: {
      colabNotebook:
        'https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/gemini/grounding/intro-grounding-gemini.ipynb',
    },
    image: { alt: 'Workshop Session', name: 'obum-bwai-abk-26' },
    actions: [
      {
        icon: 'googlecolab',
        link: 'https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/gemini/grounding/intro-grounding-gemini.ipynb',
        title: 'Google Colab',
      },
    ],
    tags: ['Workshop', 'AI', 'Google Cloud'],
    expandedTags: ['Workshop', 'AI', 'Google Cloud', 'RAG', 'Gemini'],
  },
  {
    title: 'Deploy AIs from Vertex AI Studio',
    date: { month: 4, year: 2026 },
    description:
      '@ #BuildwithAI Ibadan. Explored prompt engineering, system instructions, and deployed AI apps using Vertex AI and Cloud Run.',
    longDescription:
      'An interactive masterclass at GDG Ibadan on operationalizing machine learning models from Vertex AI Studio. Covered multi-modal prompt tuning, system instruction boundaries, parameter tuning (temperature, Top-P, Top-K), and exporting production endpoints to Cloud Run microservices.',
    eventSeries: '#BuildwithAI',
    location: 'Ibadan, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Multi-modal prompt engineering and few-shot calibration in Vertex AI Studio',
      'Structuring system instructions for reliable downstream parsing',
      'Configuring Cloud Run autoscaling, memory thresholds, and concurrency',
      'Monitoring API latency and token utilization metrics',
    ],
    keyTakeaways: [
      'Parameter tuning directly influences model determinism and creative boundaries.',
      'Cloud Run provides an ideal zero-to-scale compute runtime for lightweight AI wrappers.',
    ],
    resources: {
      codelab: 'https://www.skills.google/course_templates/552',
    },
    image: { alt: 'Workshop Session', name: 'obum-bwai-ib-26' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://www.skills.google/course_templates/552',
        title: 'Course Lab',
      },
    ],
    tags: ['Workshop', 'AI', 'Google Cloud'],
    expandedTags: ['Workshop', 'AI', 'Google Cloud', 'Vertex AI', 'Cloud Run'],
  },
  {
    title: 'Soft Skills for Career Development',
    date: { month: 3, year: 2026 },
    description:
      "Spoke at an International Women's Day Abakaliki event on communication, leadership, teamwork, emotional intelligence, and self-management.",
    longDescription:
      'A keynote address presented at the International Women’s Day (IWD) & Women Techmakers celebration in Abakaliki. Shared practical frameworks for engineers to cultivate emotional intelligence, communicate technical concepts with clarity to business stakeholders, manage imposter syndrome, and take ownership of career trajectories.',
    eventSeries: 'Women Techmakers',
    location: 'Abakaliki, Nigeria',
    sessionFormat: 'Keynote',
    curriculum: [
      'Technical communication vs. business stakeholder storytelling',
      'Emotional intelligence and constructive code review etiquette',
      'Managing energy, avoiding burnout, and establishing clear career milestones',
    ],
    keyTakeaways: [
      'Engineering brilliance is amplified exponentially through clear communication.',
      'Cultivating self-management and empathy creates resilient, high-trust engineering teams.',
    ],
    resources: {
      slides: 'https://docs.google.com/presentation/d/1WOp8lvjQ0i4HLCMoh6dnJUiR_rIv72a8LSPK_jpEY8g/edit?usp=sharing',
    },
    image: { alt: 'Event Session', name: 'obum-iwd-wtm-abk-26' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1WOp8lvjQ0i4HLCMoh6dnJUiR_rIv72a8LSPK_jpEY8g/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    tags: ['Speaker', 'IWD'],
    expandedTags: ['Speaker', 'IWD', 'Women Techmakers', 'Career', 'Leadership'],
  },
  {
    title: 'Building Your First AI Agent with Kotlin',
    date: { month: 3, year: 2026 },
    description:
      'Hands-on session in Abakaliki on building an AI agent in Kotlin, covering planning, reasoning, and tool usage with LLMs.',
    longDescription:
      'A deep-dive live coding workshop hosted by the Abakaliki Tech Community exploring autonomous agent creation in Kotlin. Utilizing the JetBrains Koog framework, participants constructed goal-directed autonomous agents that create execution plans, invoke external tools, and loop until objective completion.',
    eventSeries: 'Abakaliki Tech Community',
    location: 'Abakaliki, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Agentic reasoning loops: Plan, Execute, Verify, Reflect',
      'Integrating JetBrains Koog with LLM endpoints on the JVM',
      'Tool definitions and type-safe schema mapping in Kotlin',
    ],
    keyTakeaways: [
      'Kotlin’s type safety and coroutines offer powerful concurrency for orchestrating multi-step AI agents.',
      'Agent planning loops require guardrails and maximum iteration boundaries to ensure reliability.',
    ],
    resources: {
      githubRepo: 'https://www.jetbrains.com/koog/',
    },
    image: { alt: 'Workshop Session', name: 'obum-kotlin-ai-abk-26' },
    actions: [
      {
        icon: 'externallink',
        link: 'https://www.jetbrains.com/koog/',
        title: 'Checkout Koog',
      },
    ],
    tags: ['Workshop', 'AI', 'Android'],
    expandedTags: ['Workshop', 'AI', 'Android', 'Kotlin', 'Koog', 'JetBrains'],
  },
  {
    title: 'Technology, AI, & Education',
    date: { month: 3, year: 2026 },
    description:
      'Delivered a session in AE-FUNAI inspiring students to #BuildwithAI with Google tools and improve their learning approach.',
    longDescription:
      'An inspiring student community session at Alex Ekwueme Federal University Ndufu-Alike (AE-FUNAI) exploring how artificial intelligence is reshaping higher education and developer skill acquisition. Highlighted Google student developer programs, practical prompt design, and personalized learning loops.',
    eventSeries: 'University Outreach',
    location: 'AE-FUNAI, Ebonyi State',
    sessionFormat: 'Talk',
    curriculum: [
      'Harnessing generative AI as a personalized study partner and code tutor',
      'Navigating Google Developer Student Clubs and career pipelines',
      'Critical thinking and validation when leveraging LLMs for coursework',
    ],
    keyTakeaways: [
      'AI tools enhance learning velocity when used as collaborative reasoning sounding boards.',
      'Practical building and portfolio demonstration trump passive consumption.',
    ],
    resources: {
      slides: 'https://docs.google.com/presentation/d/1hVyANVPSPRUXy73JOug896Sl_GZ5x8hfT2ZfZBX3oaQ/edit?usp=sharing',
    },
    image: { alt: 'Speaking Event', name: 'obum-sparklive-aefunai-26' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1hVyANVPSPRUXy73JOug896Sl_GZ5x8hfT2ZfZBX3oaQ/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    tags: ['Speaker', 'AI'],
    expandedTags: ['Speaker', 'AI', 'Education', 'AE-FUNAI', 'Community'],
  },
  {
    title: 'Ethics and AI For Talents',
    date: { month: 12, year: 2025 },
    description: 'Spoke at DevFest Enugu 2025 on responsible AI and ethical considerations for developers.',
    longDescription:
      'A featured talk delivered at DevFest Enugu 2025 examining the critical responsibilities software engineers bear when integrating machine learning models into public software. Covered algorithmic bias, intellectual property considerations, user privacy, and actionable safety guardrails.',
    eventSeries: 'DevFest',
    location: 'Enugu, Nigeria',
    sessionFormat: 'Talk',
    curriculum: [
      'Detecting and mitigating training data bias in generative models',
      'Data privacy principles when transmitting user inputs to external LLM APIs',
      'Implementing safety filters and content moderation layers',
    ],
    keyTakeaways: [
      'Ethical AI is an engineering practice, not just a philosophical concept.',
      'Transparency and user consent are foundational to trustworthy AI software.',
    ],
    resources: {
      slides: 'https://docs.google.com/presentation/d/1BFZ0Pz7SVgCpyA27yZmrAtvkdIa4udmJ2OE-LKaEQhU/edit',
    },
    image: { alt: 'Event Slide', name: 'obum-df-enugu-25' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1BFZ0Pz7SVgCpyA27yZmrAtvkdIa4udmJ2OE-LKaEQhU/edit',
        title: 'Slides',
      },
    ],
    tags: ['Speaker', 'DevFest', 'AI'],
    expandedTags: ['Speaker', 'DevFest', 'AI', 'Ethics', 'Responsible AI'],
  },
  {
    title: 'DevFest Nsukka 2025',
    date: { month: 12, year: 2025 },
    description:
      'Anchored an interactive session on "Firebase, Flutter, and Gemini" to the student community with a Codelab on building a crossword puzzle.',
    longDescription:
      "An interactive codelab workshop delivered at DevFest Nsukka 2025 demonstrating full-stack app development by uniting Flutter on the frontend, Firebase on the backend, and Google's Gemini API for dynamic AI crossword puzzle generation.",
    eventSeries: 'DevFest',
    location: 'Nsukka, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Generating dynamic puzzle clues and grids via the Gemini API',
      'Real-time multi-player crossword state synchronization with Firebase',
      'Building adaptive Flutter puzzle UI with smooth tile animations',
    ],
    keyTakeaways: [
      'Combining Flutter and Firebase enables rapid end-to-end prototyping of AI-powered consumer apps.',
      'Prompting Gemini for structured JSON produces reliable game assets in real time.',
    ],
    resources: {
      codelab: 'https://goo.gle/solution-crossword',
    },
    image: { alt: 'Event Photo', name: 'obum-df-nsk-25' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://goo.gle/solution-crossword',
        title: 'Codelab',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Flutter', 'Firebase', 'Gemini'],
  },
  {
    title: 'DevFest Abuja 2025',
    date: { month: 11, year: 2025 },
    description: 'Spoke on "Leveraging BigQuery for Business Data in Google Cloud" to a wide tech-savvy audience.',
    longDescription:
      'A technical presentation delivered to enterprise developers and data professionals at DevFest Abuja 2025. Unpacked how organizations can transform raw transactional records into business intelligence using serverless Google Cloud BigQuery, scheduled analytical queries, and BigQuery ML.',
    eventSeries: 'DevFest',
    location: 'Abuja, Nigeria',
    sessionFormat: 'Talk',
    curriculum: [
      'Architecting partitioned and clustered BigQuery datasets for cost optimization',
      'Writing high-performance SQL analytical queries across petabyte-scale data',
      'Training predictive machine learning models directly inside BigQuery using SQL',
    ],
    keyTakeaways: [
      'Data partitioning and clustering drastically reduce BigQuery query scan costs.',
      'BigQuery ML eliminates data migration overhead by keeping training inside the data warehouse.',
    ],
    resources: {
      codelab: 'https://www.cloudskillsboost.google/course_templates/552',
    },
    image: { alt: 'Event Photo', name: 'obum-df-abj-25' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://www.cloudskillsboost.google/course_templates/552',
        title: 'Codelab',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'BigQuery', 'Google Cloud', 'Data'],
  },
  {
    title: 'DevFest Owerri 2025',
    date: { month: 11, year: 2025 },
    description:
      'Anchored a workshop session on "Building with Web3 in Flutter", exploring Authentication and Smart Contract backends.',
    longDescription:
      'A hands-on developer workshop at DevFest Owerri 2025 walking mobile engineers through the complete pipeline of integrating decentralized Web3 protocols into native Flutter mobile applications. Covered wallet connection protocols, signature requests, and reading/writing smart contract state.',
    eventSeries: 'DevFest',
    location: 'Owerri, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Deep linking and mobile wallet connect standards (WalletConnect v2)',
      'Interacting with smart contracts using web3dart and Solana Dart SDKs',
      'Managing gas estimation and transaction state reactively in Flutter widgets',
    ],
    keyTakeaways: [
      'Building mobile-first Web3 user experiences with seamless biometric wallet signing.',
      'Handling blockchain latency gracefully with optimistic UI updates.',
    ],
    resources: {
      githubRepo: 'https://github.com/keepdeploying/web3-in-flutter',
    },
    image: { alt: 'Event Photo', name: 'obum-df-owerri-25' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://github.com/keepdeploying/web3-in-flutter',
        title: 'Workshop',
      },
    ],
    tags: ['Workshop', 'GDG'],
    expandedTags: ['Workshop', 'GDG', 'DevFest', 'Web3', 'Flutter', 'Smart Contracts'],
  },
  {
    title: 'DevFest Kaduna 2025',
    date: { month: 10, year: 2025 },
    description:
      'Anchored a workshop on "Create your AI with RAG in Google Cloud", explaining and showcasing grounding.',
    longDescription:
      'A technical workshop at DevFest Kaduna 2025 focusing on grounding Gemini models with private enterprise knowledge bases. Attendees practiced configuring vector stores, generating text embeddings, and executing semantic searches.',
    eventSeries: 'DevFest',
    location: 'Kaduna, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Vector databases and semantic similarity search mechanisms',
      'Google Cloud Vertex AI Search integration with Gemini',
      'Evaluating retrieval accuracy and response relevance',
    ],
    keyTakeaways: [
      'How to ground generative AI responses on proprietary documentation.',
      'Evaluating token economy and cost trade-offs in RAG pipelines.',
    ],
    resources: {
      colabNotebook: 'https://github.com/GoogleCloudPlatform/generative-ai/tree/main/rag-grounding',
    },
    image: { alt: 'Event Photo', name: 'obum-df-kd-25' },
    actions: [
      {
        icon: 'googlecolab',
        link: 'https://github.com/GoogleCloudPlatform/generative-ai/tree/main/rag-grounding',
        title: 'Google Colab',
      },
    ],
    tags: ['Workshop', 'GDG'],
    expandedTags: ['Workshop', 'GDG', 'DevFest', 'AI', 'RAG', 'Google Cloud'],
  },
  {
    title: 'DevFest Onitsha 2025',
    date: { month: 10, year: 2025 },
    description:
      'Anchored a Workshop on "Flutter UIs: Adaptive, Responsive, and Pixel-Perfect." stressing on how and why we should build good UIs.',
    longDescription:
      'A practical workshop delivered at DevFest Onitsha 2025 emphasizing responsive and adaptive mobile UI architecture in Flutter. Taught developers how to structure layouts that scale effortlessly across phones, foldable devices, tablets, and web browsers using LayoutBuilder, MediaQuery, and adaptive widgets.',
    eventSeries: 'DevFest',
    location: 'Onitsha, Nigeria',
    sessionFormat: 'Workshop',
    curriculum: [
      'Responsive design principles with LayoutBuilder and MediaQuery',
      'Adaptive controls switching automatically between Cupertino and Material widgets',
      'Micro-animations and pixel-perfect design system enforcement',
    ],
    keyTakeaways: [
      'Building truly adaptive layouts that leverage screen real estate on tablets and desktops.',
      'Achieving 60/120fps fluid performance through optimized widget rebuild scopes.',
    ],
    resources: {
      githubRepo: 'https://github.com/keepdeploying/flutter_ui_workshop',
    },
    image: { alt: 'Event Photo', name: 'obum-df-onitsha-25' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://github.com/keepdeploying/flutter_ui_workshop',
        title: 'Workshop',
      },
    ],
    tags: ['Workshop', 'GDG'],
    expandedTags: ['Workshop', 'GDG', 'DevFest', 'Flutter', 'UI Design', 'Responsive'],
  },
  {
    title: '#BuildwithAI Spella Hub Abakaliki 2025',
    date: { month: 9, year: 2025 },
    description:
      'Trained the Developer Students of Spella Hub on using Gemini, Firebase Studio, and other AI tools to improve their development flow.',
    longDescription:
      'A developer skills workshop conducted at Spella Hub focusing on integrating AI-powered tools into modern development workflows. Students learned practical techniques for leveraging Gemini API capabilities, Firebase Studio for rapid backend setup, and complementary AI tools to accelerate project development.',
    curriculum: [
      'Getting started with Gemini API and prompt engineering basics',
      'Setting up Firebase Studio for rapid prototyping',
      'Integrating multiple AI tools into development pipelines',
      'Practical exercises building AI-enhanced applications',
    ],
    keyTakeaways: [
      'AI tools significantly reduce development iteration time when integrated early in the workflow.',
      'Combining Firebase and Gemini enables rapid full-stack AI application development.',
    ],
    sessionFormat: 'Workshop',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1KDWc1Cbo868UPq0j7rgPifkEB5Vv8ovvCr320Q9Swmo/edit?usp=sharing',
    },
    image: { alt: 'Event Photo', name: 'obum-bwai-spella-hub-abk-25' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1KDWc1Cbo868UPq0j7rgPifkEB5Vv8ovvCr320Q9Swmo/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    tags: ['Workshop', 'AI'],
    expandedTags: ['Workshop', 'AI', 'Gemini', 'Firebase', 'Developer Tools'],
  },
  {
    title: '#BuildwithAI Port Harcourt 2025',
    date: { month: 6, year: 2025 },
    description:
      'Anchored a Workshop session on "Build Multi-Agent Gen AI Systems with Google Cloud." using a codelab.',
    longDescription:
      'A hands-on workshop exploring the design and implementation of multi-agent AI systems using Google Cloud infrastructure. Participants learned how to orchestrate multiple specialized agents to solve complex problems through coordinated reasoning and delegation patterns.',
    curriculum: [
      'Agent architecture patterns and communication flows',
      'Orchestrating multi-agent workflows on Google Cloud',
      'Delegation strategies and task decomposition',
      'Implementing robust agent monitoring and error handling',
    ],
    keyTakeaways: [
      'Multi-agent systems decompose complex problems into specialized, composable units.',
      'Google Cloud provides serverless primitives ideal for scaling independent agent workloads.',
    ],
    sessionFormat: 'Workshop',
    resources: {
      codelab: 'https://goo.gle/Multi-Agent-Systems',
    },
    image: { alt: 'Event Photo', name: 'obum-bwai-ph-25' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://goo.gle/Multi-Agent-Systems',
        title: 'Codelab',
      },
    ],
    tags: ['Workshop', 'AI'],
    expandedTags: ['Workshop', 'AI', 'Multi-Agent Systems', 'Google Cloud', 'Orchestration'],
  },
  {
    title: '#BuildwithAI Ogbomoso 2025',
    date: { month: 5, year: 2025 },
    description:
      'Trained the audience on generating Audio with multimodal Gemini using a Colab Notebook. Walked through model selection, prompt shaping, and playback in-notebook.',
    longDescription:
      'A hands-on workshop demonstrating audio generation capabilities using Google AI Gemini in a multimodal context. Participants worked through Colab notebooks learning how to generate, process, and integrate synthetic audio into applications.',
    curriculum: [
      'Multimodal capabilities in Gemini for audio generation',
      'Audio processing and synthesis techniques',
      'Building audio-based user experiences',
      'Practical exercises with Google Colab notebooks',
    ],
    keyTakeaways: [
      'Gemini supports both text and audio generation for rich multimodal applications.',
      'Colab notebooks enable rapid experimentation with AI capabilities without local setup.',
    ],
    sessionFormat: 'Workshop',
    resources: {
      colabNotebook:
        'https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/audio/speech/use-cases/storytelling/storytelling.ipynb',
    },
    image: { alt: 'Event Photo', name: 'obum-bwai-ogbomoso-25' },
    actions: [
      {
        icon: 'googlecolab',
        link: 'https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/audio/speech/use-cases/storytelling/storytelling.ipynb',
        title: 'Google Colab',
      },
    ],
    tags: ['Workshop', 'AI'],
    expandedTags: ['Workshop', 'AI', 'Gemini', 'Audio Generation', 'Multimodal'],
  },
  {
    title: '#BuildwithAI Onitsha 2025',
    date: { month: 5, year: 2025 },
    description:
      'Training Session where participants explored Firebase Studio and then used CloudSkillsBoost for Intro to Vertex AI.',
    longDescription:
      'A structured learning experience combining Firebase Studio for real-time backend development with Google Cloud Vertex AI for machine learning model deployment. Developers gained hands-on experience configuring managed ML pipelines and serving predictions at scale.',
    curriculum: [
      'Firebase Studio for rapid backend prototyping',
      'Vertex AI model training and evaluation workflows',
      'Deploying ML models as scalable endpoints',
      'Monitoring model performance and inference costs',
    ],
    sessionFormat: 'Workshop',
    keyTakeaways: [
      'Firebase and Vertex AI integrate seamlessly for full-stack AI applications.',
      'Managed ML services eliminate infrastructure complexity, letting developers focus on data and models.',
    ],
    resources: {
      codelab: 'https://www.cloudskillsboost.google/course_sessions/24650253/labs/604755',
    },
    image: { alt: 'Event Photo', name: 'obum-bwai-onitsha-25' },
    actions: [
      {
        icon: 'googledevelopers',
        link: 'https://www.cloudskillsboost.google/course_sessions/24650253/labs/604755',
        title: 'Codelab',
      },
    ],
    tags: ['Workshop', 'AI'],
    expandedTags: ['Workshop', 'AI', 'Firebase', 'Vertex AI', 'Machine Learning'],
  },
  {
    title: '#BuildwithAI Abakaliki 2025',
    date: { month: 5, year: 2025 },
    description:
      'Training Session where participants explored Firebase Studio and then used Google Colab for Intro to Gemma 2.0 Flash',
    longDescription:
      'A hands-on training session combining Firebase Studio backend development with an introduction to Gemma 2.0 Flash, Google latest lightweight language model. Attendees learned to build full-stack applications with fast, efficient AI inference.',
    curriculum: [
      'Firebase Studio setup and real-time data synchronization',
      'Gemma 2.0 Flash model architecture and capabilities',
      'Running Gemma models locally in Google Colab',
      'Building cost-effective AI applications with lightweight models',
    ],
    sessionFormat: 'Workshop',
    keyTakeaways: [
      'Gemma 2.0 Flash delivers excellent quality-to-latency trade-offs for edge and mobile deployment.',
      'Combining lightweight models with Firebase enables efficient real-time AI features.',
    ],
    resources: {
      colabNotebook:
        'https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/gemini/getting-started/intro_gemini_2_0_flash.ipynb',
    },
    image: { alt: 'Obum Assisting', name: 'obum-bwai-abk-25' },
    actions: [
      {
        icon: 'googlecolab',
        link: 'https://colab.research.google.com/github/GoogleCloudPlatform/generative-ai/blob/main/gemini/getting-started/intro_gemini_2_0_flash.ipynb',
        title: 'Google Colab',
      },
    ],
    tags: ['Workshop', 'AI'],
    expandedTags: ['Workshop', 'AI', 'Gemma', 'Firebase', 'Language Models'],
  },
  {
    title: '#BuildwithAI Calabar 2025',
    date: { month: 3, year: 2025 },
    description: 'Training Session on multiple Google Colab Notebooks with Intro to Gemma being the first.',
    longDescription:
      'A comprehensive training session introducing participants to Google AI models through interactive Colab notebooks. Starting with Gemma fundamentals, attendees progressed through practical examples demonstrating model capabilities and integration techniques.',
    curriculum: [
      'Introduction to Gemma model family and capabilities',
      'Running models in Google Colab notebooks',
      'Prompt engineering and model configuration',
      'Building practical AI applications with Google models',
    ],
    keyTakeaways: [
      'Google Colab provides free compute and seamless model access for learning and experimentation.',
      'Gemma models offer accessible entry points into modern generative AI.',
    ],
    resources: {
      colabNotebook: 'https://goo.gle/gemini-flash-intro',
    },
    image: { alt: 'Obum on Stage', name: 'obum-bwai-cal-25' },
    actions: [
      {
        icon: 'googlecolab',
        link: 'https://goo.gle/gemini-flash-intro',
        title: 'Google Colab',
      },
    ],
    tags: ['Workshop', 'AI'],
    expandedTags: ['Workshop', 'AI', 'Gemma', 'Colab', 'Introduction'],
    sessionFormat: 'Workshop',
  },
  {
    title: 'DevFest Guinee 2024',
    date: { month: 12, year: 2024 },
    description:
      'Spoke in French about the various ways by which AI improves user experience in mobile applications. Covered on-device personalization, intelligent defaults, and contextual UI moments.',
    longDescription:
      'A conference talk presented in French exploring the intersection of artificial intelligence and mobile user experience design. Discussed how AI transforms app interactions, from personalization to predictive interfaces.',
    curriculum: [
      'AI-driven personalization in mobile apps',
      'Predictive and adaptive user interfaces',
      'On-device vs. cloud AI trade-offs',
      'User experience best practices for AI features',
    ],
    sessionFormat: 'Talk',
    keyTakeaways: [
      'AI enables mobile apps to anticipate user needs and adapt interactions dynamically.',
      'Thoughtful AI integration improves rather than complicates user experience.',
    ],
    resources: {
      recording: 'https://youtu.be/rAt9UMLk0bs',
    },
    image: { alt: 'First Slide', name: 'obum-df24-guinee' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/rAt9UMLk0bs',
        title: 'Recording',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mr5n7u/',
        title: 'About',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'AI', 'Mobile UX', 'DevFest'],
  },
  {
    title: 'Learn About Azure Serverless Functions',
    date: { month: 12, year: 2024 },
    description:
      'Explained when and how you can set up serverless compute with Azure. Covered Azure Functions triggers, deployment options, and where serverless makes sense vs where it does not.',
    longDescription:
      'An educational session on Azure Functions demonstrating serverless compute patterns and when to apply them. Covered deployment strategies, scaling behavior, and cost optimization for event-driven workloads.',
    curriculum: [
      'Serverless computing fundamentals and use cases',
      'Azure Functions runtime and triggers',
      'Deploying and managing Azure Functions',
      'Pricing models and cost optimization strategies',
    ],
    sessionFormat: 'Talk',
    keyTakeaways: [
      'Serverless functions reduce operational overhead and scale automatically with demand.',
      'Selecting the right trigger type aligns compute cost with actual usage patterns.',
    ],
    resources: {
      recording: 'https://youtu.be/qYfQhgpWuKA',
    },
    image: { alt: 'Recording Screenshot', name: 'learn-azure-functions' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/qYfQhgpWuKA',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'MLSA'],
    expandedTags: ['Organizer', 'MLSA', 'Azure', 'Serverless', 'Cloud Computing'],
  },
  {
    title: 'DevFest Enugu 2024',
    date: { month: 12, year: 2024 },
    description:
      'Handled the Community Event Opening Note on Culture and Technology. Framed how local culture shapes how communities adopt and shape technology.',
    longDescription:
      'A keynote opening remarks delivered at DevFest Enugu 2024 reflecting on the intersection of technology and cultural values in engineering communities. Set the tone for the conference by exploring shared responsibility in technology advancement.',
    curriculum: [
      'Technology as a cultural force in modern society',
      'Building inclusive and sustainable engineering communities',
      'Bridging technical innovation with human values',
    ],
    sessionFormat: 'Keynote',
    keyTakeaways: [
      'Engineering decisions carry cultural and social implications beyond technical metrics.',
      'Communities thrive when technology is developed with intention and cultural awareness.',
    ],
    resources: {
      recording: 'https://youtu.be/3HG1kEwbn9Y',
    },
    image: { alt: 'Obum and SauceCode on Stage', name: 'obum-df24-enugu' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/3HG1kEwbn9Y',
        title: 'Recording',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Culture', 'Technology'],
  },
  {
    title: 'DevFest Calabar 2024',
    date: { month: 12, year: 2024 },
    description:
      'Spoke on "Expert Tips for Flutter UI Performance". Covered frame rate targets, rebuild scope, and profiling to hit smooth 60/120fps.',
    longDescription:
      'A technical presentation exploring advanced optimization techniques for Flutter UI rendering. Covered frame rate optimization, widget rebuild efficiency, and memory profiling to achieve smooth 60/120 fps performance.',
    curriculum: [
      'Flutter rendering pipeline and frame rate targets',
      'Identifying and fixing widget rebuild bottlenecks',
      'Memory profiling and leak detection',
      'Animation performance and Skia optimization',
    ],
    sessionFormat: 'Talk',
    keyTakeaways: [
      'Minimizing widget rebuild scope is the single highest-impact optimization for UI performance.',
      'DevTools profiling uncovers non-obvious performance bottlenecks in complex UIs.',
    ],
    resources: {
      recording: 'https://youtu.be/TYoEo6ghwJ0',
    },
    image: { alt: 'First Slide', name: 'obum-df24-calabar' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/TYoEo6ghwJ0',
        title: 'Recording',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/m88tfc/',
        title: 'About',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Flutter', 'Performance', 'UI Optimization'],
  },
  {
    title: 'DevFest Ogbomoso 2024',
    date: { month: 11, year: 2024 },
    description:
      'Spoke on "How to use Google AI for A/B Testing". Explored using generative AI to accelerate hypothesis generation, variant creation, and result analysis.',
    longDescription:
      'A Talk on leveraging Google AI tools to design, analyze, and optimize A/B testing experiments. Explored how generative AI can accelerate hypothesis generation, variant creation, and statistical analysis workflows.',
    curriculum: [
      'A/B testing fundamentals and statistical rigor',
      'Generating test variants with Google AI',
      'Analyzing results with AI-powered insights',
      'Ethical considerations in experimentation',
    ],
    sessionFormat: 'Talk',
    keyTakeaways: [
      'AI accelerates the hypothesis-to-insight cycle in experimentation workflows.',
      'Maintaining statistical validity is critical even when using automated testing tools.',
    ],
    resources: {
      slides: 'https://docs.google.com/presentation/d/1x7IqC66YSjiwJi-aHmJzcu6GqVhKgfoHggPf3FQHlXE/edit?usp=sharing',
    },
    image: { alt: 'Obum on Stage', name: 'obum-df24-ogbomoso' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1x7IqC66YSjiwJi-aHmJzcu6GqVhKgfoHggPf3FQHlXE/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mjteas/',
        title: 'About',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'AI', 'A/B Testing', 'Product Development'],
  },
  {
    title: 'DevFest Kaduna 2024',
    date: { month: 11, year: 2024 },
    description:
      'Spoke on "How AI Improves User Experience on Mobile". Covered personalization, contextual recommendations, on-device AI trade-offs, and privacy-first patterns.',
    longDescription:
      'An exploration of how artificial intelligence transforms mobile app user experiences through personalization, contextual recommendations, and intelligent automation. Discussed on-device AI trade-offs and privacy-first approaches.',
    curriculum: [
      'On-device vs. cloud AI architectures for mobile',
      'Personalization algorithms and recommendation systems',
      'Privacy-preserving AI inference on mobile',
      'User experience patterns for AI-powered features',
    ],
    keyTakeaways: [
      'Mobile AI delivers personalized experiences while respecting user privacy through on-device processing.',
      'Well-designed AI features feel natural and enhance rather than complicate user flows.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1vl9LLHz4Pl0P4IDnPgOzcmve5X20kBat7gXu10K5CmM/edit?usp=sharing',
    },
    image: { alt: 'Obum on Stage', name: 'obum-df24-kaduna' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1vl9LLHz4Pl0P4IDnPgOzcmve5X20kBat7gXu10K5CmM/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/m4k5p5/',
        title: 'About',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'AI', 'Mobile', 'User Experience'],
  },
  {
    title: 'DevFest Lagos 2024',
    date: { month: 11, year: 2024 },
    description:
      'Carried out a workshop on "How to Build Android Bubbles in Flutter". Walked through the conversation_bubbles plugin, notification metadata, and shortcut wiring.',
    longDescription:
      'A hands-on workshop demonstrating Android Bubbles implementation in Flutter. Covered Material Design bubble patterns, thread management, and creating rich chat experiences with floating conversation bubbles.',
    curriculum: [
      'Android Bubbles API and Material Design standards',
      'Building thread-aware chat interfaces in Flutter',
      'Implementing floating bubble UI patterns',
      'Handling user interactions in bubble context',
    ],
    sessionFormat: 'Workshop',
    keyTakeaways: [
      'Bubbles enable users to continue conversations without leaving their current app context.',
      'Material Design bubbles maintain visual consistency across Android versions.',
    ],
    resources: {
      githubRepo: 'https://github.com/keepdeploying/bubbles_in_flutter_workshop',
      slides: 'https://docs.google.com/presentation/d/18xiImzG4FS3r9rlFCjtFuDSWCajgQO9t3s7NDr-jqoI/edit?usp=sharing',
    },
    image: { alt: 'Obum on Stage', name: 'obum-df24-lagos' },
    actions: [
      {
        icon: 'github',
        link: 'https://github.com/keepdeploying/bubbles_in_flutter_workshop',
        title: 'Workshop Repo',
      },
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/18xiImzG4FS3r9rlFCjtFuDSWCajgQO9t3s7NDr-jqoI/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Flutter', 'Android', 'Bubbles'],
  },
  {
    title: 'GDEs Panel - DevFest Lagos',
    date: { month: 11, year: 2024 },
    description:
      'Was in the Panel of Dart & Flutter GDEs in Day 1 of DevFest Lagos 2024 where we discussed about Flutter.',
    longDescription:
      'A panel discussion featuring Google Developer Experts in Dart and Flutter, addressing community questions about language evolution, best practices, and the future of cross-platform mobile development.',
    curriculum: [
      'Current state of Dart language and runtime',
      'Flutter ecosystem growth and framework evolution',
      'Community-sourced questions and expert insights',
      'Industry trends in mobile development',
    ],
    sessionFormat: 'Panel',
    keyTakeaways: [
      'Google Developer Experts directly shape language and framework direction based on community feedback.',
      'Flutter and Dart communities are thriving with continuous innovation and learning opportunities.',
    ],
    resources: {},
    image: { alt: 'Photo of Panelists', name: 'df24-lagos-gdes-panel' },
    actions: [
      {
        icon: 'aboutreadmore',
        link: 'https://devfestlagos.com/',
        title: 'About',
      },
    ],
    tags: ['Panelist', 'GDG'],
    expandedTags: ['Panelist', 'GDG', 'DevFest', 'Flutter', 'Dart', 'GDE'],
  },
  {
    title: 'DevFest Abakaliki 2024',
    date: { month: 9, year: 2024 },
    description:
      'Spoke on "Expert Tips for Flutter UI Performance". Walked through profiling tools, rendering pipeline optimization, and real-world case studies.',
    longDescription:
      'A deep Talk exploring optimization techniques for Flutter UI rendering and performance. Covered profiling tools, rendering pipeline optimization, and real-world case studies achieving smooth 60/120 fps.',
    curriculum: [
      'Flutter rendering pipeline architecture and frame budgets',
      'Profiling and identifying performance bottlenecks with DevTools',
      'Optimizing widget rebuild cycles and paint operations',
      'Memory management and garbage collection tuning',
    ],
    keyTakeaways: [
      'Most Flutter performance issues are solved by reducing widget rebuild scope and paint area.',
      'DevTools profiling transforms guesswork into data-driven optimization.',
    ],
    resources: {
      recording: 'https://youtu.be/TYoEo6ghwJ0',
      slides: 'https://docs.google.com/presentation/d/1xNjmAMNRf0O-AJseLGwNgHcGOzAJLpoyFXKuaWazpcQ/edit?usp=sharing',
    },
    image: { alt: 'First Slide', name: 'obum-df24-ai' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/TYoEo6ghwJ0',
        title: 'Recording',
      },
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1xNjmAMNRf0O-AJseLGwNgHcGOzAJLpoyFXKuaWazpcQ/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Flutter', 'Performance', 'Optimization'],
    sessionFormat: 'Talk',
  },
  {
    title: 'FlutterBytes Conference 2024',
    date: { month: 11, year: 2024 },
    description:
      'Spoke on "Bringing Blockchain & Web3 into Flutter". Covered wallet integration, signing flows, and reading and writing smart contract state from a mobile app.',
    longDescription:
      'A technical presentation exploring the integration of blockchain and Web3 technologies into Flutter applications. Covered wallet integration, smart contract interaction, and building decentralized user experiences.',
    curriculum: [
      'Blockchain fundamentals for mobile developers',
      'Wallet connection and key management in Flutter',
      'Interacting with smart contracts from Flutter',
      'Building trust and security in decentralized apps',
    ],
    keyTakeaways: [
      'Web3 integration brings new possibilities for ownership and user autonomy in mobile apps.',
      'Flutter platform provides excellent primitives for building blockchain-based experiences.',
    ],
    resources: {
      recording: 'https://www.youtube.com/live/dXrvd3nKKFE?t=2955s',
      slides: 'https://docs.google.com/presentation/d/1RbcS7hPJ69MtpvtVfYj55p0m3F7-ulDXH2apsBqWik0/edit?usp=sharing',
    },
    image: { alt: 'Attending Community', name: 'obum-fbc24-community' },
    actions: [
      {
        icon: 'recording',
        link: 'https://www.youtube.com/live/dXrvd3nKKFE?t=2955s',
        title: 'Recording',
      },
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1RbcS7hPJ69MtpvtVfYj55p0m3F7-ulDXH2apsBqWik0/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    sessionFormat: 'Talk',
    tags: ['Speaker', 'FlutterBytesConf'],
    expandedTags: ['Speaker', 'FlutterBytesConf', 'Web3', 'Blockchain', 'Flutter'],
  },
  {
    title: 'GDEs Panel - FlutterBytesConf',
    date: { month: 11, year: 2024 },
    description:
      'Was in the Panel of Dart & Flutter GDEs in Day 1 of FlutterBytesConf where we answered Flutter questions and had cool conversations.',
    longDescription:
      'A panel session bringing together Google Developer Experts specializing in Dart and Flutter to discuss current challenges, emerging patterns, and future directions in cross-platform mobile development.',
    curriculum: [
      'State of Flutter ecosystem and latest framework features',
      'Dart language evolution and upcoming capabilities',
      'Community questions and expert perspectives',
      'Career paths and opportunities in cross-platform development',
    ],
    keyTakeaways: [
      'Flutter community members drive innovation through active feedback and collaboration.',
      'Expert guidance accelerates learning and helps avoid common pitfalls.',
    ],
    sessionFormat: 'Panel',
    resources: {},
    image: { alt: 'Photo of Stage', name: 'fbc24-gdes-panel' },
    actions: [
      {
        icon: 'aboutreadmore',
        link: 'https://www.flutterbytesconf.com/',
        title: 'About',
      },
    ],
    tags: ['Panelist', 'FlutterBytesConf'],
    expandedTags: ['Panelist', 'FlutterBytesConf', 'Flutter', 'Dart', 'GDE', 'Panel'],
  },
  {
    title: 'DevFest Afrique Francophone 2024',
    date: { month: 9, year: 2024 },
    description:
      'Spoke in French about the various ways by which AI improves user experience in mobile applications. Covered on-device inference, contextual recommendations, and intelligent defaults.',
    longDescription:
      "A conference presentation in French exploring AI's transformative impact on mobile user experience. Covered personalization, intelligent features, and design patterns for AI-enhanced applications.",
    curriculum: [
      'AI-driven personalization and recommendation engines',
      'Predictive interfaces and adaptive user flows',
      'Privacy-first AI on mobile devices',
      'User experience design for AI features',
    ],
    sessionFormat: 'Talk',
    keyTakeaways: [
      'AI transforms mobile apps from reactive tools into anticipatory assistants.',
      'Responsible AI design prioritizes user control and transparency.',
    ],
    resources: {
      recording: 'https://youtu.be/rAt9UMLk0bs',
      slides: 'https://docs.google.com/presentation/d/15wIJbZQ2QzQE0-4y_pZwIPMBTc4hFa9cHFLwP9XCinM/edit?usp=sharing',
    },
    image: { alt: 'First Slide', name: 'obum-df24-af-fr' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/rAt9UMLk0bs',
        title: 'Recording',
      },
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/15wIJbZQ2QzQE0-4y_pZwIPMBTc4hFa9cHFLwP9XCinM/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'AI', 'Mobile UX', 'DevFest', 'Francophone'],
  },
  {
    title: 'Google I/O Extended Asaba 2024',
    date: { month: 7, year: 2024 },
    description:
      'Spoke on the updates in Dart & Flutter announced during 2024\'s Google I/O under the heading "Dart Macros & A Better Flutter". Focused on macros as a metaprogramming capability and framework improvements landing in the SDK.',
    longDescription:
      'A presentation on the latest features announced at Google I/O 2024 for Dart and Flutter. Focused on Dart macros as a metaprogramming capability and framework improvements enhancing developer experience.',
    curriculum: [
      'Dart macros and compile-time code generation',
      'Flutter framework improvements and new features',
      'Performance enhancements and tooling updates',
      'Migration guides for existing projects',
    ],
    keyTakeaways: [
      'Dart macros enable powerful compile-time abstractions reducing boilerplate code.',
      'Flutter continues evolving with focus on performance and developer experience.',
    ],
    sessionFormat: 'Talk',
    resources: {},
    image: { alt: 'Obum speaking on stage', name: 'obum-io-asaba-24' },
    actions: [
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mgcbfp/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://x.com/GdgAsaba/status/1813937612245405801',
        title: 'Tweet',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Google I/O', 'Dart', 'Flutter'],
  },
  {
    title: 'Google I/O Extended Enugu 2024',
    date: { month: 7, year: 2024 },
    description:
      'Spoke on the panel of "The Future of Mobile Development with AI-Embedded Chipsets" with other seasoned software engineers. Covered on-device inference, hardware acceleration, and what shifts for app developers building on next-gen silicon.',
    longDescription:
      'A panel discussion exploring how AI-embedded chipsets reshape mobile development. Covered on-device AI, hardware acceleration, and practical implications for app developers building next-generation experiences.',
    curriculum: [
      'AI capabilities in modern mobile processors',
      'On-device vs. cloud tradeoffs for ML inference',
      'Hardware acceleration and neural engines',
      'Practical patterns for AI-first mobile apps',
    ],
    keyTakeaways: [
      'AI-embedded chipsets enable powerful on-device experiences without cloud latency.',
      'Mobile developers must evolve skills to leverage hardware AI capabilities.',
    ],
    sessionFormat: 'Panel',
    resources: {
      recording: 'https://youtu.be/hqz-8LjA4-E',
    },
    image: { alt: 'Panelists for "Mobile & AI"', name: 'mobile-ai-panel' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/hqz-8LjA4-E',
        title: 'Recording',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/m2ru49/',
        title: 'About',
      },
    ],
    tags: ['Panelist', 'GDG'],
    expandedTags: ['Panelist', 'GDG', 'Google I/O', 'AI', 'Mobile', 'Hardware'],
  },
  {
    title: 'Build your Portfolio with GitHub Codespaces',
    date: { month: 6, year: 2024 },
    description:
      'Demonstrated how GitHub Codespaces enables coding in the cloud while building and deploying a template portfolio website.',
    longDescription:
      'A live coding demonstration showing GitHub Codespaces as a complete development environment in the cloud. Built a portfolio website from scratch, deployed it, and showed how Codespaces eliminates setup friction.',
    curriculum: [
      'Setting up development environments with GitHub Codespaces',
      'Cloud-based coding workflows and collaboration',
      'Deploying websites directly from Codespaces',
      'Version control integration and best practices',
    ],
    keyTakeaways: [
      'GitHub Codespaces removes environment setup barriers, accelerating project starts.',
      'Cloud development environments enable seamless collaboration across teams.',
    ],
    sessionFormat: 'Workshop',
    resources: {
      recording: 'https://youtu.be/nrL9IAS3Uy8',
    },
    image: { alt: 'Event Flyer', name: 'github-codespaces-portfolio' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/nrL9IAS3Uy8',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'MLSA'],
    expandedTags: ['Organizer', 'MLSA', 'GitHub', 'Cloud Development', 'Portfolio'],
  },
  {
    title: '"#BuildwithAI" Abakaliki',
    date: { month: 4, year: 2024 },
    description: 'Carried out a workshop on "Adding AI to your Flutter Apps using Google AI Dart SDK".',
    longDescription:
      'A hands-on workshop teaching developers how to integrate Google AI capabilities into Flutter applications. Covered the Google AI Dart SDK, prompt engineering, and building intelligent mobile features.',
    curriculum: [
      'Google AI Dart SDK setup and initialization',
      'Prompt engineering and parameter tuning',
      'Integrating AI responses into Flutter UI',
      'Building practical AI-powered Flutter applications',
    ],
    keyTakeaways: [
      'The Google AI Dart SDK simplifies adding generative AI to Flutter apps with minimal overhead.',
      'Effective prompt engineering is key to getting useful, consistent AI responses.',
    ],
    sessionFormat: 'Workshop',
    resources: {},
    image: { alt: 'Speaker Flyer', name: 'obum-build-with-ai' },
    actions: [
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mm2fcy/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/GDGAbakaliki/status/1782719581015961831',
        title: 'Tweet',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'AI', 'Flutter', 'Dart', 'Workshop'],
  },
  {
    title: 'DevFest Asaba 2023',
    date: { month: 12, year: 2023 },
    description: 'Spoke on "Using Streams and Services for Flutter State".',
    longDescription:
      'A Talk exploring state management patterns in Flutter using Streams and Services. Covered reactive programming principles, BLoC patterns, and building scalable state architectures.',
    curriculum: [
      'Dart Streams and reactive programming fundamentals',
      'Service layer architecture for state management',
      'BLoC pattern implementation and best practices',
      'Testing streams-based state management',
    ],
    keyTakeaways: [
      'Streams provide a powerful abstraction for managing state changes over time.',
      'Service-based architectures decouple UI from business logic, improving testability.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1gedT70WjEcUWtXzNqgIxGG58p_ZlMDDT0Q-ZMsRG3AU/edit?usp=sharing',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-df23-asaba' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1gedT70WjEcUWtXzNqgIxGG58p_ZlMDDT0Q-ZMsRG3AU/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mbcaf6/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/obumnwabude/status/1733410762603876691',
        title: 'Thread',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Flutter', 'State Management', 'Streams'],
  },
  {
    title: 'DevFest Enugu 2023',
    date: { month: 11, year: 2023 },
    description:
      'Spoke on "Flutter CustomPaint vs SVG Image Spec". Weighed when procedural CustomPaint wins vs when to inline an SVG, with the performance trade-offs behind each.',
    longDescription:
      'A comparative analysis of graphics rendering approaches in Flutter. Examined when to use CustomPaint for procedural graphics versus SVG image specifications, covering performance trade-offs and use cases.',
    curriculum: [
      'CustomPaint API and canvas drawing operations',
      'SVG image format and rendering in Flutter',
      'Performance characteristics of each approach',
      'Choosing the right tool for graphics challenges',
    ],
    keyTakeaways: [
      'CustomPaint excels for dynamic, procedurally-generated graphics with low overhead.',
      'SVG is ideal for static vector graphics and complex illustrations.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/110Ft7-UnpFbrL-xJ6NbbG04FFnzCv7UT9LCqT8VbEx0/edit?usp=sharing',
      recording: 'https://youtu.be/w9lD35D78N8',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-df23-enugu' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/110Ft7-UnpFbrL-xJ6NbbG04FFnzCv7UT9LCqT8VbEx0/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/m24sqy/',
        title: 'About',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/w9lD35D78N8',
        title: 'Recording',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Flutter', 'Graphics', 'CustomPaint'],
  },
  {
    title: 'DevFest Luwero 2023',
    date: { month: 11, year: 2023 },
    description:
      'Spoke on "How to Customize Flutter Packages". Covered forking, extending, and maintaining project-specific variants of pub.dev packages without losing upstream updates.',
    longDescription:
      'A technical session on extending and customizing existing Flutter packages for project-specific needs. Covered forking packages, modifying behavior, and maintaining custom variants.',
    curriculum: [
      'Pub package structure and dependency management',
      'Extending packages via inheritance and composition',
      'Creating custom package forks and variants',
      'Publishing and maintaining custom packages',
    ],
    keyTakeaways: [
      'Extending packages through composition often beats forking for maintainability.',
      'Understanding package internals allows powerful customizations without reinventing.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1MRQwxGqTXzjVy_IyNjJBIlsReKnFujwWZ2Aohj8q60g/edit?usp=sharing',
      recording: 'https://youtu.be/UkWkXmFQAb8',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-df23-luwero' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1MRQwxGqTXzjVy_IyNjJBIlsReKnFujwWZ2Aohj8q60g/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/m5qj29/',
        title: 'About',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/UkWkXmFQAb8',
        title: 'Recording',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Flutter', 'Packages', 'Customization'],
  },
  {
    title: 'GSDC AE-FUNAI Info Session 2023',
    date: { month: 9, year: 2023 },
    description:
      'Introduced Technical Writing to a student audience. Covered documentation principles, audience awareness, and the writing habits that separate useful docs from wall-of-text ones.',
    longDescription:
      'An introductory session on technical writing for computer science students. Covered documentation principles, audience awareness, and practical skills for writing clear technical content.',
    curriculum: [
      'Technical writing fundamentals and best practices',
      'Documentation structures and formats',
      'Writing for diverse technical audiences',
      'Tools and workflows for technical documentation',
    ],
    keyTakeaways: [
      'Technical writing is a skill every engineer should develop for better communication.',
      'Clear documentation multiplies the impact of code and projects.',
    ],
    sessionFormat: 'Talk',
    resources: {
      recording: 'https://x.com/gdscaefunai/status/1704569899404902860?s=20',
    },
    image: { alt: 'Event Flyer', name: 'gdsc-aefunai-info-session-2023' },
    actions: [
      {
        icon: 'recording',
        link: 'https://x.com/gdscaefunai/status/1704569899404902860?s=20',
        title: 'Recording',
      },
    ],
    tags: ['Speaker', 'GDSC'],
    expandedTags: ['Speaker', 'GDSC', 'Technical Writing', 'Documentation', 'Education'],
  },
  {
    title: 'GDSC NAU Info Session 2023',
    date: { month: 9, year: 2023 },
    description:
      'Introduced Flutter, Firebase, and Google Cloud to new GDSC members. Framed how the three fit together for shipping a full-stack app fast.',
    longDescription:
      'An information session introducing Google Developer Student Club members to the Flutter framework, Firebase backend services, and Google Cloud infrastructure. Provided pathways for learning full-stack app development.',
    curriculum: [
      'Flutter framework overview and cross-platform capabilities',
      'Firebase services for backend and real-time data',
      'Google Cloud fundamentals and app deployment',
      'Career paths and learning resources',
    ],
    keyTakeaways: [
      'Flutter, Firebase, and Google Cloud form a powerful stack for rapid app development.',
      'Student communities provide structured learning and mentorship opportunities.',
    ],
    sessionFormat: 'Keynote',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1W7dKEXD1DIH0MyVtSifLFOMG4SFq1gP78UGdhoMTRsc/edit?usp=sharing',
    },
    image: { alt: 'Event Flyer', name: 'gdsc-nau-info-session-2023' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1W7dKEXD1DIH0MyVtSifLFOMG4SFq1gP78UGdhoMTRsc/edit?usp=sharing',
        title: 'Slides',
      },
    ],
    tags: ['Speaker', 'GDSC'],
    expandedTags: ['Speaker', 'GDSC', 'Flutter', 'Firebase', 'Google Cloud'],
  },
  {
    title: 'Google I/O Extended Owerri 2023',
    date: { month: 8, year: 2023 },
    description:
      'Spoke on "Understanding UI Rendering: How Flutter is platform-agnostic". Walked through the Skia and Impeller pipeline and how Flutter draws the same UI across Android, iOS, Web, and Desktop.',
    longDescription:
      'A deep technical dive into Flutter rendering architecture. Explained the Skia graphics engine, the rendering pipeline, and how Flutter achieves platform-agnostic UI across Android, iOS, Web, and Desktop.',
    curriculum: [
      'Flutter architecture and rendering pipeline overview',
      'Skia graphics engine and rasterization',
      'Platform channels and native integration',
      'Performance implications of platform-agnostic design',
    ],
    keyTakeaways: [
      "Flutter's rendering abstraction enables consistent visuals across platforms.",
      'Understanding rendering mechanics helps developers optimize performance.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1yK2RuAcIGUJNeBDTusbKtALFuiCL4SOANMmYhRCESzc/edit?usp=sharing',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-io-extended-owerri' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1yK2RuAcIGUJNeBDTusbKtALFuiCL4SOANMmYhRCESzc/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mguey6/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/obumnwabude/status/1692863659666513924',
        title: 'Thread',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Google I/O', 'Flutter', 'Rendering', 'Architecture'],
  },
  {
    title: 'Google I/O Extended Enugu 2023',
    date: { month: 8, year: 2023 },
    description:
      'Spoke on "How to improve Flutter forms", focusing on user experience in mobile apps. Covered validation, accessible error handling, and UI patterns that reduce user friction.',
    longDescription:
      'A practical session on building high-quality form experiences in Flutter. Covered validation, accessibility, error handling, and UI patterns that reduce user friction and frustration.',
    curriculum: [
      'Form validation and error messaging patterns',
      'Accessibility in form design and input handling',
      'Advanced text input customization in Flutter',
      'Multi-step forms and complex workflows',
    ],
    keyTakeaways: [
      'Good forms are invisible. Great forms guide users and handle edge cases gracefully.',
      'Accessibility in forms benefits all users, not just those with disabilities.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/11PJdEQLWK1sGoARW81c8CiegicDT79SLi7VaLx-69G0/edit?usp=sharing',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-io-extended-enugu' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/11PJdEQLWK1sGoARW81c8CiegicDT79SLi7VaLx-69G0/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/m76sm3/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/GdgEnugu/status/1690326639924613120',
        title: 'Tweet',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Google I/O', 'Flutter', 'Forms', 'UX'],
  },
  {
    title: 'Google I/O Extended Onitsha 2023',
    date: { month: 7, year: 2023 },
    description:
      'Spoke on "Flutter for Web Developers", comparing developer concepts across both categories. Drew parallels between the DOM and Flutter widget trees so web developers could reuse familiar mental models.',
    longDescription:
      'A bridge-building talk for web developers transitioning to Flutter. Drew parallels between web and mobile development paradigms, helping web developers apply familiar concepts to cross-platform mobile building.',
    curriculum: [
      'Web development paradigms vs. mobile app architecture',
      'DOM-like widget trees and reactive rendering',
      'State management patterns across platforms',
      'Responsive design in Flutter vs. CSS media queries',
    ],
    keyTakeaways: [
      'Flutter concepts like widgets and composition are familiar to web developers with components.',
      'Cross-platform thinking accelerates learning and career growth.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1-i7U0ZVCyHbkqzsKR8_v4en9YlwX6_mYYP9pFXFCrw8/edit?usp=sharing',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-io-extended-onitsha' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1-i7U0ZVCyHbkqzsKR8_v4en9YlwX6_mYYP9pFXFCrw8/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mpae52/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/obumnwabude/status/1682696894093443077',
        title: 'Thread',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Google I/O', 'Flutter', 'Web Development', 'Bridge'],
  },
  {
    title: 'Google I/O Extended Abakaliki 2023',
    date: { month: 7, year: 2023 },
    description:
      'Spoke on "Admob in Flutter" and carried out the Flutter AdMob Codelab in front of the audience. Covered integration, placement strategies, and revenue considerations.',
    longDescription:
      'A hands-on session on monetizing Flutter apps with Google AdMob. Covered integration, best practices for ad placement, revenue optimization, and user experience considerations.',
    curriculum: [
      'Google AdMob setup and SDK integration in Flutter',
      'Ad unit types and placement strategies',
      'Measuring ad performance and revenue',
      'Balancing monetization with user experience',
    ],
    keyTakeaways: [
      'Strategic ad placement balances revenue with user experience.',
      'AdMob analytics provide insights for optimizing ad performance.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1tqMQHf0KGODvxEjrrECZSh-4hLXdF3yLFwDF7QDB_LU/edit?usp=sharing',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-io-extended-abakaliki' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1tqMQHf0KGODvxEjrrECZSh-4hLXdF3yLFwDF7QDB_LU/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/myc9en/',
        title: 'About',
      },
      {
        icon: 'externallink',
        link: 'https://twitter.com/GDGAbakaliki/status/1675195522703826944',
        title: 'Pictures',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Google I/O', 'Flutter', 'AdMob', 'Monetization'],
  },
  {
    title: 'Google I/O Extended AE-FUNAI 2023',
    date: { month: 6, year: 2023 },
    description:
      'Introduced cloud computing fundamentals using Google Cloud, with hands-on Cloud Skills Boost essentials for the room to work through in real time.',
    longDescription:
      'An introductory session on cloud computing fundamentals using Google Cloud. Covered core services, deployment models, and guided students through Cloud Skills Boost essentials to start their cloud journey.',
    curriculum: [
      'Cloud computing concepts and deployment models',
      'Google Cloud services overview',
      'Compute, storage, and networking basics',
      'Getting started with Cloud Skills Boost learning path',
    ],
    keyTakeaways: [
      'Cloud literacy is essential for modern software development.',
      'Google Cloud Skills Boost provides structured, hands-on learning paths.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1bl_4_qJ5P5a-8_s__suAx5tEIDMD9BY6lUs9mtqSIhM/edit?usp=sharing',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-io-extended-aefunai' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1bl_4_qJ5P5a-8_s__suAx5tEIDMD9BY6lUs9mtqSIhM/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/amdanielbryte/status/1672960754406903809',
        title: 'Thread',
      },
    ],
    tags: ['Speaker', 'GDSC'],
    expandedTags: ['Speaker', 'GDSC', 'Google I/O', 'Google Cloud', 'Cloud Essentials'],
  },
  {
    title: 'Flutter Forward Enugu 2023',
    date: { month: 4, year: 2023 },
    description:
      'Spoke on "How to animate in Flutter" and assisted in checking in participants during the event. Covered implicit and explicit animations, controllers, and composition patterns for polished motion.',
    longDescription:
      'A comprehensive talk on animation techniques in Flutter. Covered implicit animations, explicit animations, animation controllers, and advanced composition patterns for creating polished, responsive UIs.',
    curriculum: [
      'Implicit vs. explicit animations in Flutter',
      'AnimationController and Tween fundamentals',
      'Custom painting and animation composition',
      'Performance considerations for smooth 60fps animations',
    ],
    keyTakeaways: [
      'Animations transform apps from static to alive, improving perceived performance.',
      'Proper animation structure prevents jank and keeps frame rates smooth.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1-bGtbikYCRMC6x4wv790mB3p1dUXh1DYQFEkj0kDA3s/edit?usp=sharing',
      recording: 'https://www.youtube.com/watch?v=vW4bjrtZbS8&list=PL6XlbQ29dTFNKszXJ6-afaQEpl7iULE8E&t=2049s',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-flutter-forward-enugu' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1-bGtbikYCRMC6x4wv790mB3p1dUXh1DYQFEkj0kDA3s/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mmdbgt/',
        title: 'About',
      },
      {
        icon: 'recording',
        link: 'https://www.youtube.com/watch?v=vW4bjrtZbS8&list=PL6XlbQ29dTFNKszXJ6-afaQEpl7iULE8E&t=2049s',
        title: 'Recording',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Flutter Forward', 'Animation', 'UI Polish'],
  },
  {
    title: 'Flutter Forward Abakaliki 2023',
    date: { month: 3, year: 2023 },
    description:
      'Spoke on "Securing Flutter Apps" during Flutter Forward Extended. Covered secure storage, encrypted API communication, and hardening common mobile attack vectors.',
    longDescription:
      'A security-focused talk on protecting Flutter applications from common vulnerabilities. Covered secure storage, API communication, dependency management, and platform-specific security concerns.',
    curriculum: [
      'HTTPS, certificates, and secure network communication',
      'Secure local storage and sensitive data protection',
      'Code obfuscation and reverse engineering prevention',
      'Permission models and native security APIs',
    ],
    keyTakeaways: [
      'Security must be designed in from the start, not bolted on later.',
      'Flutter developers must understand both Dart and native platform security.',
    ],
    sessionFormat: 'Talk',
    resources: {},
    image: { alt: 'Speaker Flyer', name: 'obum-flutter-forward-abakaliki' },
    actions: [
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mz2m5j/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/obumnwabude/status/1632365534191710208',
        title: 'Thread',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'Flutter Forward', 'Security', 'Best Practices'],
  },
  {
    title: 'DevFest Yaounde 2022',
    date: { month: 11, year: 2022 },
    description:
      'Facilitated the Flutter track at DevFest Yaounde, guiding developers through hands-on Cloud Skills Boost quests and shipping small apps end to end.',
    longDescription:
      'Served as the primary Flutter track facilitator at DevFest Yaounde 2022. Guided developers through hands-on Cloud Skills Boost quests, answering questions and providing mentorship.',
    curriculum: [
      'Flutter quest structure and learning paths',
      'Building first Flutter apps step-by-step',
      'Cloud Skills Boost platform features',
      'Mentoring and hands-on problem solving',
    ],
    keyTakeaways: [
      'Structured learning through quests makes skill acquisition tangible and motivating.',
      'Mentors amplify learning by answering questions and clarifying concepts.',
    ],
    sessionFormat: 'Workshop',
    resources: {},
    image: { alt: 'Speaker Flyer', name: 'obum-devfest-yaounde' },
    actions: [
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mz4ac2/',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/obumnwabude/status/1588822831223435264',
        title: 'Thread',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'DevFest', 'Flutter', 'Mentorship', 'Facilitation'],
  },
  {
    title: 'Why you should use Flutter',
    date: { month: 6, year: 2022 },
    description:
      'Explained the detailed benefits of using Flutter for our projects. Covered code reuse across iOS and Android, hot reload developer experience, and what the pub.dev ecosystem unlocks.',
    longDescription:
      'A persuasive talk on the strategic advantages of choosing Flutter for cross-platform mobile development. Covered code reuse, time-to-market, developer experience, and community ecosystem.',
    curriculum: [
      'Cross-platform development economics and time-to-market',
      'Hot reload and developer experience advantages',
      'Flutter ecosystem and package availability',
      'Performance characteristics and native integration',
    ],
    keyTakeaways: [
      'Flutter enables teams to ship to multiple platforms with one codebase.',
      'Strong developer experience and tooling make Flutter productive and enjoyable.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides:
        'https://docs.google.com/presentation/d/1EuXoQC0zO_tPq8deT6plxuwbzK988-789FxUsdTfJfM/edit?usp=sharing&resourcekey=0-V0dhDAuwoCJimDdxeyBItA',
      recording: 'https://youtu.be/yiNGvba7bhs',
    },
    image: { alt: 'Event Flyer', name: 'gdsc-why-flutter' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1EuXoQC0zO_tPq8deT6plxuwbzK988-789FxUsdTfJfM/edit?usp=sharing&resourcekey=0-V0dhDAuwoCJimDdxeyBItA',
        title: 'Slides',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/yiNGvba7bhs',
        title: 'Recording',
      },
    ],
    tags: ['Speaker', 'GDSC'],
    expandedTags: ['Speaker', 'GDSC', 'Flutter', 'Cross-Platform', 'Benefits'],
  },
  {
    title: 'FlutterFest Enugu 2022',
    date: { month: 5, year: 2022 },
    description:
      'Spoke on "How to Implement any Screen/UI in Flutter". Walked through breaking a mockup down top-to-bottom into layout primitives, then composing widgets to match.',
    longDescription:
      'A practical masterclass on approaching UI design and implementation challenges in Flutter. Covered problem decomposition, widget composition, and techniques for translating any design into code.',
    curriculum: [
      'UI problem decomposition and widget hierarchy planning',
      'Widget composition patterns and reusable components',
      'Custom widgets and painter-based graphics',
      'Responsive design and constraint-based layouts',
    ],
    keyTakeaways: [
      'Breaking complex UIs into reusable widget components is the core Flutter skill.',
      'Proper constraint understanding solves most Flutter layout challenges.',
    ],
    sessionFormat: 'Talk',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1OtTeu7MgmGry4SdArVGNX6DHPZKggC7OZMm6oLBkFFo/edit?usp=sharing',
    },
    image: { alt: 'Speaker Flyer', name: 'obum-flutterfest-enugu' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1OtTeu7MgmGry4SdArVGNX6DHPZKggC7OZMm6oLBkFFo/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://gdg.community.dev/e/mbyat2/',
        title: 'About',
      },
      {
        icon: 'facebook',
        link: 'https://facebook.com/story.php?story_fbid=pfbid02E9mkdSk9rvEkaeBqWQNysMk3J9eFA5bnWf1HAuLtbaZa8VMpC3fXzkgaZLRksfVxl&id=101671715841906',
        title: 'Post',
      },
    ],
    tags: ['Speaker', 'GDG'],
    expandedTags: ['Speaker', 'GDG', 'FlutterFest', 'UI Implementation', 'Composition'],
  },
  {
    title: 'Understanding Technical Writing',
    date: { month: 4, year: 2022 },
    description:
      'Community workshop introducing technical writing fundamentals with freeCodeCamp contributor Ihechikara. Covered documentation structure, audience analysis, and how to turn a rough idea into a published post.',
    longDescription:
      'A community workshop introducing technical writing fundamentals with freeCodeCamp contributor Ihechikara. Covered documentation styles, audience analysis, and practical tips for getting started as a technical writer.',
    curriculum: [
      'Technical writing fundamentals and best practices',
      'Writing for different audiences and platforms',
      'Structuring documentation and tutorials',
      'Getting published and building a portfolio',
    ],
    keyTakeaways: [
      'Technical writing is a valuable skill that amplifies the impact of developers.',
      'freeCodeCamp and similar platforms offer opportunities to practice and publish.',
    ],
    resources: {
      slides:
        'https://docs.google.com/presentation/d/1QrBqRMKlQ1QZms-LJjsSXa3OsFYx_pAm/edit?usp=drivesdk&ouid=114519401531947192354&rtpof=true&sd=true',
      recording: 'https://youtu.be/7T0-712hs6Y',
    },
    sessionFormat: 'Talk',
    image: {
      alt: 'Slide from the event slides',
      name: 'understanding-technical-writing',
    },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1QrBqRMKlQ1QZms-LJjsSXa3OsFYx_pAm/edit?usp=drivesdk&ouid=114519401531947192354&rtpof=true&sd=true',
        title: 'Slides',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/7T0-712hs6Y',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'Genesys'],
    expandedTags: ['Organizer', 'Genesys', 'Technical Writing', 'Documentation', 'Community'],
  },
  {
    title: 'Careers In Tech',
    date: { month: 3, year: 2022 },
    description:
      'Career guidance session with Onyebuchi Nwafor from VeendHQ, exploring different tech career paths and practical steps for breaking into the industry.',
    longDescription:
      'A career guidance session with Onyebuchi Nwafor from VeendHQ exploring why technology careers offer fulfilling opportunities and how to navigate entry points into the industry.',
    curriculum: [
      'Tech industry landscape and career paths',
      'Technical vs. non-technical roles in tech',
      'Building skills and creating your first projects',
      'Job hunting and interview preparation',
    ],
    sessionFormat: 'Talk',
    keyTakeaways: [
      'Technology offers diverse career paths beyond software engineering.',
      'Starting with passion projects builds both skills and confidence.',
    ],
    resources: {
      slides: 'https://docs.google.com/presentation/d/1K7OY6OmYM_4bO6trZo2o9FhO-wZ2FYME/edit#slide=id.p1',
      recording: 'https://youtu.be/0AgBinwAPic',
    },
    image: { alt: 'About the speaker', name: 'careers-in-tech' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1K7OY6OmYM_4bO6trZo2o9FhO-wZ2FYME/edit#slide=id.p1',
        title: 'Slides',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/0AgBinwAPic',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'Genesys'],
    expandedTags: ['Organizer', 'Genesys', 'Career', 'Tech Industry', 'Guidance'],
  },
  {
    title: 'Info Session',
    date: { month: 3, year: 2022 },
    description:
      'Ezra at Genesys explained about community and about Genesys to the attendees. Covered community values, current projects, and concrete ways to get involved.',
    longDescription:
      'An introductory session about the Genesys community and organization. Covered community values, mission, and how to get involved with projects and initiatives.',
    curriculum: [
      'Community mission and core values',
      'Current projects and initiatives',
      'Getting involved and contributing',
      'Networking and collaboration opportunities',
    ],
    sessionFormat: 'Keynote',
    keyTakeaways: [
      'Communities amplify individual efforts through collaboration and mutual support.',
      'Genesys provides structure and support for community-driven projects.',
    ],
    resources: {
      slides: 'https://docs.google.com/presentation/d/1qkTbbUpkb-9ASFZUqOFI9O7_PKQDOk5OrNhWyNxbphM/edit?usp=sharing',
      recording: 'https://youtu.be/fIdwA4zt6Sc',
    },
    image: { alt: 'Genesys community session', name: 'genesys-info-session' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1qkTbbUpkb-9ASFZUqOFI9O7_PKQDOk5OrNhWyNxbphM/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/fIdwA4zt6Sc',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'Genesys'],
    expandedTags: ['Organizer', 'Genesys', 'Community', 'Introduction', 'Collaboration'],
  },
  {
    title: "Your GitHub Profile's README",
    date: { month: 2, year: 2022 },
    description:
      'Explained why and how to beautify the README of your GitHub profile and repositories. Covered markdown formatting, profile READMEs, and using READMEs as a portfolio surface.',
    longDescription:
      'A creative session on crafting compelling GitHub profiles through well-designed README files. Covered markdown formatting, GitHub features, and portfolio presentation strategies.',
    curriculum: [
      'Markdown syntax and GitHub-flavored features',
      'README best practices for profiles and repositories',
      'Portfolio presentation through project documentation',
      'Tools and templates for beautiful READMEs',
    ],
    sessionFormat: 'Workshop',
    keyTakeaways: [
      'A well-crafted GitHub profile makes a strong first impression on employers and collaborators.',
      'Clear README files are the gateway to project adoption and contributions.',
    ],
    resources: {
      slides: 'https://1drv.ms/p/s!AiER2Bfzp1AIgSwDQhEv4QmzEHI6?e=GKxYJZ',
      recording: 'https://youtu.be/yTbhmbQTn1Y',
    },
    image: { alt: 'Event Flyer', name: 'github-profile-readme' },
    actions: [
      {
        icon: 'slides',
        link: 'https://1drv.ms/p/s!AiER2Bfzp1AIgSwDQhEv4QmzEHI6?e=GKxYJZ',
        title: 'Powerpoint',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/yTbhmbQTn1Y',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'MLSA'],
    expandedTags: ['Organizer', 'MLSA', 'GitHub', 'Portfolio', 'README'],
  },
  {
    title: 'Introduction to Flutter (Todo App)',
    date: { month: 11, year: 2021 },
    description:
      'Taught Flutter on screen while building a simple Todo App. Live-coded through layout, state, and persistence so beginners could follow along.',
    longDescription:
      'A beginner-friendly live coding session introducing Flutter through building a functional Todo application. Covered stateful widgets, lists, and user interaction fundamentals.',
    curriculum: [
      'Flutter project structure and setup',
      'Widgets and the widget tree',
      'Stateful vs. stateless widgets',
      'Building a complete simple app from scratch',
    ],
    keyTakeaways: [
      'Flutter enables rapid app development with live reload and hot reload.',
      'Simple projects are excellent vehicles for learning core framework concepts.',
    ],
    sessionFormat: 'Workshop',
    resources: {
      recording: 'https://youtu.be/S8qAld1rg8c',
    },
    image: { alt: 'Screenshot of Building Todo App', name: 'gdsc-todo' },
    actions: [
      {
        icon: 'recording',
        link: 'https://youtu.be/S8qAld1rg8c',
        title: 'Recording',
      },
    ],
    tags: ['Speaker', 'GDSC'],
    expandedTags: ['Speaker', 'GDSC', 'Flutter', 'Introduction', 'Live Coding'],
  },
  {
    title: 'Collaborating with GitHub',
    date: { month: 8, year: 2021 },
    description:
      'Practical intro to collaborative development with GitHub. Covered basic workflows, pull requests, and code review as a team habit.',
    longDescription:
      'A practical guide to collaborative development with GitHub. Covered version control workflows, pull requests, code review, and issue tracking for team projects.',
    curriculum: [
      'GitHub forks and cloning workflows',
      'Creating and managing pull requests',
      'Code review and discussion in GitHub',
      'Issue tracking and project management',
    ],
    sessionFormat: 'Workshop',
    keyTakeaways: [
      'GitHub pull requests enable asynchronous collaboration and knowledge sharing.',
      'Clear communication in issues and PRs prevents misunderstandings and rework.',
    ],
    resources: {
      slides: 'https://1drv.ms/p/s!AiER2Bfzp1AIgS0wu4xK-p4keIx-?e=mHqzFk',
      recording: 'https://youtu.be/-yC5CQsYP0k',
    },
    image: { alt: 'Event Flyer', name: 'collaborating-with-github' },
    actions: [
      {
        icon: 'slides',
        link: 'https://1drv.ms/p/s!AiER2Bfzp1AIgS0wu4xK-p4keIx-?e=mHqzFk',
        title: 'Powerpoint',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/-yC5CQsYP0k',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'MLSA'],
    expandedTags: ['Organizer', 'MLSA', 'GitHub', 'Collaboration', 'Version Control'],
  },
  {
    title: 'Flutter Study Jam',
    date: { month: 8, year: 2021 },
    description:
      'Taught Flutter through the "Names Generator" codelab to GDSC Kabale Students. Live-coded the app end to end and answered questions in real time.',
    longDescription:
      'A hands-on Flutter Study Jam session with GDSC Kabale members. Guided students through the Names Generator codelab, covering basic stateless widgets and user interaction.',
    curriculum: [
      'Flutter project setup and hello world',
      'Stateless widgets and composition',
      'Random name generation logic',
      'Building a simple interactive app',
    ],
    keyTakeaways: [
      'Codelabs provide structured, beginner-friendly paths into Flutter.',
      'Study jams create community and shared learning experiences.',
    ],
    sessionFormat: 'Workshop',
    image: { alt: 'Event Flyer', name: 'obum-kabale21' },
    actions: [
      {
        icon: 'x',
        link: 'https://twitter.com/obumnwabude/status/1426742707272228864',
        title: 'Tweet',
      },
    ],
    tags: ['Speaker', 'GDSC'],
    expandedTags: ['Speaker', 'GDSC', 'Flutter', 'Study Jam', 'Codelab'],
  },
  {
    title: 'Google I/O 2021',
    date: { month: 5, year: 2021 },
    description:
      'Spoke on "You should be in a community" during the GDSC Meetups for Google I/O. Framed why community compounds a developer\'s career and how to find or start one.',
    longDescription:
      "A keynote talk at Google I/O 2021 GDSC Meetups emphasizing the importance of community in a developer's journey. Shared personal experiences and practical advice on joining and contributing to tech communities.",
    curriculum: [
      'Why communities matter for learning and growth',
      'Building strong communities and culture',
      'Overcoming imposter syndrome through community support',
      'Contributing to and leading communities',
    ],
    keyTakeaways: [
      'No developer grows alone. Communities accelerate learning and provide support.',
      'Strong communities create opportunities and amplify individual impact.',
    ],
    sessionFormat: 'Keynote',
    image: { alt: 'Event Flyer', name: 'obum-io21' },
    actions: [
      {
        icon: 'aboutreadmore',
        link: 'https://io.google/2021',
        title: 'About',
      },
      {
        icon: 'x',
        link: 'https://twitter.com/obumnwabude/status/1394577906932793345',
        title: 'Tweet',
      },
    ],
    tags: ['Speaker', 'GDSC'],
    expandedTags: ['Speaker', 'GDSC', 'Google I/O', 'Community', 'Keynote'],
  },
  {
    title: '2021 DES & DEV Bootcamp',
    date: { month: 5, year: 2021 },
    description:
      '6-week bootcamp combining intensive technical learning with community-focused initiatives across UI/UX Design and Web Development tracks.',
    longDescription:
      'A comprehensive 6-week bootcamp combining 4 weeks of intensive technical learning with 2 weeks of community-focused initiatives. Participants chose between UI/UX Design or Web Development tracks with mentorship and real-world projects.',
    curriculum: [
      'Track-specific technical skills and fundamentals',
      'Project-based learning and portfolio building',
      'Mentorship and professional development',
      'Community building and collaborative projects',
    ],
    sessionFormat: 'Keynote',
    keyTakeaways: [
      'Bootcamps accelerate learning through structured curricula and peer support.',
      'Community engagement amplifies individual growth and creates lasting networks.',
    ],
    image: {
      alt: 'Picture of Community Members',
      name: '2021-desdev-bootcamp',
    },
    actions: [
      {
        icon: 'article',
        link: 'https://medium.com/dscaefunai/8853deda34ef',
        title: 'Story',
      },
    ],
    tags: ['Organizer', 'GDSC'],
    expandedTags: ['Organizer', 'GDSC', 'Bootcamp', 'Design', 'Web Development'],
  },
  {
    title: '2021 Solution Challenge',
    date: { month: 2, year: 2021 },
    description:
      'Meetups and workshops we held to sensitise the community for the GDSC Solution Challenge. Walked through prior winning entries and what judges tend to reward.',
    longDescription:
      "A series of workshops and meetups organized to support GDSC members preparing for Google's Solution Challenge. Covered ideation, prototyping, and project development for social impact solutions.",
    curriculum: [
      'Problem identification and solution design',
      'Prototyping and MVP development',
      'Social impact measurement',
      'Pitching and presentation skills',
    ],
    sessionFormat: 'Workshop',
    keyTakeaways: [
      'The Solution Challenge inspires student developers to tackle real-world problems.',
      'Community support and mentorship are critical for challenge success.',
    ],
    image: {
      alt: 'Picture of Community Members',
      name: '2021-solution-challenge',
    },
    actions: [
      {
        icon: 'article',
        link: 'https://medium.com/dscaefunai/9bd29c242ed7',
        title: 'Story',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://dsc.community.dev/e/m8tk74/',
        title: 'About',
      },
    ],
    tags: ['Organizer', 'GDSC'],
    expandedTags: ['Organizer', 'GDSC', 'Solution Challenge', 'Social Impact', 'Workshop'],
  },
  {
    title: 'Git and GitHub',
    date: { month: 11, year: 2020 },
    description:
      'Multi-GDSC collaborative event on Git and GitHub with speaker Auwal MS. Covered version control fundamentals and the mental model behind branches and commits.',
    longDescription:
      'A multi-GDSC collaborative event introducing version control fundamentals using Git and GitHub. Featured speaker Auwal MS shared practical workflows for individual and team projects.',
    curriculum: [
      'Git fundamentals and version control concepts',
      'GitHub workflow for individuals and teams',
      'Branching and merge strategies',
      'Collaborative development best practices',
    ],
    keyTakeaways: [
      'Version control is essential infrastructure for any software project.',
      'Multi-GDSC collaborations strengthen community networks and knowledge sharing.',
    ],
    sessionFormat: 'Workshop',
    resources: {
      slides: 'https://docs.google.com/presentation/d/1__cTDHCp2r6rhQxDGlEWkJSZF0kOQCcDNaNG7qGSca0/edit?usp=sharing',
      recording: 'https://youtu.be/uf12u9keG10',
    },
    image: { alt: 'Section of Event Flyer', name: 'git-and-github-event' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1__cTDHCp2r6rhQxDGlEWkJSZF0kOQCcDNaNG7qGSca0/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'article',
        link: 'https://medium.com/dscaefunai/c98ae719bedb',
        title: 'Story',
      },
      {
        icon: 'recording',
        link: 'https://youtu.be/uf12u9keG10',
        title: 'Recording',
      },
    ],
    tags: ['Organizer', 'GDSC'],
    expandedTags: ['Organizer', 'GDSC', 'Git', 'GitHub', 'Version Control'],
  },
  {
    title: 'Learning Opportunities',
    date: { month: 10, year: 2020 },
    description:
      'Speaker session by Emeka Odibeli, aimed at inspiring community members to keep learning. Covered practical study habits and where to find good free resources.',
    longDescription:
      'An inspirational speaker session with Emeka Odibeli addressing students on the importance of continuous learning and practical strategies for accessing learning resources.',
    sessionFormat: 'Talk',
    curriculum: [
      'Mindset and growth mentality in learning',
      'Learning resources and communities',
      'Building learning habits and consistency',
      'Overcoming obstacles to learning',
    ],
    keyTakeaways: [
      'Continuous learning is a discipline, not just inspiration.',
      'Learning communities provide resources, accountability, and motivation.',
    ],
    image: { alt: 'Section of Event Flyer', name: 'learning-opportunities' },
    actions: [
      {
        icon: 'article',
        link: 'https://medium.com/dscaefunai/3430cfff6b2f',
        title: 'Story',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://dsc.community.dev/e/mbzuvd/',
        title: 'About',
      },
    ],
    tags: ['Organizer', 'GDSC'],
    expandedTags: ['Organizer', 'GDSC', 'Learning', 'Inspiration', 'Growth'],
  },
  {
    sessionFormat: 'Workshop',
    title: 'Firebase Series',
    date: { month: 9, year: 2020 },
    description:
      '6-week virtual workshop series where we taught Firebase. Covered backend services, real-time databases, and hands-on codelabs end to end.',
    longDescription:
      'A 6-week virtual workshop series on Firebase covering backend services, real-time databases, and deployment. Participants completed hands-on codelabs and built projects.',
    curriculum: [
      'Firebase authentication and user management',
      'Realtime database design and operations',
      'Cloud Functions for serverless logic',
      'Deployment and hosting on Firebase',
    ],
    keyTakeaways: [
      'Firebase enables rapid backend development without managing infrastructure.',
      'Real-time databases simplify building collaborative and reactive apps.',
    ],
    image: { alt: 'Section of Event Flyer', name: 'firebase-series' },
    actions: [
      {
        icon: 'article',
        link: 'https://medium.com/dscaefunai/617772e53a8c',
        title: 'Story',
      },
    ],
    tags: ['Organizer', 'GDSC'],
    expandedTags: ['Organizer', 'GDSC', 'Firebase', 'Workshop Series', 'Backend'],
  },
  {
    title: 'Onboarding GDSC',
    date: { month: 9, year: 2020 },
    description:
      'The inaugural Google Developer Student Club info session at AE-FUNAI introducing the club mission and learning resources.',
    longDescription:
      'The inaugural Google Developer Student Club info session at AE-FUNAI. Introduced the club mission, learning paths, and community values to establish the foundation for ongoing student developer community.',
    sessionFormat: 'Keynote',
    curriculum: [
      'GDSC mission and global community',
      'Learning paths and available resources',
      'Events and activities planned for the year',
      'Getting involved and leadership roles',
    ],
    keyTakeaways: [
      'Student clubs provide structured support for technical skill development.',
      'Communities thrive on participation from all members with diverse interests.',
    ],
    resources: {
      slides: 'https://docs.google.com/presentation/d/1WvraEIbd4_8b97X2wKAIrzADyxDQSttlinBITdG_3pg/edit?usp=sharing',
    },
    image: { alt: 'Section of Event Flyer', name: 'gdsc-info-session' },
    actions: [
      {
        icon: 'slides',
        link: 'https://docs.google.com/presentation/d/1WvraEIbd4_8b97X2wKAIrzADyxDQSttlinBITdG_3pg/edit?usp=sharing',
        title: 'Slides',
      },
      {
        icon: 'aboutreadmore',
        link: 'https://dsc.community.dev/e/mm72hn/',
        title: 'About',
      },
      {
        icon: 'article',
        link: 'https://medium.com/dscaefunai/fd34bbf8520e',
        title: 'Story',
      },
    ],
    tags: ['Organizer', 'GDSC'],
    expandedTags: ['Organizer', 'GDSC', 'Onboarding', 'Student Club', 'Community'],
  },
];
