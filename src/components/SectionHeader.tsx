import { motion, useReducedMotion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, highlight, subtext, action }: { eyebrow: string; title: string; highlight?: string; subtext?: string; action?: React.ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div className="section-header" initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: reduced ? 0 : 0.7 }}>
      <div className="section-heading-copy"><div className="section-label"><span className="status-dot" />{eyebrow}</div><h2 className="section-title text-balance">{title}{highlight && <><br /><span>{highlight}</span></>}</h2>{subtext && <p className="section-description text-pretty">{subtext}</p>}</div>
      {action && <div>{action}</div>}
    </motion.div>
  );
}
