import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { JOURNAL } from '../data';

export default function Journal() {
  return (
    <section id="journal" className="relative overflow-hidden bg-bg py-16 md:py-24">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          title="Recent"
          highlight="thoughts"
          subtext="Field notes and research, shared in public as I learn them."
          action={
            <a
              href="https://x.com/alannnfx"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary gradient-ring hidden md:inline-flex"
            >
              <span>View all</span>
              <span aria-hidden>→</span>
            </a>
          }
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5">
          {JOURNAL.map((entry, i) => (
            <motion.a
              key={entry.title}
              href={`${entry.url}?s=20`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open(`${entry.url}?s=20`, '_blank', 'noopener,noreferrer');
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6 }}
              className="mac-panel mac-panel-hover group relative flex flex-col overflow-hidden rounded-3xl p-6 md:p-7"
            >
              {/* hover spotlight glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: 'radial-gradient(circle at 80% 0%, rgba(232,232,234,0.06), transparent 60%)' }}
              />

              {/* top row: logo + arrow */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-1 ring-white/10">
                  <img
                    src="/alan-logo.png"
                    alt="Alan"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke text-text-primary transition-all duration-300 group-hover:border-white/25 group-hover:bg-white/5 group-hover:rotate-45">
                  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              {/* title */}
              <h3 className="text-lg font-medium leading-snug text-text-primary md:text-xl">
                {entry.title}
              </h3>

              {/* metadata row */}
              <div className="mt-4 flex items-center gap-3">
                <span className="dev-mono uppercase tracking-[0.15em] text-muted">{entry.date}</span>
                <span className="h-1 w-1 rounded-full bg-stroke" />
                <span className="dev-mono uppercase tracking-[0.15em] text-muted">{entry.read}</span>
              </div>

              {/* animated accent bar */}
              <div className="mt-auto pt-6">
                <div className="h-[3px] w-10 origin-left rounded-full bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-white/40" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
