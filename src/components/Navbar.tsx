import { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const LINKS = ['Home', 'Work', 'Journal', 'Tools', 'Services'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight active section
  useEffect(() => {
    const ids = ['home', 'work', 'journal', 'tools', 'services'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            const map: Record<string, string> = {
              home: 'Home',
              work: 'Work',
              journal: 'Journal',
              tools: 'Tools',
              services: 'Services',
            };
            setActive(map[id] ?? 'Home');
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <div
        className={cn(
          'inline-flex items-center rounded-full border border-white/10 bg-surface px-2 py-2 backdrop-blur-md transition-shadow duration-300',
          scrolled && 'shadow-md shadow-black/10',
        )}
      >
        {/* Logo — shown as a circular badge with the original background intact */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#home');
          }}
          className="group relative mr-1 flex h-9 items-center justify-center"
        >
          <span className="block h-8 w-8 overflow-hidden rounded-full ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
            <img
              src="/alan-logo.png"
              alt="Alan"
              className="h-full w-full object-cover"
              onError={(e) => {
                // Fallback to text mark if the logo file isn't present yet
                (e.currentTarget as HTMLImageElement).style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                if (fallback) fallback.style.display = '';
              }}
            />
          </span>
          <span
            className="relative hidden text-[13px] font-medium text-text-primary"
            style={{ display: 'none' }}
          >
            Alan
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke md:block" />

        {/* Nav links */}
        <div className="hidden items-center md:flex">
          {LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(`#${link.toLowerCase()}`);
                setActive(link);
              }}
              className={cn('btn btn-ghost', active === link && 'active')}
            >
              {link}
            </a>
          ))}
        </div>

        <span className="mx-1 hidden h-5 w-px bg-stroke md:block" />

        {/* Say hi button */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#contact');
          }}
          className="btn btn-secondary gradient-ring ml-1"
        >
          <span>Say hi</span>
          <span aria-hidden>↗</span>
        </a>
      </div>
    </nav>
  );
}
