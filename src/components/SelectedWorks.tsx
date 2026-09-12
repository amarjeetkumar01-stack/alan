import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { AI_WORK, CRYPTO_WORK, type WorkItem } from '../data';

export default function SelectedWorks() {
  return (
    <section id="work" className="shell section work-section">
      <SectionHeader eyebrow="Selected work" title="Projects I've" highlight="worked with." subtext="AI systems and crypto campaigns I've built and promoted. Click any project to see the work." action={<a className="pill-button" href="#contact">Work with me<span className="arrow-badge" aria-hidden="true">↗</span></a>} />
      {[{ title: 'AI projects', items: AI_WORK }, { title: 'Crypto projects', items: CRYPTO_WORK }].map(group => <div className="work-group" key={group.title}><div className="group-heading"><h3>{group.title}</h3><span>{String(group.items.length).padStart(2, '0')} projects</span></div><div className="work-grid">{group.items.map((item, i) => <WorkCard key={item.name} item={item} category={group.title === 'AI projects' ? 'Artificial intelligence' : 'Crypto & Web3'} index={i} />)}</div></div>)}
    </section>
  );
}

function WorkCard({ item, category, index }: { item: WorkItem; category: string; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.article className="work-card" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : (index % 3) * 0.08 }}>
      <a className="work-card-main" href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`See ${item.name}${item.additionalPosts?.length ? ' post 1' : ' work'} on X (opens in a new tab)`}>
      <div className="work-card-top"><span>{category}</span><span className="work-arrow" aria-hidden="true">↗</span></div>
      <div className="work-logo"><img src={item.logo} alt="" loading="lazy" width="112" height="112" /></div>
      <div className="work-card-bottom"><h4>{item.name}</h4><span>See work <span aria-hidden="true">↗</span></span></div>
      </a>
      {item.additionalPosts?.length ? <nav className="work-post-links" aria-label={`${item.name} posts`}>{[item.url, ...item.additionalPosts].map((url, i) => <a key={url} href={url} target="_blank" rel="noopener noreferrer" aria-label={`${item.name} post ${i + 1} on X (opens in a new tab)`}>Post {i + 1} <span aria-hidden="true">↗</span></a>)}</nav> : null}
    </motion.article>
  );
}
