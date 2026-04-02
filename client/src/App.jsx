import React, { useEffect } from 'react';
import Lenis from 'lenis';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import TechMarquee from './components/TechMarquee/TechMarquee';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import SectionDivider from './components/SectionDivider';
import 'lenis/dist/lenis.css';
import './index.css';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-container">
      <NavBar />
      <main className="container">
        <div className="content-grid-wrapper">
          <Hero />
          <SectionDivider />
          <TechMarquee />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Contact />
          <SectionDivider />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
