import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { WORK_ITEMS, type WorkItem } from '../data';

export default function SelectedWorks() {
  return (
    <section id="work" className="work-section">
      <div className="shell section">
        <SectionHeader eyebrow="Selected collaborations" title="Projects I’ve" highlight="worked with." subtext="A selection of paid partnerships with teams shaping AI, design, and creative tools. Visit the product or read the original post." action={<a className="text-link" href="#contact">Work with me <span aria-hidden="true">↗</span></a>} />
        <div className="work-grid">{WORK_ITEMS.map((item, index) => <WorkCard key={item.name} item={item} index={index} />)}</div>
      </div>
    </section>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.article className="work-card" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : (index % 2) * 0.08 }}>
      <div className="work-card-top"><span className="work-index">{String(index + 1).padStart(2, '0')}</span><span className="work-category">{item.category}</span><span className="partnership-label">Paid partnership</span></div>
      <div className="work-card-main">
        <div className="work-logo"><img src={item.logo} alt="" loading="lazy" width="128" height="128" /></div>
        <div className="work-copy"><h3>{item.name}</h3><p>{item.description}</p></div>
      </div>
      <div className="work-card-bottom"><a href={item.productUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} product site (opens in a new tab)`}>Visit product <span aria-hidden="true">↗</span></a><a href={item.postUrl} target="_blank" rel="noopener noreferrer" aria-label={`Read Alan’s ${item.name} post on X (opens in a new tab)`}>View on X <span aria-hidden="true">↗</span></a></div>
    </motion.article>
  );
}
