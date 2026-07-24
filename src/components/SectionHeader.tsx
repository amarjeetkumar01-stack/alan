import { motion } from 'framer-motion';

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtext,
  action,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtext?: string;
  action?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <span className="dev-syn-key dev-mono">{'// '}</span>
          <span className="dev-mono uppercase tracking-[0.18em] text-muted">{eyebrow}</span>
        </div>
        <h2 className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl lg:text-[3.5rem] font-display leading-[1.05]">
          {title} {highlight && <span className="font-medium text-muted">{' '}{highlight}</span>}
        </h2>
        {subtext && <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">{subtext}</p>}
      </div>
      {action && <div className="hidden md:block">{action}</div>}
    </motion.div>
  );
}
