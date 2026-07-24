import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useHls } from '../hooks/useHls';
import { HLS_SRC } from '../data';

const ROLES = ['Creator', 'Explorer', 'Builder', 'Marketer'];

export default function Hero() {
  const videoRef = useHls(HLS_SRC);
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle roles every 2s
  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2000);
    return () => clearInterval(id);
  }, []);

  // GSAP entrance timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo('.name-reveal', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.1 });
      tl.fromTo(
        '.blur-in',
        { opacity: 0, filter: 'blur(10px)', y: 20 },
        { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1, stagger: 0.1, delay: 0.3 },
        '-=0.9',
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const scrollToWork = () => document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background HLS video */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 h-48 w-full bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Available status indicator */}
        <div className="blur-in mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface/60 px-4 py-2 backdrop-blur-md">
          <span className="dev-status-dot" />
          <span className="dev-mono text-muted">Available for AI Projects</span>
        </div>

        <h1 className="name-reveal mb-8 text-7xl font-bold leading-[0.95] tracking-tight text-text-primary md:text-8xl lg:text-[9rem] font-display">
          Alan
        </h1>

        <p className="blur-in text-lg text-text-primary/90 md:text-xl">
          An AI{' '}
          <span
            key={roleIndex}
            className="inline-block animate-role-fade-in text-text-primary font-semibold"
          >
            {ROLES[roleIndex]}
          </span>{' '}
          building the future.
        </p>

        <p className="blur-in mt-5 max-w-lg text-sm leading-relaxed text-muted md:text-base">
          Exploring models, agents, and automation. Researching the frontier, simplifying the complex,
          and shipping AI-first products in public.
        </p>

        <div className="blur-in mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button onClick={scrollToWork} className="btn btn-lg btn-primary">
            See Works
          </button>
          <button
            onClick={scrollToContact}
            className="btn btn-lg btn-secondary gradient-ring"
          >
            Reach out
            <span aria-hidden>↗</span>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <div className="animate-scroll-down absolute inset-x-0 h-4 accent-gradient" />
        </div>
      </div>
    </section>
  );
}
