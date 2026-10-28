const SOCIALS = [
  { name: 'X · @alannnfx', url: 'https://x.com/alannnfx' },
  { name: 'Telegram channel', url: 'https://t.me/alanncommunity' },
  { name: 'Telegram · @Alan_Earn', url: 'https://t.me/Alan_Earn' },
];

const NAV = ['About', 'Work', 'Build', 'Services'];

export default function Contact() {
  return (
    <footer id="contact" className="contact-footer">
      {/* Navy band — conversation CTA */}
      <div className="band-navy band-navy-texture"><div className="shell footer-content">
        <div className="section-label"><span>Available for projects</span></div>
        <div className="footer-cta"><h2 className="text-balance">Start a<br />conversation<span>.</span></h2><a href="https://t.me/Alan_Earn" target="_blank" rel="noopener noreferrer" className="footer-cta-arrow" aria-label="Message Alan on Telegram (opens in a new tab)">↗</a></div>
        <div className="footer-details"><div className="footer-intro"><p>Building with AI day by day, marketing it by night. Available for paid promotions, brand deals and sponsored content. DM to discuss rates.</p><div className="footer-actions"><a href="https://t.me/Alan_Earn" target="_blank" rel="noopener noreferrer" className="pill-button brass-button">Telegram @Alan_Earn<span className="arrow-badge" aria-hidden="true">↗</span></a><a href="https://x.com/alannnfx" target="_blank" rel="noopener noreferrer" className="text-link">Paid Promotion <span aria-hidden="true">↗</span></a></div></div><nav className="footer-links" aria-label="Footer navigation"><span className="eyebrow">Explore</span>{NAV.map(link => <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>)}</nav><div className="footer-links"><span className="eyebrow">Connect</span>{SOCIALS.map(s => <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">{s.name} <span aria-hidden="true">↗</span></a>)}</div></div>
      </div></div>
      {/* Cream band — etched landscape, in the spirit of a vintage colophon */}
      <div className="footer-etched">
        <img className="footer-etched-art" src="/etched-landscape.svg" alt="" loading="lazy" />
        <div className="shell">
          <div className="footer-wordmark-row">
            <div className="footer-wordmark" aria-hidden="true">Alan</div>
            <p className="footer-wordmark-sub">A portfolio etched in navy & cream — AI creations, brand stories, and whatever comes next.</p>
          </div>
          <div className="footer-bottom"><span>© {new Date().getFullYear()} Alan</span><span>AI Creator & Social Media Marketer</span><div className="footer-bottom-actions"><a href="https://x.com/alannnfx" target="_blank" rel="noopener noreferrer">@alannnfx</a><a href="#home">Back to top ↑</a></div></div>
        </div>
      </div>
    </footer>
  );
}
