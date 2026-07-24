import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Stat = {
  value?: number;
  text?: string;
  suffix?: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 50, suffix: '+', label: 'Models explored' },
  { text: 'AI & Web3', label: 'Content Creator' },
  { value: 100, suffix: '%', label: 'Built in public' },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  // Count-up animation triggered on scroll into view
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.stat-number').forEach((el) => {
        const target = Number(el.dataset.value);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val));
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-bg py-12 md:py-16">
      {/* Narrower, centered container so the 3 stats feel grouped, not scattered */}
      <div className="mx-auto max-w-[840px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mac-panel grid grid-cols-3 divide-x divide-white/8 overflow-hidden rounded-2xl"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex flex-col items-center justify-center gap-1.5 px-4 py-7 text-center md:py-8"
            >
              {stat.text ? (
                // Value-based highlight (no count-up, no fake numbers)
                <span className="accent-gradient bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl font-display">
                  {stat.text}
                </span>
              ) : (
                <div className="flex items-baseline">
                  <span
                    className="stat-number text-5xl font-bold tracking-tight text-text-primary md:text-6xl lg:text-7xl font-display tabular-nums"
                    data-value={stat.value}
                  >
                    0
                  </span>
                  {stat.suffix && (
                    <span className="accent-gradient bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl font-display">
                      {stat.suffix}
                    </span>
                  )}
                </div>
              )}
              <span className="dev-mono uppercase tracking-[0.16em] text-muted">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
