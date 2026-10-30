export type ProjectFilterCategory =
  | 'ALL'
  | 'APPS'
  | 'AI'
  | 'TOOLS'
  | 'EXPERIMENTS';

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption: string;
}

export interface ProjectFeatureItem {
  title: string;
  description: string;
  note?: string;
}

export interface ProjectTextSpecimen {
  windowLabel: string;
  modeLabel: string;
  primaryLines: string[];
  secondaryLines: string[];
  footerMeta: string;
  theme: 'dark' | 'light';
}

export interface Project {
  number: string;
  slug: string;
  name: string;
  category: string;
  filterCategories: Exclude<ProjectFilterCategory, 'ALL'>[];
  status: string;
  leadHook: string;
  tagline: string;
  shortDescription: string;
  exploreLabel: string;
  overview: string[];
  featuresHeading: string;
  features: ProjectFeatureItem[];
  potentialScopeHeading?: string;
  potentialScopeNote?: string;
  potentialScopeItems?: string[];
  techStack: string[];
  platforms: string[];
  tags: string[];
  textSpecimens: ProjectTextSpecimen[];
  screenshots: ProjectScreenshot[];
  links: {
    productWebsiteUrl?: string;
    githubUrl?: string;
    downloadUrl?: string;
    downloadStatusLabel: string;
  };
}

export const PROJECT_FILTERS: ProjectFilterCategory[] = [
  'ALL',
  'APPS',
  'AI',
  'TOOLS',
  'EXPERIMENTS',
];

