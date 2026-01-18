
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-primary min-h-screen text-text selection:bg-accent/30 overflow-x-hidden relative">
      <Navbar />
      <main className="flex flex-col w-full z-10 relative">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Tools />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-[#111c35] to-primary opacity-80"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ 
               backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(to right, #cbd5e1 1px, transparent 1px)', 
               backgroundSize: '50px 50px' 
             }}>
        </div>

        {/* Animated Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute top-[40%] left-[30%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] opacity-20"></div>
      </div>
    </div>
  );
};

export default App;
