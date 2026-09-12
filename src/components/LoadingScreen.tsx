import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) { onComplete(); return; }
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / 1300, 1);
      const eased = t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2;
      setCount(Math.round(eased * 100));
      if (t < 1) frame = requestAnimationFrame(tick);
      else onComplete();
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete, reducedMotion]);

  return (
    <motion.div className="intro font-sans" exit={{ y: '-100%' }} transition={{ duration: reducedMotion ? 0 : 0.75, ease: [0.22, 1, 0.36, 1] }} aria-label="Opening Alan's portfolio">
      <div className="intro-brand"><img src="/alan-logo.png" alt="" width="48" height="48" /><span>Alan.</span></div>
      <p>Creator. Explorer. Builder. Marketer.</p>
      <div className="intro-progress">
        <div className="intro-track"><div style={{ transform: `scaleX(${count / 100})` }} /></div>
        <div className="intro-label"><span>Opening portfolio</span><span className="tabular-nums">{String(count).padStart(3, '0')}</span></div>
      </div>
    </motion.div>
  );
}
