import React from 'react';
import NeonGrid from './NeonGrid';
import '../styles/HeroEffects.css';
import '../styles/Projects.css';

const projects = [
  {
    title: 'CipherX – Threat Dashboard',
    description:
      'AI-powered SOC dashboard with real-time DDoS prediction, IP tracking, and automated mitigation using ML.',
    tags: ['AI', 'Security', 'React', 'Node.js'],
    image: '/images/cipherx.png',
  },
  {
    title: 'Advanced Banking GUI',
    description:
      'Java Swing based GUI banking system with login, transactions, and secure account management.',
    tags: ['Java', 'Swing', 'GUI'],
    image: '/images/banking.png',
  },
  {
    title: 'Retail Store Web App',
    description:
      'Full stack e-commerce app with login, cart, MySQL backend, encrypted auth, and real-time updates.',
    tags: ['Node.js', 'MySQL', 'Express', 'HTML/CSS'],
    image: '/images/retail.png',
  },
  {
    title: 'Voice Assistant',
    description:
      'Python voice assistant capable of executing system commands, fetching info, and responding via speech.',
    tags: ['Python', 'SpeechRecognition', 'Pyttsx3'],
    image: '/images/assistant.png',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden text-white"
    >
      <NeonGrid />

      <h2 className="text-4xl md:text-5xl font-bold mb-12 z-10 text-purple-400 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 z-10 max-w-6xl w-full place-items-center">
        {projects.map((project, idx) => (
          <div key={idx} className="card">
            <div className="card-grid"></div>

            {/* 🖼️ Image */}
            <img src={project.image} alt={project.title} className="card-image" />

            {/* 🏷️ Title */}
            <p className="heading">{project.title}</p>

            {/* 📄 Description */}
            <p>{project.description}</p>

            {/* 🔘 Tags as bullets */}
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag-dot">• {tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
