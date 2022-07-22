// src/App.js

import "./App.css";
import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Landing from "./components/Landing";

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-front">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}

export default App;
