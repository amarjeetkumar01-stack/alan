import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useHls } from '../hooks/useHls';
import { HLS_SRC } from '../data';

gsap.registerPlugin(ScrollTrigger);

const SOCIALS = [
  { name: 'X', url: 'https://x.com/Alan_Earn' },
  { name: 'Telegram', url: 'https://t.me/Alan_Earn' },
];

export default function Contact() {
  const videoRef = useHls(HLS_SRC);
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Infinite GSAP marquee
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: 'none',
        repeat: -1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-bg pt-16 pb-8 md:pt-20 md:pb-12">
      {/* Background video — flipped vertically, heavier overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-y-[-1] object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* Marquee */}
        <div className="overflow-hidden border-y border-white/10 py-8 md:py-12">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="mx-4 text-5xl font-semibold tracking-tight text-text-primary/80 md:text-7xl lg:text-8xl font-display"
              >
                Building the future <span className="accent-gradient bg-clip-text text-transparent">•</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center px-6 py-20 text-center md:py-28">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">AI Creator &middot; Social Media Marketer</p>
          <h2 className="mb-10 text-5xl font-semibold tracking-tight text-text-primary md:text-7xl lg:text-8xl font-display">
            Start a conversation
          </h2>

          {/* Two CTAs: collab + paid promotion */}
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="https://x.com/Alan_Earn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-secondary gradient-ring"
            >
              <span>DM @Alan_Earn</span>
              <span aria-hidden>↗</span>
            </a>

            <a
              href="https://x.com/Alan_Earn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://x.com/Alan_Earn', '_blank', 'noopener,noreferrer');
              }}
              className="btn btn-lg btn-accent"
            >
              <span>Paid Promotion</span>
              <span aria-hidden>↗</span>
            </a>
          </div>

          {/* Paid promotion note */}
          <p className="mt-8 max-w-md text-sm text-muted">
            Building with AI by day, marketing it by night. Available for paid promotions, brand deals, and sponsored content. DM to discuss rates.
          </p>
        </div>

        {/* Footer bar */}
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center justify-between gap-6 border-t border-stroke px-6 pt-8 md:flex-row md:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                {s.name === 'Telegram' ? '@Alan_Earn' : s.name}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="dev-status-dot" />
            <span className="dev-mono text-muted">Available for projects</span>
          </div>
        </div>

        {/* Developer metadata strip */}
        <div className="mx-auto mt-8 flex w-full max-w-[1200px] flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 pb-2 md:justify-between md:px-10 lg:px-16">
          <span className="dev-mono text-muted/70">
            <span className="dev-syn">{'/* '}</span>Last updated {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}<span className="dev-syn">{' */'}</span>
          </span>
          <span className="dev-mono text-muted/70">
            Built by <span className="dev-syn-key">Alan</span>
          </span>
          <span className="dev-mono text-muted/70">Powered by AI</span>
        </div>
      </div>
    </section>
  );
}
