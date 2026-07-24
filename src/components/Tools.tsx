import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

type Tool = {
  name: string;
  url: string;
  // Official brand logo image (transparent PNG/SVG). Falls back to the
  // tool name's first letter if the image fails to load.
  logo: string;
  accent: string;
  category: string;
};

/* Real brand logos via CDN. Each is the official mark on transparent bg. */
const TOOLS: Tool[] = [
  {
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    category: 'Assistant',
    accent: '#10A37F',
    logo: '/logos/openai.png',
  },
  {
    name: 'Claude',
    url: 'https://claude.ai',
    category: 'Assistant',
    accent: '#D97757',
    logo: '/logos/anthropic.svg',
  },
  {
    name: 'Gemini',
    url: 'https://gemini.google.com',
    category: 'Assistant',
    accent: '#4285F4',
    logo: '/logos/googlegemini.svg',
  },
  {
    name: 'GLM',
    url: 'https://chatglm.cn',
    category: 'Model',
    accent: '#8B5CF6',
    logo: '/logos/glm.png',
  },
  {
    name: 'Cursor',
    url: 'https://cursor.com',
    category: 'Editor',
    accent: '#A88CFF',
    logo: '/logos/cursor.svg',
  },
  {
    name: 'Perplexity',
    url: 'https://perplexity.ai',
    category: 'Search',
    accent: '#21D4FD',
    logo: '/logos/perplexity.svg',
  },
  {
    name: 'NotebookLM',
    url: 'https://notebooklm.google.com',
    category: 'Research',
    accent: '#FF8E8E',
    logo: '/logos/google.svg',
  },
  {
    name: 'n8n',
    url: 'https://n8n.io',
    category: 'Automation',
    accent: '#FF6B6B',
    logo: '/logos/n8n.svg',
  },
  {
    name: 'OpenAI',
    url: 'https://openai.com',
    category: 'Lab',
    accent: '#10A37F',
    logo: '/logos/openai.png',
  },
  {
    name: 'Anthropic',
    url: 'https://anthropic.com',
    category: 'Lab',
    accent: '#D4A374',
    logo: '/logos/anthropic.svg',
  },
  {
    name: 'Hermes',
    url: 'https://nousresearch.com',
    category: 'Agent',
    accent: '#6366F1',
    logo: '/logos/hermes.png',
  },
  {
    name: 'Obsidian',
    url: 'https://obsidian.md',
    category: 'Notes',
    accent: '#8B5CF6',
    logo: '/logos/obsidian.svg',
  },
  {
    name: 'X',
    url: 'https://x.com',
    category: 'Social',
    accent: '#FFFFFF',
    logo: '/logos/x.svg',
  },
  {
    name: 'Midjourney',
    url: 'https://midjourney.com',
    category: 'Image',
    accent: '#A0AEC0',
    logo: '/logos/midjourney.png',
  },
  {
    name: 'Llama',
    url: 'https://llama.com',
    category: 'Model',
    accent: '#0866FF',
    logo: '/logos/llama.svg',
  },
  {
    name: 'Mistral',
    url: 'https://mistral.ai',
    category: 'Model',
    accent: '#FFA500',
    logo: '/logos/mistralai.svg',
  },
  {
    name: 'Groq',
    url: 'https://groq.com',
    category: 'Inference',
    accent: '#F55036',
    logo: '/logos/groq.png',
  },
  {
    name: 'GitHub',
    url: 'https://github.com',
    category: 'Code',
    accent: '#FFFFFF',
    logo: '/logos/github.svg',
  },
];

export default function Tools() {
  // Split into two rows — each scrolls in the opposite direction for depth.
  const mid = Math.ceil(TOOLS.length / 2);
  const row1 = [...TOOLS.slice(0, mid), ...TOOLS.slice(0, mid)];
  const row2 = [...TOOLS.slice(mid), ...TOOLS.slice(mid)];
  return (
    <section id="tools" className="relative overflow-hidden bg-bg py-16 md:py-24">
      <div className="mac-aurora" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Daily Stack"
          title="What I"
          highlight="use most"
          subtext="The AI models and tools I reach for every single day to research, build, and ship."
        />
      </div>

      {/* Two horizontal carousels — opposite directions */}
      <div className="relative z-10 mt-12 flex flex-col gap-4 md:gap-5">
        <CarouselRow items={row1} direction="left" />
        <CarouselRow items={row2} direction="right" />
      </div>
    </section>
  );
}

function CarouselRow({ items, direction }: { items: Tool[]; direction: 'left' | 'right' }) {
  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
      }}
    >
      <motion.div
        className="flex w-max gap-3 px-6 md:gap-4 md:px-10 lg:px-16"
        animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: 36, ease: 'linear', repeat: Infinity }}
      >
        {items.map((tool, i) => (
          <ToolCard key={`${tool.name}-${i}`} tool={tool} />
        ))}
      </motion.div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        window.open(tool.url, '_blank', 'noopener,noreferrer');
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="mac-card group relative flex h-[140px] w-[140px] shrink-0 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl p-4 md:h-[160px] md:w-[160px]"
      >
        {/* Hover glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `radial-gradient(circle at 50% 30%, ${tool.accent}22, transparent 70%)` }}
        />
              {/* Official brand logo — consistent box with padding so all logos
                  look uniform regardless of source format (SVG / PNG favicon) */}
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.03] p-2.5 transition-transform duration-500 group-hover:scale-110">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  loading="lazy"
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    // Fallback: first letter badge in brand color
                    const img = e.currentTarget as HTMLImageElement;
                    img.style.display = 'none';
                    const fallback = img.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <span
                  className="hidden h-full w-full items-center justify-center rounded-xl text-lg font-bold"
                  style={{ background: `${tool.accent}22`, color: tool.accent, display: 'none' }}
                >
                  {tool.name[0]}
                </span>
              </div>
              <div className="text-center">
                <p className="text-sm text-text-primary">{tool.name}</p>
                <p className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-muted">{tool.category}</p>
              </div>
            </motion.a>
  );
}
