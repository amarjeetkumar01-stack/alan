import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { WORKED_ON, type WorkItem } from '../data';

export default function SelectedWorks() {
  return (
    <section id="work" className="band-navy band-navy-texture"><div className="shell section work-section">
      <SectionHeader eyebrow="Worked on" title="Projects I've" highlight="worked with." subtext="Brand collaborations across AI, robotics, and creative tools — each pairing the product with the post that launched it." action={<a className="pill-button" href="#contact">Work with me<span className="arrow-badge" aria-hidden="true">↗</span></a>} />
      <div className="work-list">{WORKED_ON.map((item, i) => <WorkCard key={item.name} item={item} index={i} />)}</div>
    </div></section>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.article className="work-card" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : (index % 2) * 0.08 }}>
      <div className="work-card-main">
        <div className="work-card-top"><span className="work-index">{String(index + 1).padStart(2, '0')}</span><span className="work-category">{item.category}</span></div>
        <div className="work-card-body">
          <div className="work-logo-tile"><img src={item.logo} alt={`${item.name} logo`} loading="lazy" width="56" height="56" /></div>
          <div>
            <h3 className="work-name"><a href={item.productUrl} target="_blank" rel="noopener noreferrer">{item.name}</a></h3>
            <p className="work-blurb">{item.blurb}</p>
          </div>
        </div>
        <div className="work-card-bottom">
          <nav className="work-links" aria-label={`${item.name} links`}>
            <a className="work-chip" href={item.productUrl} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} product site (opens in a new tab)`}>Site <span aria-hidden="true">↗</span></a>
            <a className="work-chip" href={item.postUrl} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} post on X (opens in a new tab)`}>X post <span aria-hidden="true">↗</span></a>
          </nav>
          <a className="work-arrow" href={item.productUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} (opens in a new tab)`}>↗</a>
        </div>
      </div>
    </motion.article>
  );
}
