import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import InteractiveBackground from './components/InteractiveBackground';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import Journal from './components/Journal';
import Tools from './components/Tools';
import Services from './components/Services';
import Stats from './components/Stats';
import Contact from './components/Contact';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}</AnimatePresence>

      {/* Interactive developer background — grid, mouse glow, particles, noise */}
      <InteractiveBackground />
      <ScrollProgress />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <SelectedWorks />
        <Journal />
        <Tools />
        <Services />
        <Stats />
        <Contact />
      </main>
    </>
  );
}
