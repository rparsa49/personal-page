import React from "react";

export default function Navbar() {
  return (
    <header className="bg-zinc-800 md:sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#about" className="text-white text-2xl font-semibold">
          Roya Parsa
        </a>
        <nav className="md:flex space-x-4">
          <a href="#experience" className="text-gray-300 hover:text-white">
            Experience
          </a>
          <a href="#coursework" className="text-gray-300 hover:text-white">
            Course Work
          </a>
          <a href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
