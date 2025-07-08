import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBg from './ParticlesBg'; // import the new background

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      <ParticlesBg /> {/* Background added here */}

      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 z-10">
        Hi, I'm <span className="text-purple-500">Girijesh</span>
      </h1>

      <TypeAnimation
        sequence={[
          'Full Stack Developer 💻',
          2000,
          'React Enthusiast ⚛️',
          2000,
          'Backend Builder 🛠️',
          2000,
        ]}
        wrapper="span"
        speed={50}
        className="text-xl md:text-2xl text-gray-300 z-10"
        repeat={Infinity}
      />

      <div className="mt-6 flex gap-4 flex-wrap justify-center z-10">
        <a
          href="#projects"
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
        >
          View My Work
        </a>
        <a
          href="/resume.pdf"
          className="border border-white px-6 py-2 rounded text-white hover:bg-white hover:text-black transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;

