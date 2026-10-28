const SOCIALS = [
  { name: 'X · @alannnfx', url: 'https://x.com/alannnfx' },
  { name: 'Telegram channel', url: 'https://t.me/alanncommunity' },
  { name: 'Telegram · @Alan_Earn', url: 'https://t.me/Alan_Earn' },
];

export default function Contact() {
  return (
    <footer id="contact" className="contact-footer">
      <div className="footer-navy">
        <div className="shell footer-content">
          <div className="section-label"><span className="label-rule" />Available for projects</div>
          <div className="footer-cta"><h2 className="text-balance">Start a<br /><em>conversation.</em></h2><a href="https://t.me/Alan_Earn" target="_blank" rel="noopener noreferrer" className="footer-cta-arrow" aria-label="Message Alan on Telegram (opens in a new tab)">↗</a></div>
          <div className="footer-details">
            <div className="footer-intro"><a href="#home" className="brand"><span className="brand-star" aria-hidden="true">✧</span>alan<span className="brand-dot">.</span></a><p>Building with AI day by day, marketing it by night. Available for paid promotions, brand deals, and sponsored content.</p><a href="https://t.me/Alan_Earn" target="_blank" rel="noopener noreferrer" className="footer-email">Message on Telegram <span aria-hidden="true">↗</span></a></div>
            <nav className="footer-links" aria-label="Footer navigation"><span className="eyebrow">Explore</span>{['About', 'Work', 'Builds', 'Services'].map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav>
            <div className="footer-links"><span className="eyebrow">Connect</span>{SOCIALS.map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <span aria-hidden="true">↗</span></a>)}</div>
            <div className="footer-links footer-note"><span className="eyebrow">Good to know</span><p>Have a launch, product, or idea worth sharing?</p><a href="https://x.com/alannnfx" target="_blank" rel="noopener noreferrer">Paid promotion <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Alan</span><span>AI Creator & Social Media Marketer</span><a href="#home">Back to top ↑</a></div>
        </div>
      </div>
      <div className="footer-landscape"><img src="/landscape.svg" alt="" width="1600" height="360" loading="lazy" /></div>
    </footer>
  );
}
