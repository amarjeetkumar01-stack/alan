export const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export type WorkItem = {
  name: string;
  productUrl: string;
  postUrl: string;
  logo: string;
  category: string;
  blurb: string;
};

// Brand collaborations — each pairs the product site with Alan's matching X post.
export const WORKED_ON: WorkItem[] = [
  {
    name: 'Recursive',
    productUrl: 'https://recursive.com/',
    postUrl: 'https://x.com/alannnfx/status/2112951299256058135',
    logo: '/logos/recursive.png',
    category: 'AI Research',
    blurb: 'Self-improving superintelligence lab — launch campaign for Flint, its open-weights 40B coding model.',
  },
  {
    name: 'General Compute',
    productUrl: 'https://www.generalcompute.com/',
    postUrl: 'https://x.com/alannnfx/status/2112600882923843666',
    logo: '/logos/generalcompute.png',
    category: 'AI Infrastructure',
    blurb: 'The inference cloud for alternative chips — coverage of its memory-first hardware roadmap.',
  },
  {
    name: 'VYB · Coco Labs',
    productUrl: 'https://cocolabs.ai/vyb',
    postUrl: 'https://x.com/alannnfx/status/2112589160079048790',
    logo: '/logos/vyb.png',
    category: 'AI Design',
    blurb: 'The first AI design model — turns real brand assets into editable layered designs. Beta launch promo.',
  },
  {
    name: 'Tuesday Labs Reserve',
    productUrl: 'https://tuesdaylabs.com/reserve',
    postUrl: 'https://x.com/alannnfx/status/2112570772141359576',
    logo: '/logos/tuesdaylabs.png',
    category: 'Robotics',
    blurb: 'Reservation launch for Voxel Series-1, the home robot from the NYC robotics lab and design studio.',
  },
  {
    name: 'Skyfall',
    productUrl: 'https://skyfall.ai/',
    postUrl: 'https://x.com/alannnfx/status/2112247702872641680',
    logo: '/logos/skyfall.svg',
    category: 'World Models',
    blurb: 'Engineering world models for the autonomous enterprise — launch of SKY-001 for CAD & BIM design.',
  },
  {
    name: 'Elorian',
    productUrl: 'https://elorian.ai/',
    postUrl: 'https://x.com/alannnfx/status/2111147100969042319',
    logo: '/logos/elorian.svg',
    category: 'Visual Reasoning',
    blurb: 'Frontier intelligence lab — launch promo for Glimpse, a model that reasons through images and video.',
  },
  {
    name: 'VN.AI',
    productUrl: 'https://www.vn.ai/',
    postUrl: 'https://x.com/alannnfx/status/2111093765066932678',
    logo: '/logos/vnai.png',
    category: 'AI Video',
    blurb: 'AI studio for video and images with authorship tracking — vn studio launch campaign.',
  },
  {
    name: 'Envato',
    productUrl: 'https://linktr.ee/Envato',
    postUrl: 'https://x.com/alannnfx/status/2110938942635925668',
    logo: '/logos/envato.png',
    category: 'Creative Tools',
    blurb: 'Creative-asset marketplace — campaign for AI photo editing that restyles real photos.',
  },
  {
    name: 'Bland',
    productUrl: 'https://www.bland.ai/',
    postUrl: 'https://x.com/alannnfx/status/2110788673524650289',
    logo: '/logos/bland.png',
    category: 'Voice AI',
    blurb: 'Enterprise voice AI platform — promo for turning business websites into conversational agents.',
  },
  {
    name: 'Self',
    productUrl: 'https://self.xyz/',
    postUrl: 'https://x.com/alannnfx/status/2110778898149695699',
    logo: '/logos/self.png',
    category: 'Identity & Agents',
    blurb: 'Identity infrastructure for humans and AI agents — Agent Vault launch coverage.',
  },
];

export type BuildItem = {
  title: string;
  blurb: string;
  tag: string;
  url?: string;
};

// Placeholder slots — swap in real builds as they ship. Leave `url` off to hide the link.
export const BUILDS: BuildItem[] = [
  {
    title: 'Project title',
    blurb: 'A one-line description of the build — what it does, who it is for, and why it matters.',
    tag: 'Coming soon',
  },
  {
    title: 'Project title',
    blurb: 'A one-line description of the build — what it does, who it is for, and why it matters.',
    tag: 'Coming soon',
  },
];
