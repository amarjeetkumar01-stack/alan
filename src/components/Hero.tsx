import { motion, useReducedMotion } from 'framer-motion';

export default function Hero({ ready }: { ready: boolean }) {
  const reduced = useReducedMotion();
  const reveal = { duration: reduced ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section id="home" className="hero">
      <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="shell hero-layout">
        <div className="hero-copy">
          <motion.div className="availability eyebrow" initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={reveal}><span className="status-dot" />Available for AI projects</motion.div>
          <h1 className="hero-heading text-balance"><span className="clip-line"><motion.span initial={{ y: '110%' }} animate={{ y: ready ? 0 : '110%' }} transition={reveal}>An AI creator.</motion.span></span><span className="clip-line"><motion.span initial={{ y: '110%' }} animate={{ y: ready ? 0 : '110%' }} transition={{ ...reveal, delay: reduced ? 0 : 0.12 }}>Building the</motion.span></span><span className="clip-line hero-heading-italic"><motion.span initial={{ y: '110%' }} animate={{ y: ready ? 0 : '110%' }} transition={{ ...reveal, delay: reduced ? 0 : 0.24 }}>future.</motion.span></span></h1>
          <motion.div className="hero-intro" initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ ...reveal, delay: reduced ? 0 : 0.35 }}>
            <p className="hero-description">Exploring models, agents, and automation.<br />{' '}Turning curiosity into what comes next.</p>
            <div className="hero-actions"><a href="#work" className="pill-button light-button">Explore selected work<span className="arrow-badge" aria-hidden="true">↗</span></a><a href="#contact" className="hero-contact">Start a conversation <span aria-hidden="true">↗</span></a></div>
          </motion.div>
        </div>
        <motion.aside className="portrait-card" initial={{ opacity: 0, y: 24 }} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ ...reveal, delay: reduced ? 0 : 0.45 }} aria-label="Alan, AI creator and social media marketer">
          <div className="portrait-top"><span className="eyebrow">Creator / Builder</span><span aria-hidden="true">✧</span></div>
          <div className="portrait-frame"><img src="/alan-profile.png" width="1265" height="1243" alt="Alan’s illustrated portrait" /></div>
          <div className="portrait-caption"><div><strong>Alan</strong><span>AI & Web3 · India</span></div><span className="portrait-mark" aria-hidden="true">A.</span></div>
        </motion.aside>
      </div>
      <div className="shell hero-bottom"><span>Creator · Explorer · Builder · Marketer</span><a href="#about">Scroll to discover <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
