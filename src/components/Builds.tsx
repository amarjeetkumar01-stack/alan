import { motion, useReducedMotion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { BUILDS } from '../data';

export default function Builds() {
  const reduced = useReducedMotion();
  return (
    <section id="builds" className="builds-section">
      <div className="shell section">
        <SectionHeader eyebrow="Independent projects" title="What I" highlight="build." subtext="A growing shelf of agents, tools, and experiments—built in public and shared when ready." />
        {BUILDS.length > 0 ? <div className="build-grid">{BUILDS.map((build, index) => <motion.article className="build-card" key={build.title} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><span className="build-index">{String(index + 1).padStart(2, '0')}</span><h3>{build.title}</h3><p>{build.blurb}</p>{build.url && <a href={build.url} target="_blank" rel="noopener noreferrer" className="text-link">Open build <span aria-hidden="true">↗</span></a>}</motion.article>)}</div> : <div className="build-grid build-grid-empty">{[0, 1].map((slot, index) => <motion.div className="build-card build-placeholder" key={slot} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : index * 0.1 }}><div className="build-placeholder-top"><span className="build-index">0{index + 1}</span><span className="eyebrow">Open slot</span></div><span className="build-plus" aria-hidden="true">+</span><div><h3>Reserved for a future build.</h3><p>New experiments are taking shape. This space is ready for what comes next.</p></div></motion.div>)}</div>}
      </div>
    </section>
  );
}
