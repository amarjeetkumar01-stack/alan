import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { BUILDS } from '../data';

export default function Builds() {
  const reduced = useReducedMotion();
  return (
    <section id="build" className="band-cream"><div className="shell section build-section">
      <SectionHeader eyebrow="What I build" title="Things I'm" highlight="building." subtext="Experiments, tools, and side projects outside of client work. New builds land here as they ship — watch this space." />
      <div className="build-grid">
        {BUILDS.map((build, i) => (
          <motion.article key={i} className="build-card" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : i * 0.08 }}>
            <div className="build-card-top"><span className="build-number">{String(i + 1).padStart(2, '0')}</span><span className="build-tag">{build.tag}</span></div>
            <h3>{build.title}</h3>
            <p>{build.blurb}</p>
            {build.url
              ? <a className="text-link" href={build.url} target="_blank" rel="noopener noreferrer">Visit <span aria-hidden="true">↗</span></a>
              : <span className="text-link" aria-disabled="true">Link coming soon</span>}
          </motion.article>
        ))}
        <motion.div className="build-card build-card-empty" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.55, delay: reduced ? 0 : BUILDS.length * 0.08 }}>
          <span className="empty-mark" aria-hidden="true">+</span>
          <h3>Open slot</h3>
          <p>Reserved for the next thing that ships.</p>
        </motion.div>
      </div>
    </div></section>
  );
}
