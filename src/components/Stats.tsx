import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!inView || reduced) return;
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: current => { if (ref.current) ref.current.textContent = String(Math.round(current)); } });
    return () => controls.stop();
  }, [inView, value, reduced]);
  return <div className="stat-value" aria-label={`${value}${suffix}`}><span ref={ref} aria-hidden="true">{value}</span><span className="stat-suffix" aria-hidden="true">{suffix}</span></div>;
}

export default function Stats() {
  return (
    <section className="shell stats-section" aria-label="At a glance"><div className="stats-panel"><div className="section-label"><span className="status-dot" />Always exploring. Always building.</div><div className="stats-grid"><div className="stat"><Counter value={50} suffix="+" /><p>Models explored</p></div><div className="stat"><div className="stat-value stat-text">AI & Web3</div><p>Content Creator</p></div><div className="stat"><Counter value={100} suffix="%" /><p>Built in public</p></div></div></div></section>
  );
}
