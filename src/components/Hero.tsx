import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useHls } from '../hooks/useHls';
import { HLS_SRC } from '../data';

const ROLES = ['Creator', 'Explorer', 'Builder', 'Marketer'];

export default function Hero({ ready }: { ready: boolean }) {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(!reduced);
  const videoRef = useHls(HLS_SRC, playing && !reduced);
  const [roleIndex, setRoleIndex] = useState(0);
  const reveal = { duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section id="home" className="hero">
      {/* Background HLS video */}
      <div className="hero-media" aria-hidden="true"><video ref={videoRef} muted loop playsInline poster="https://image.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g/thumbnail.jpg?time=1&width=1600" /><div className="hero-shade" /></div>
      <div className="shell hero-layout">
        <div className="hero-copy">
          <motion.div className="availability" initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={reveal}><span className="status-dot" />Available for AI projects</motion.div>
          <h1 className="hero-heading text-balance"><span className="clip-line"><motion.span initial={{ y: '110%' }} animate={{ y: ready ? 0 : '110%' }} transition={reveal}>An AI creator.</motion.span></span><span className="clip-line"><motion.span initial={{ y: '110%' }} animate={{ y: ready ? 0 : '110%' }} transition={{ ...reveal, delay: reduced ? 0 : 0.12 }}>Building the</motion.span></span><span className="clip-line"><motion.span initial={{ y: '110%' }} animate={{ y: ready ? 0 : '110%' }} transition={{ ...reveal, delay: reduced ? 0 : 0.24 }}>future.</motion.span></span></h1>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ ...reveal, delay: reduced ? 0 : 0.35 }}>
            <p className="hero-description">Exploring models, agents, and automation.<br />Turning curiosity into what comes next.</p>
            <div className="hero-actions"><a href="#work" className="pill-button light-button">See works<span className="arrow-badge" aria-hidden="true">↗</span></a><a href="#contact" className="hero-contact">Reach out <span aria-hidden="true">↗</span></a></div>
          </motion.div>
        </div>
        <motion.aside className="role-card" initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ ...reveal, delay: reduced ? 0 : 0.5 }} aria-label="My roles">
          <div className="role-top"><span className="eyebrow">One curiosity. Many hats.</span><span className="role-symbol" aria-hidden="true">↗</span></div>
          <div className="role-body"><img src="/alan-profile.png" width="64" height="64" alt="Alan" /><span>AI & Web3</span><div className="role-title" aria-live="polite"><AnimatePresence mode="wait"><motion.h2 key={roleIndex} initial={{ opacity: 0, y: reduced ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -12 }} transition={{ duration: reduced ? 0 : 0.2 }}>{ROLES[roleIndex]}.</motion.h2></AnimatePresence></div></div>
          <div className="role-bottom"><span className="role-count">{String(roleIndex + 1).padStart(2, '0')}<span> / 04</span></span><div className="role-controls"><button className="round-button" aria-label="Previous role" onClick={() => setRoleIndex(i => (i + ROLES.length - 1) % ROLES.length)}>←</button><button className="round-button" aria-label="Next role" onClick={() => setRoleIndex(i => (i + 1) % ROLES.length)}>→</button></div></div>
        </motion.aside>
      </div>
      <motion.div className="hero-watermark" aria-hidden="true" initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ ...reveal, delay: reduced ? 0 : 0.4 }}>ALAN</motion.div>
      <div className="shell hero-bottom"><span>AI Creator & Social Media Marketer</span><div className="hero-bottom-controls">{!reduced && <button onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause background video' : 'Play background video'}>{playing ? 'Pause video' : 'Play video'}<span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span></button>}<a href="#about">Scroll to explore <span aria-hidden="true">↓</span></a></div></div>
    </section>
  );
}
