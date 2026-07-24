import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const WORDS = ['Build', 'Explore', 'Create', 'Ship'];

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const rafRef = useRef<number>(0);

  // Counter 000 → 100 over ~2700ms
  useEffect(() => {
    const start = performance.now();
    const duration = 2700;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * 100));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  // Rotate words every 900ms
  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col bg-bg"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
    >
      {/* Top-left label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="dev-mono absolute left-6 top-6 uppercase tracking-[0.3em] text-muted md:left-10 md:top-10"
      >
        <span className="dev-syn-key">{'>'}</span> portfolio
      </motion.div>

      {/* Center rotating words */}
      <div className="flex flex-1 items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="text-4xl font-semibold tracking-tight text-text-primary/80 md:text-6xl lg:text-7xl font-display"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right counter */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-10 right-6 text-6xl font-bold tabular-nums tracking-tight text-text-primary md:bottom-16 md:right-10 md:text-8xl lg:text-9xl font-display"
      >
        {String(count).padStart(3, '0')}
      </motion.div>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
            transition: 'transform 0.05s linear',
          }}
        />
      </div>
    </motion.div>
  );
}
