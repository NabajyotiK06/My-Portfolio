import React from 'react';
import Hero from '../components/Hero/Hero';
import TechMarquee from '../components/TechMarquee/TechMarquee';
import Skills from '../components/Skills/Skills';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import SectionDivider from '../components/SectionDivider';

const Home = () => {
  return (
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
      </div>
      <SectionDivider fullWidth={true} />
      <Footer />
    </main>
  );
};

export default Home;
