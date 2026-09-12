import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const LINKS = ['Home', 'About', 'Work', 'Tools', 'Services', 'Contact'];

export default function Navbar({ ready, onMenuChange, theme, onThemeToggle, motionPaused, onMotionToggle }: { ready: boolean; onMenuChange: (open: boolean) => void; theme: 'light' | 'dark'; onThemeToggle: () => void; motionPaused: boolean; onMotionToggle: () => void }) {
  const [time, setTime] = useState(new Date());
  const [active, setActive] = useState('Home');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -65% 0px' });
    LINKS.forEach(link => {
      const section = document.getElementById(link.toLowerCase());
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => dialogRef.current?.close();

  return (
    <>
      <motion.header className="site-header" initial={{ opacity: 0, y: -12 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.1 }}>
        <div className="shell header-inner">
          <a href="#home" className="brand" aria-label="Alan, home"><img src="/alan-profile.png" alt="" width="36" height="36" /><span>Alan.</span></a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {LINKS.slice(1).map(link => <a key={link} href={`#${link.toLowerCase()}`} aria-current={active.toLowerCase() === link.toLowerCase() ? 'location' : undefined}>{link}</a>)}
          </nav>
          <div className="header-controls">
            <button className="menu-trigger theme-toggle" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}><span className="theme-symbol" aria-hidden="true" /><span>{theme === 'dark' ? 'Light' : 'Dark'}</span></button>
            {!reduced && <button className="menu-trigger motion-toggle" onClick={onMotionToggle} aria-label={motionPaused ? 'Resume card animations' : 'Pause card animations'} aria-pressed={motionPaused}><span className={motionPaused ? 'play-symbol' : 'pause-symbol'} aria-hidden="true" /><span className="sr-only">Card animations</span></button>}
            <div className="clock"><span>Local time</span><time dateTime={time.toISOString()}>{time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }).toLowerCase()}</time></div>
            <button className="menu-trigger" ref={triggerRef} aria-haspopup="dialog" aria-controls="site-menu" onClick={() => { dialogRef.current?.showModal(); onMenuChange(true); }}><span className="menu-lines" aria-hidden="true"><i /><i /></span>Menu</button>
          </div>
        </div>
      </motion.header>
      <dialog id="site-menu" ref={dialogRef} className="nav-dialog font-sans" onClose={() => { onMenuChange(false); triggerRef.current?.focus(); }} aria-labelledby="menu-title">
        <div className="shell menu-shell">
          <div className="menu-top"><span className="brand">Alan.</span><button className="menu-trigger" onClick={closeMenu} autoFocus>Close <span aria-hidden="true">×</span></button></div>
          <h2 id="menu-title" className="eyebrow">Explore the portfolio</h2>
          <nav className="overlay-links" aria-label="Expanded navigation">{LINKS.map(link => <a key={link} href={`#${link.toLowerCase()}`} onClick={closeMenu}>{link}<span aria-hidden="true">↗</span></a>)}</nav>
          <div className="menu-bottom"><span>AI Creator & Social Media Marketer</span><a href="https://x.com/alannnfx" target="_blank" rel="noopener noreferrer">@alannnfx ↗</a></div>
        </div>
      </dialog>
    </>
  );
}
