import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

const Main = () => (
  <main>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </main>
);

export default Main;



