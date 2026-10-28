import { motion, useReducedMotion } from 'framer-motion';

const STATEMENT = 'Researching the frontier, simplifying the complex, and shipping AI-first products in public.';

export default function About() {
  const reduced = useReducedMotion();
  return (
    <section id="about" className="about-section">
      <div className="shell section">
        <div className="about-grid">
          <div className="section-label"><span className="label-rule" /><span>Behind the work</span></div>
          <div className="about-copy"><h2 className="about-statement text-pretty">{STATEMENT.split(' ').map((word, i) => <motion.span key={`${word}-${i}`} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.6, delay: reduced ? 0 : i * 0.035 }}>{word}{' '}</motion.span>)}</h2><a className="text-link" href="#services">How I can help <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="role-band" aria-label="Creator, Explorer, Builder, Marketer">{['Creator', 'Explorer', 'Builder', 'Marketer'].map((word, i) => <motion.div key={word} initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: reduced ? 0 : i * 0.08 }} className="band-item"><span className="band-number">0{i + 1}</span><span>{word}</span></motion.div>)}</div>
      </div>
    </section>
  );
}
