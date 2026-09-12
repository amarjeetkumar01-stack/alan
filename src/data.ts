export const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export type WorkItem = {
  name: string;
  url: string;
  logo: string;
  additionalPosts?: string[];
};

// AI projects
export const AI_WORK: WorkItem[] = [
  { name: 'Tavus', url: 'https://x.com/alannnfx/status/2098098690749776186?s=20', logo: '/logos/tavus.png' },
  {
    name: 'Sapient Intelligence',
    url: 'https://x.com/alannnfx/status/2096397114435838090?s=20',
    logo: '/logos/sapient-intelligence.png',
    additionalPosts: [
      'https://x.com/alannnfx/status/2094968399889870905?s=20',
      'https://x.com/alannnfx/status/2093870768677703770?s=20',
    ],
  },
  { name: 'Fanvue', url: 'https://x.com/alannnfx/status/2065678107764502539', logo: '/logos/fanvue.png' },
  { name: 'Z.ai', url: 'https://x.com/alannnfx/status/2074374165331882391', logo: '/logos/zai.svg' },
  { name: 'Atomic Chat', url: 'https://x.com/alannnfx/status/2071258839589265432', logo: '/logos/atomicchat.png' },
  { name: 'TSL', url: 'https://x.com/alannnfx/status/2061482181176987686', logo: '/logos/tsl.png' },
  { name: 'NATIX Network', url: 'https://x.com/alannnfx/status/2079794202540683652', logo: '/logos/natix.png' },
];

// Crypto projects
export const CRYPTO_WORK: WorkItem[] = [
  { name: 'Lastpack', url: 'https://x.com/alannnfx/status/2075063803759485428', logo: '/logos/lastpack.png' },
  { name: 'Rally', url: 'https://x.com/alannnfx/status/2027091422391021616', logo: '/logos/rally.png' },
  { name: 'Argue', url: 'https://x.com/alannnfx/status/2022563415504621611', logo: '/logos/argue.png' },
  { name: 'Syndicate', url: 'https://x.com/alannnfx/status/2056245610672746767', logo: '/logos/syndicate.png' },
  { name: 'Kosmosdotfyi', url: 'https://x.com/alannnfx/status/2078354459881861200', logo: '/logos/kosmos.png' },
];

export type XPost = {
  id: string;
  url: string;
  label: string;
};

export const X_POSTS: XPost[] = [
  { id: '2061325835047743568', url: 'https://x.com/alannnfx/status/2061325835047743568', label: 'AI Research' },
  { id: '2070180935350579337', url: 'https://x.com/alannnfx/status/2070180935350579337', label: 'AI Agents' },
  { id: '2065011204465324197', url: 'https://x.com/alannnfx/status/2065011204465324197', label: 'Automation' },
  { id: '2062779167217955229', url: 'https://x.com/alannnfx/status/2062779167217955229', label: 'Future Tech' },
];

export type Project = {
  title: string;
  subtitle: string;
  category: string;
  image: string;
  span: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'Automotive Motion',
    subtitle: 'AI-generated cinematic motion study',
    category: 'Research',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80',
    span: 'md:col-span-7',
  },
  {
    title: 'Urban Architecture',
    subtitle: 'Generative design systems for cities',
    category: 'Workflows',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-5',
  },
  {
    title: 'Human Perspective',
    subtitle: 'Multimodal agents that understand people',
    category: 'AI Agents',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1200&q=80',
    span: 'md:col-span-5',
  },
  {
    title: 'Brand Identity',
    subtitle: 'AI-first identity systems at scale',
    category: 'Automation',
    image:
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1400&q=80',
    span: 'md:col-span-7',
  },
];

export type JournalEntry = {
  title: string;
  url: string;
  image: string;
  read: string;
  date: string;
};

export const JOURNAL: JournalEntry[] = [
  {
    title: 'Claude Fable 5 vs GLM 5.2',
    url: 'https://x.com/alannnfx/status/2072569518422200663',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&q=80',
    read: 'Read',
    date: 'Jul 2026',
  },
  {
    title: 'How to use 3b model for Free',
    url: 'https://x.com/alannnfx/status/2071258839589265432',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7480?auto=format&fit=crop&w=200&q=80',
    read: 'Read',
    date: 'Jul 2026',
  },
  {
    title: 'My Obsidian and Hermes Combo',
    url: 'https://x.com/alannnfx/status/2070180935350579337',
    image:
      'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=200&q=80',
    read: 'Read',
    date: 'Jul 2026',
  },
  {
    title: 'Comparison between PT-5.5 vs GLM 5.2 vs Opus 4.8 vs Fugu',
    url: 'https://x.com/alannnfx/status/2070110059858915791',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=200&q=80',
    read: 'Read',
    date: 'Jul 2026',
  },
];

export const EXPLORATIONS = [
  { image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?auto=format&fit=crop&w=600&q=80', title: 'Neural Bloom' },
  { image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=600&q=80', title: 'Latent Space' },
  { image: 'https://images.unsplash.com/photo-1633186710895-309db2eca9e4?auto=format&fit=crop&w=600&q=80', title: 'Gradient Field' },
  { image: 'https://images.unsplash.com/photo-1614850523060-8da1d56ae167?auto=format&fit=crop&w=600&q=80', title: 'Synthesis' },
  { image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?auto=format&fit=crop&w=600&q=80', title: 'Diffusion' },
  { image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?auto=format&fit=crop&w=600&q=80', title: 'Inference' },
];
