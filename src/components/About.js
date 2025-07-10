import React from 'react';
import NeonGrid from './NeonGrid';
import '../styles/HeroEffects.css';
import '../styles/SocialIcons.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden text-white"
    >
      <NeonGrid />

      <h2 className="text-4xl md:text-5xl font-bold mb-10 z-10 text-purple-400 text-center">
        About Me
      </h2>

      {/* Profile + Text container */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 z-10 max-w-5xl w-full">

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-purple-600 shadow-lg shadow-purple-800 object-cover"
          />
        </div>

        {/* Description */}
        <div className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m a passionate <span className="text-purple-500 font-semibold">full stack web developer</span> and{' '}
          <span className="text-purple-500 font-semibold">cybersecurity enthusiast</span> with a strong focus on
          building secure, scalable, and user-friendly applications.
          <br />
          <br />
          Currently pursuing Computer Science at <span className="text-purple-400">SRM Institute of Science and Technology</span>, I enjoy solving real-world problems and turning complex ideas into elegant solutions.
          <br />
          <br />
          I’m particularly driven by the intersection of web technology and security — aiming to create digital systems that are both powerful and safe.
          
          <div className="mt-6 italic text-sm text-gray-400">
            “Code with clarity, secure with precision.”
          </div>
          {/* Social Icons */}
<div className="social-card z-10">
  <a
    href="https://github.com/Girijesh94"
    target="_blank"
    rel="noopener noreferrer"
    className="github"
  >
    <FaGithub />
  </a>
  <a
    href="https://www.linkedin.com/in/girijesh-baskar-a48551290/"
    target="_blank"
    rel="noopener noreferrer"
    className="linkedin"
  >
    <FaLinkedin />
  </a>
  <a
    href="mailto:iamgirijesh@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="gmail"
  >
    <FaEnvelope />
  </a>
</div>

        </div>
      </div>
    </section>
  );
}

export default About;
