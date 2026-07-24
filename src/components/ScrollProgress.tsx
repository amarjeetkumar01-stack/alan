import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin scroll-progress bar pinned to the top of the viewport.
 * Silver gradient, spring-smoothed. Lightweight (uses Framer's built-in
 * scroll tracking — no manual scroll listeners).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <motion.div
      style={{ scaleX }}
      className="accent-gradient fixed left-0 top-0 z-[100] h-[2px] w-full origin-left"
      aria-hidden
    />
  );
}
