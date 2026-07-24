import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

type Service = {
  num: string;
  title: string;
  desc: string;
  accent: string;
  glyph: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Brand Collaborations',
    desc: 'Strategic partnerships with AI, Crypto, and tech brands. Authentic campaigns that drive real engagement and awareness.',
    accent: '#E8E8EA',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h4v4M20 4l-6 6M8 20H4v-4M4 20l6-6" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'AI Agent Development',
    desc: 'Custom AI agents with memory, tool calling, automation, and multi-step workflows built for creators, startups, and businesses.',
    accent: '#A8A8B0',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="7" width="14" height="11" rx="2.5" />
        <path d="M12 3v4M8.5 12h.01M15.5 12h.01M9 16h6" />
        <path d="M2 12h3M19 12h3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'AI Content Strategy',
    desc: 'Content systems, launch campaigns, and growth strategies that help AI products reach the right audience.',
    accent: '#A0C4E8',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18M3 12h18M3 18h12" />
        <circle cx="19" cy="18" r="2.5" />
        <path d="M19 18.5l1 1 2-2" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Crypto Partnerships',
    desc: 'Content marketing, product launches, community campaigns, ambassador programs, and long-term collaborations for Web3 projects.',
    accent: '#C9A86A',
    glyph: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 12l4-4 4 4-4 4z" />
        <circle cx="12" cy="12" r="9.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-bg py-16 md:py-24">
      <div className="mac-aurora" aria-hidden />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Services"
          title="What I"
          highlight="offer"
          subtext="Partnering with AI, crypto, and tech brands to build, launch, and grow."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -6 }}
              className="mac-panel mac-panel-hover group relative flex flex-col overflow-hidden rounded-3xl p-7 md:p-8"
            >
              {/* Hover glow */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at 70% 0%, ${service.accent}1a, transparent 60%)` }}
              />

              {/* Top row: large faded number + icon */}
              <div className="mb-10 flex items-start justify-between">
                <span
                  className="text-5xl font-bold tracking-tighter text-text-primary/10 transition-colors duration-500 group-hover:text-text-primary/20 font-display"
                >
                  {service.num}
                </span>
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-2xl border border-stroke bg-white/[0.03] transition-all duration-300 group-hover:scale-110 group-hover:border-white/20"
                  style={{ color: service.accent }}
                >
                  {service.glyph}
                </span>
              </div>

              {/* Title + description */}
              <h3 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl font-display">
                {service.title}
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-[15px]">
                {service.desc}
              </p>

              {/* Bottom accent bar */}
              <div className="mt-auto pt-6">
                <div
                  className="h-1 w-12 origin-left rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ background: service.accent }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
