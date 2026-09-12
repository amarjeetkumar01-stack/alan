import { useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import { useHls } from '../hooks/useHls';
import { HLS_SRC } from '../data';

const SOCIALS = [{ name: 'X', url: 'https://x.com/Alan_Earn' }, { name: 'Telegram', url: 'https://t.me/Alan_Earn' }];

export default function Contact() {
  const reduced = useReducedMotion();
  const [playing, setPlaying] = useState(!reduced);
  const videoRef = useHls(HLS_SRC, playing && !reduced);
  return (
    <footer id="contact" className="contact-footer">
      {/* Background video — flipped vertically, heavier overlay */}
      <div className="footer-media" aria-hidden="true"><video ref={videoRef} muted loop playsInline /><div /></div>
      <div className="shell footer-content">
        <div className="section-label"><span className="status-dot" />Available for projects</div>
        <div className="footer-cta"><h2 className="text-balance">Start a<br />conversation<span>.</span></h2><a href="https://x.com/Alan_Earn" target="_blank" rel="noopener noreferrer" className="footer-cta-arrow" aria-label="Message Alan on X (opens in a new tab)">↗</a></div>
        <div className="footer-details"><div className="footer-intro"><p>Building with AI by day, marketing it by night. Available for paid promotions, brand deals, and sponsored content. DM to discuss rates.</p><div className="footer-actions"><a href="https://x.com/Alan_Earn" target="_blank" rel="noopener noreferrer" className="pill-button accent-button">DM @Alan_Earn<span className="arrow-badge" aria-hidden="true">↗</span></a><a href="https://x.com/Alan_Earn" target="_blank" rel="noopener noreferrer" className="text-link">Paid Promotion <span aria-hidden="true">↗</span></a></div></div><nav className="footer-links" aria-label="Footer navigation"><span className="eyebrow">Explore</span>{['About', 'Work', 'Tools', 'Services'].map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav><div className="footer-links"><span className="eyebrow">Connect</span>{SOCIALS.map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <span aria-hidden="true">↗</span></a>)}</div></div>
        <div className="footer-wordmark" aria-hidden="true">ALAN</div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Alan</span><span>AI Creator & Social Media Marketer</span><div className="footer-bottom-actions">{!reduced && <button onClick={() => setPlaying(p => !p)}>{playing ? 'Pause footer video' : 'Play footer video'}</button>}<a href="#home">Back to top ↑</a></div></div>
      </div>
    </footer>
  );
}