export const PROJECTS: Project[] = [
  {
    number: '01',
    slug: 'overly',
    name: 'OverLy',
    category: 'DESKTOP APPLICATION / MUSIC',
    filterCategories: ['APPS', 'TOOLS'],
    status: 'IN DEVELOPMENT',
    leadHook: 'Music, without the boundaries of a player window.',
    tagline: 'MUSIC, WITHOUT THE BOUNDARIES OF A PLAYER WINDOW.',
    shortDescription:
      'A floating lyrics experience designed to make music feel more connected to your desktop.',
    exploreLabel: 'EXPLORE OVERLY',
    overview: [
      'OverLy is a desktop application being developed under IntDoorLab to bring real-time synchronised lyrics into an unobtrusive, customisable floating interface.',
      'Designed around active desktop workflows, OverLy explores ways to keep music present without interrupting focus — combining responsive lyric timing, adaptable overlay modes, and artwork-driven visual treatments that retain OverLy’s own product identity.',
    ],
    featuresHeading: 'CONCEPTS & CAPABILITIES IN DEVELOPMENT',
    features: [
      {
        title: 'Floating Lyrics Overlay',
        description:
          'Always-on-top desktop surface engineered to sit cleanly beside active windows without obstructing work.',
      },
      {
        title: 'Real-Time Synchronised Lyrics',
        description:
          'Time-aligned lyric progression synchronised to active desktop media playback.',
      },
      {
        title: 'Dynamic Album Artwork Theming',
        description:
          'Adaptive colour and atmospheric styling derived from the currently playing track.',
      },
      {
        title: 'Customisable Layouts',
        description:
          'Multiple display densities ranging from compact minimal overlays to expanded lyric views.',
      },
      {
        title: 'Desktop Music Integration',
        description:
          'Direct integration with system-level playback state and media session metadata.',
      },
      {
        title: 'Platform Roadmap',
        description:
          'Active development focused on Windows support, with future macOS support planned.',
      },
    ],
    potentialScopeHeading: 'EXPLORED PLAYBACK SOURCES',
    potentialScopeNote:
      'Target playback ecosystems under exploration and ongoing integration — compatibility varies by platform and development stage:',
    potentialScopeItems: [
      'Windows Media Controls (SMTC)',
      'Spotify',
      'Apple Music',
      'YouTube Music',
      'Tidal',
      'Browser-Based Music Players',
    ],
    techStack: ['Electron', 'JavaScript', 'HTML / CSS', 'Windows Media Session'],
    platforms: ['Windows (In Development)', 'macOS (Planned)'],
    tags: ['WINDOWS', 'LYRICS', 'DESKTOP', 'MUSIC'],
    textSpecimens: [
      {
        windowLabel: 'OVERLY SPECIMEN',
        modeLabel: 'VIEW 01 — SYNCHRONISED LYRICS SURFACE',
        primaryLines: [
          '01:42.18 — The night is quiet',
          '01:46.04 — but the music speaks',
          '01:50.90 — to everything in motion',
        ],
        secondaryLines: [
          'LAYOUT: FLOATING OVERLAY',
          'THEMING: DYNAMIC ARTWORK PALETTE',
          'SYNC: REAL-TIME PLAYBACK TRACKING',
        ],
        footerMeta: 'WINDOWS DESKTOP // IN DEVELOPMENT',
        theme: 'dark',
      },
      {
        windowLabel: 'OVERLY // COMPACT BAR SPECIMEN',
        modeLabel: 'VIEW 02 — MINIMAL WORKFLOW MODE',
        primaryLines: [
          '[ PLAYING ]  but the music speaks  —  01:46 / 03:28',
        ],
        secondaryLines: [
          'MODE: COMPACT SINGLE-LINE OVERLAY',
          'BEHAVIOUR: LOW-FOOTPRINT DESKTOP PRESENCE',
        ],
        footerMeta: 'CUSTOMISABLE LAYOUT CONCEPT',
        theme: 'dark',
      },
      {
        windowLabel: 'OVERLY // SYSTEM INTEGRATION SPECIMEN',
        modeLabel: 'VIEW 03 — MEDIA SESSION PIPELINE',
        primaryLines: [
          'SOURCE -> SYSTEM MEDIA CONTROLS -> LYRIC RESOLUTION -> OVERLAY RENDER',
        ],
        secondaryLines: [
          'PRIMARY TARGET: WINDOWS',
          'FUTURE ROADMAP: MACOS',
        ],
        footerMeta: 'ARCHITECTURE OVERVIEW',
        theme: 'light',
      },
    ],
    screenshots: [],
    links: {
      productWebsiteUrl: '',
      githubUrl: '',
      downloadUrl: '',
      downloadStatusLabel: 'IN DEVELOPMENT',
    },
  },
  {
    number: '02',
    slug: 'friday',
    name: 'Friday',
    category: 'AI ASSISTANT / AUTOMATION',
    filterCategories: ['AI', 'APPS', 'TOOLS', 'EXPERIMENTS'],
    status: 'EXPERIMENTAL',
    leadHook: 'More than a conversation.',
    tagline: 'MORE THAN A CONVERSATION.',
    shortDescription:
      'An ongoing exploration of AI, voice interaction, and an assistant that can understand, interact, and get things done.',
    exploreLabel: 'EXPLORE FRIDAY',
    overview: [
      'Friday is an ongoing experimental AI assistant project developed inside IntDoorLab to study how conversational reasoning, voice interfaces, and direct system actions can operate together on the desktop.',
      'Rather than a commercial off-the-shelf product, Friday serves as an active research and engineering environment for testing tool execution, local context memory, browser interaction, and assistive automation.',
    ],
    featuresHeading: 'RESEARCH & DEVELOPMENT OBJECTIVES',
    features: [
      {
        title: 'Voice Interaction',
        description:
          'Natural spoken input and conversational feedback loops for hands-free desktop assistance.',
      },
      {
        title: 'Desktop Automation',
        description:
          'Coordinating multi-step local tasks across system utilities and everyday workflows.',
      },
      {
        title: 'File & Browser Operations',
        description:
          'Structured file inspection, organisation, and assisted browser navigation.',
      },
      {
        title: 'AI-Powered Reasoning & Tool Integrations',
        description:
          'Connecting language-model reasoning with deterministic local tools and actions.',
      },
      {
        title: 'Personal Memory',
        description:
          'Context retention across sessions to support continuity in ongoing tasks.',
      },
      {
        title: 'Application & Media Control',
        description:
          'Interfacing with desktop applications and Windows media controls.',
      },
    ],
    techStack: ['JavaScript', 'Python', 'Electron', 'HTML / CSS', 'LLM Tooling'],
    platforms: ['Desktop Research Environment (Windows)'],
    tags: ['AI', 'AUTOMATION', 'VOICE', 'EXPERIMENTAL'],
    textSpecimens: [
      {
        windowLabel: 'FRIDAY SPECIMEN',
        modeLabel: 'VIEW 01 — COMMAND & WORKFLOW DISPATCH',
        primaryLines: [
          'Ask Friday anything...',
          '/ Open project workspace',
          '/ Summarise local documents',
          '/ Check active desktop tasks',
        ],
        secondaryLines: [
          'STATE: EXPERIMENTAL BUILD',
          'FOCUS: VOICE + DESKTOP AUTOMATION + REASONING',
        ],
        footerMeta: 'ONGOING EXPERIMENTAL PROJECT',
        theme: 'dark',
      },
      {
        windowLabel: 'FRIDAY // TOOL EXECUTION LOOP',
        modeLabel: 'VIEW 02 — CAPABILITY EXPLORATION',
        primaryLines: [
          'INPUT (VOICE / TEXT) -> REASONING -> TOOL DISPATCH -> LOCAL CONTEXT',
        ],
        secondaryLines: [
          'MODULES: FILE OPS // BROWSER // MEMORY // MEDIA CONTROLS',
        ],
        footerMeta: 'INTERNAL R&D ENVIRONMENT',
        theme: 'light',
      },
    ],
    screenshots: [],
    links: {
      productWebsiteUrl: '',
      githubUrl: '',
      downloadUrl: '',
      downloadStatusLabel: 'EXPERIMENTAL BUILD',
    },
  },
  {
    number: '03',
    slug: 'things',
    name: 'Things',
    category: 'PRODUCTIVITY / AI',
    filterCategories: ['APPS', 'AI', 'EXPERIMENTS'],
    status: 'PLANNING / EXPERIMENTAL',
    leadHook: 'Give your thoughts somewhere to go.',
    tagline: 'GIVE YOUR THOUGHTS SOMEWHERE TO GO.',
    shortDescription:
      'An experiment in turning unstructured thoughts into organised ideas, plans, and actions.',
    exploreLabel: 'EXPLORE THINGS',
    overview: [
      'Things is an AI-assisted personal organisation application concept exploring calmer, lower-friction ways to capture thoughts and everyday responsibilities.',
      'The project investigates how unstructured natural-language input can be transformed into clear, structured ideas, plans, and actions without heavy manual categorisation.',
    ],
    featuresHeading: 'CONCEPTUAL EXPLORATIONS',
    features: [
      {
        title: 'Natural-Language Capture',
        description:
          'Writing thoughts and intentions plainly before structuring them into actionable items.',
      },
      {
        title: 'Structured Information Synthesis',
        description:
          'Exploring AI-assisted parsing to turn loose notes into organised ideas, plans, and priorities.',
      },
      {
        title: 'Calm Everyday Interface',
        description:
          'Studying minimal, low-noise layouts that reduce friction in daily planning.',
      },
    ],
    techStack: ['Concept Architecture', 'Interface Prototyping', 'AI Parsing Exploration'],
    platforms: ['Cross-Platform Concept'],
    tags: ['PRODUCTIVITY', 'AI', 'ORGANISATION', 'CONCEPT'],
    textSpecimens: [
      {
        windowLabel: 'THINGS SPECIMEN',
        modeLabel: 'VIEW 01 — STRUCTURED VIEWS',
        primaryLines: [
          "[ INBOX ]   Capture what's on your mind",
          '[ TODAY ]   What matters right now',
          "[ PLANNED ] What's coming next",
          '[ SOMEDAY ] Ideas worth keeping',
        ],
        secondaryLines: [
          'STAGE: PLANNING / EXPERIMENTAL',
          'APPROACH: UNSTRUCTURED THOUGHTS -> ORGANISED ACTIONS',
        ],
        footerMeta: 'CONCEPT DEVELOPMENT',
        theme: 'light',
      },
    ],
    screenshots: [],
    links: {
      productWebsiteUrl: '',
      githubUrl: '',
      downloadUrl: '',
      downloadStatusLabel: 'PLANNING STAGE',
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
