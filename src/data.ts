export type WorkItem = {
  name: string;
  category: string;
  description: string;
  productUrl: string;
  postUrl: string;
  logo: string;
};

export const WORK_ITEMS: WorkItem[] = [
  {
    name: 'Recursive',
    category: 'AI research',
    description: 'Introducing Flint, Recursive’s open-weight coding model for fast, local, offline use.',
    productUrl: 'https://recursive.com/',
    postUrl: 'https://x.com/alannnfx/status/2112951299256058135',
    logo: '/logos/work/recursive.png',
  },
  {
    name: 'General Compute',
    category: 'AI infrastructure',
    description: 'Exploring its memory-first inference hardware and expanding Positron AI deployment.',
    productUrl: 'https://www.generalcompute.com/',
    postUrl: 'https://x.com/alannnfx/status/2112600882923843666',
    logo: '/logos/work/general-compute.png',
  },
  {
    name: 'VYB by Coco Labs',
    category: 'Design AI',
    description: 'Showcasing VYB’s brand-true AI designs, built in layers that stay fully editable.',
    productUrl: 'https://cocolabs.ai/vyb',
    postUrl: 'https://x.com/alannnfx/status/2112589160079048790',
    logo: '/logos/work/vyb.png',
  },
  {
    name: 'Tuesday Labs Reserve',
    category: 'Robotics',
    description: 'Introducing reservations for Voxel Series-1, a home robot designed to help around the house.',
    productUrl: 'https://tuesdaylabs.com/reserve',
    postUrl: 'https://x.com/alannnfx/status/2112570772141359576',
    logo: '/logos/work/tuesday-labs.png',
  },
  {
    name: 'Skyfall',
    category: 'World models',
    description: 'Launching SKY-001, an engineering world model created for CAD and BIM design.',
    productUrl: 'https://skyfall.ai/',
    postUrl: 'https://x.com/alannnfx/status/2112247702872641680',
    logo: '/logos/work/skyfall.png',
  },
  {
    name: 'Elorian',
    category: 'Visual AI',
    description: 'Introducing Glimpse, Elorian’s visual-thinking model for reasoning through images and video.',
    productUrl: 'https://elorian.ai/',
    postUrl: 'https://x.com/alannnfx/status/2111147100969042319',
    logo: '/logos/work/elorian.png',
  },
  {
    name: 'VN.AI',
    category: 'AI filmmaking',
    description: 'Sharing VN Studio, an AI production suite with human-authorship tracking built in.',
    productUrl: 'https://www.vn.ai/',
    postUrl: 'https://x.com/alannnfx/status/2111093765066932678',
    logo: '/logos/work/vn-ai.png',
  },
  {
    name: 'Envato',
    category: 'Creative tools',
    description: 'Showing how Envato combines artist-made assets with flexible, iterative AI editing.',
    productUrl: 'https://linktr.ee/Envato',
    postUrl: 'https://x.com/alannnfx/status/2110938942635925668',
    logo: '/logos/work/envato.svg',
  },
  {
    name: 'Bland',
    category: 'AI agents',
    description: 'Exploring branded iMessage agents that answer questions, make bookings, and accept payments.',
    productUrl: 'https://www.bland.ai/',
    postUrl: 'https://x.com/alannnfx/status/2110788673524650289',
    logo: '/logos/work/bland.png',
  },
  {
    name: 'Self',
    category: 'Identity & privacy',
    description: 'Introducing Agent Vault for controlled agent logins and payments without exposing card details.',
    productUrl: 'https://self.xyz/',
    postUrl: 'https://x.com/alannnfx/status/2110778898149695699',
    logo: '/logos/work/self.png',
  },
];

export type BuildItem = {
  title: string;
  blurb: string;
  url?: string;
};

// Add future builds here. Empty slots are shown until the first build is added.
// Example: { title: 'Project name', blurb: 'A short one-line description.', url: 'https://…' }
export const BUILDS: BuildItem[] = [];
