import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { AI_WORK, CRYPTO_WORK, type WorkItem } from '../data';

export default function SelectedWorks() {
  return (
    <section id="work" className="relative overflow-hidden bg-bg py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects I've"
          highlight="worked with"
          subtext="AI systems and crypto campaigns I've built and promoted. Click any project to see the work."
        />
      </div>

      {/* AI Projects — horizontal carousel scrolling left */}
      <div className="relative z-10 mt-12">
        <div className="mb-5 flex items-center gap-3 px-6 md:px-10 lg:px-16">
          <span className="dev-syn-key dev-mono">{'// '}</span>
          <span className="dev-mono uppercase tracking-[0.2em] text-muted">AI Projects</span>
        </div>
        <HorizontalCarousel items={AI_WORK} direction="left" />
      </div>

      {/* Crypto Projects — horizontal carousel scrolling right */}
      <div className="relative z-10 mt-12">
        <div className="mb-5 flex items-center gap-3 px-6 md:px-10 lg:px-16">
          <span className="dev-syn-key dev-mono">{'// '}</span>
          <span className="dev-mono uppercase tracking-[0.2em] text-muted">Crypto Projects</span>
        </div>
        <HorizontalCarousel items={CRYPTO_WORK} direction="right" />
      </div>
    </section>
  );
}

/**
 * Horizontal carousel: a single row of square cards that continuously
 * scrolls horizontally (duplicated for seamless loop). Edge-faded so cards
 * gracefully appear/disappear at both ends. Pauses on hover.
 */
function HorizontalCarousel({ items, direction }: { items: WorkItem[]; direction: 'left' | 'right' }) {
  // Duplicate enough copies to fill a wide viewport for a seamless loop.
  const loop = [...items, ...items, ...items, ...items];

  return (
    <div className="group/carousel relative">
      {/* edge fade mask */}
      <div
        className="pointer-events-none absolute inset-0 z-20"
        style={{
          background: 'linear-gradient(to right, hsl(0 0% 4%) 0%, transparent 6%, transparent 94%, hsl(0 0% 4%) 100%)',
        }}
      />
      <div
        className="overflow-hidden"
        style={{
          maskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, #000 5%, #000 95%, transparent)',
        }}
      >
        <motion.div
          className="flex w-max gap-4 px-6 md:gap-5 md:px-10 lg:px-16"
          animate={{ x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {loop.map((item, i) => (
            <WorkCard key={`${item.name}-${i}`} item={item} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

function WorkCard({ item }: { item: WorkItem }) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        window.open(item.url, '_blank', 'noopener,noreferrer');
      }}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className="mac-card group relative flex h-[220px] w-[220px] shrink-0 flex-col items-center justify-between overflow-hidden rounded-2xl p-5 md:h-[260px] md:w-[260px]"
    >
      {/* hover spotlight glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: 'radial-gradient(circle at 50% 35%, rgba(232,232,234,0.08), transparent 65%)' }}
      />

      {/* Center logo */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-white/[0.04] p-3 transition-transform duration-500 group-hover:scale-110 md:h-20 md:w-20">
          <img
            src={item.logo}
            alt={item.name}
            loading="lazy"
            className="h-full w-full object-contain"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = 'none';
              const fb = img.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = 'flex';
            }}
          />
          <span
            className="hidden h-full w-full items-center justify-center rounded-xl text-xl font-bold text-text-primary"
            style={{ display: 'none' }}
          >
            {item.name[0]}
          </span>
        </div>
      </div>

      {/* Bottom: name + See Work button */}
      <div className="flex w-full flex-col items-center gap-3">
        <span className="text-sm font-medium text-text-primary md:text-base">{item.name}</span>
        <span className="btn btn-secondary w-full justify-center !h-9 !px-3 text-xs group-hover:border-white/25">
          See Work
          <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </motion.a>
  );
}
