import React from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import CourseWork from './components/CourseWork';
import Experience from './components/Experience';
import Skills from './components/Skills';

export default function App(){
  return(
    <main className="text-gray-500 bg-screen bg-cover bg-[50%] bg-no-repeat body-font">
      <Navbar />
      <About />
      <Experience />
      <CourseWork />
      <Projects />
      <Skills />
    </main>
  );
}