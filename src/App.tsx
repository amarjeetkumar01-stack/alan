import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SelectedWorks from './components/SelectedWorks';
import Tools from './components/Tools';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';

export default function App() {
  const reducedMotion = useReducedMotion();
  const [isLoading, setIsLoading] = useState(!reducedMotion);
  const [ready, setReady] = useState(Boolean(reducedMotion));
  const [menuOpen, setMenuOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);
  const completeIntro = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const previous = document.documentElement.style.overflow;
    if (!ready || menuOpen) document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = previous; };
  }, [ready, menuOpen]);

  useEffect(() => {
    if (pageRef.current) pageRef.current.inert = !ready;
  }, [ready]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence onExitComplete={() => setReady(true)}>
        {isLoading && <LoadingScreen onComplete={completeIntro} />}
      </AnimatePresence>
      <div ref={pageRef} className="font-sans">
        <a className="skip-link" href="#main">Skip to content</a>
        <ScrollProgress />
        <Navbar ready={ready} onMenuChange={setMenuOpen} />
        <main id="main">
          <Hero ready={ready} />
          <About />
          <SelectedWorks />
          <Tools />
          <Services />
          <Stats />
        </main>
        <Contact />
      </div>
    </MotionConfig>
  );
}
