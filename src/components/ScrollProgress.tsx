import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

/** Thin scroll-progress bar pinned to the top of the viewport. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const reduced = useReducedMotion();
  return <motion.div style={{ scaleX: reduced ? scrollYProgress : smooth }} className="scroll-progress" aria-hidden="true" />;
}
