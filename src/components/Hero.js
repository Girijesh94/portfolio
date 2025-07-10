import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import NeonGrid from './NeonGrid'; // 🌟 Import your new grid background
import '../styles/HeroEffects.css';

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden text-white"
    >
      <NeonGrid /> {/* ✅ Animated background grid */}

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 z-10">
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

      <div className="mt-10 flex flex-col sm:flex-row gap-6 z-10">
        {[{ text: 'View My Work', href: '#projects' }, { text: 'Download Resume', href: '/Girijesh_resume.pdf' }].map(
          (btn, idx) => (
            <a href={btn.href} key={idx} className="button-container">
              <button className="hacker-button">
                {btn.text}
                <div className="neon-frame"></div>
                <div className="circuit-traces">
                  <div className="circuit-trace"></div>
                  <div className="circuit-trace"></div>
                  <div className="circuit-trace"></div>
                  <div className="circuit-trace"></div>
                  <div className="circuit-trace"></div>
                </div>
                <div className="code-fragments">
                  <span className="code-fragment">0x1A</span>
                  <span className="code-fragment">1100</span>
                  <span className="code-fragment">DATA</span>
                  <span className="code-fragment">CODE</span>
                  <span className="code-fragment">RUN</span>
                </div>
                <div className="interference"></div>
                <div className="scan-bars">
                  <div className="scan-bar"></div>
                  <div className="scan-bar"></div>
                  <div className="scan-bar"></div>
                </div>
                <div className="text-glow"></div>
              </button>
            </a>
          )
        )}
      </div>
    </section>
  );
}

export default Hero;
