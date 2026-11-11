
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStrip from './components/ImpactStrip';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StickyHireCTA from './components/StickyHireCTA';

const App: React.FC = () => {
  return (
    <div id="top" className="bg-primary min-h-screen text-text selection:bg-accent/30 overflow-x-hidden">
      <Navbar />
      <main className="flex flex-col w-full z-10 relative">
        <Hero />
        <ImpactStrip />
        <About />
        <Experience />
        <Education />
        <Tools />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <StickyHireCTA />
    </div>
  );
};

export default App;
