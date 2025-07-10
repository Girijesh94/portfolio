import React from 'react';
import NeonGrid from './NeonGrid';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGitAlt,
  FaGithub,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiFlask,
} from 'react-icons/si';
import '../styles/HeroEffects.css';

const skills = [
  { icon: <FaReact />, name: 'React', link: 'https://reactjs.org' },
  { icon: <FaNodeJs />, name: 'Node.js', link: 'https://nodejs.org' },
  { icon: <SiExpress />, name: 'Express', link: 'https://expressjs.com' },
  { icon: <SiJavascript />, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { icon: <FaHtml5 />, name: 'HTML5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { icon: <FaCss3Alt />, name: 'CSS3', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS', link: 'https://tailwindcss.com' },
  { icon: <FaPython />, name: 'Python', link: 'https://www.python.org' },
  { icon: <SiFlask />, name: 'Flask', link: 'https://flask.palletsprojects.com' },
  { icon: <SiMysql />, name: 'MySQL', link: 'https://www.mysql.com' },
  { icon: <FaGitAlt />, name: 'Git', link: 'https://git-scm.com' },
  { icon: <FaGithub />, name: 'GitHub', link: 'https://github.com' },
];

function Skills() {
  return (
    <section
  id="skills"
  className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden text-white font-sans"
>
  <NeonGrid />

  <h2 className="text-4xl md:text-5xl font-bold mb-12 z-10 text-purple-400 text-center drop-shadow-lg">
    Tech Stack & What I Do
  </h2>

  <div className="flex flex-col lg:flex-row gap-12 z-10 max-w-6xl w-full">
    {/* Left: Tech Icons */}
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 flex-1 place-items-center">
      {skills.map((skill, idx) => (
        <a
          href={skill.link}
          key={idx}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center hover:scale-110 transition-transform duration-300 text-purple-300 hover:text-white"
          title={skill.name}
        >
          <div className="text-5xl drop-shadow-[0_0_12px_#6a0dad]">{skill.icon}</div>
          <span className="mt-2 text-sm text-gray-300">{skill.name}</span>
        </a>
      ))}
    </div>

    {/* Right: Bullet Text */}
    <div className="flex-1 text-gray-300 text-base md:text-lg leading-relaxed space-y-4 font-light">
      <p>
        ⚡ Building responsive and secure front-end interfaces using{' '}
        <span className="text-purple-300 font-medium">JavaScript</span>,{' '}
        <span className="text-purple-300 font-medium">React</span>, and{' '}
        <span className="text-purple-300 font-medium">Tailwind CSS</span>
      </p>
      <p>
        ⚡ Developing scalable and efficient backend systems with{' '}
        <span className="text-purple-300 font-medium">Node.js</span>,{' '}
        <span className="text-purple-300 font-medium">Express</span>, and{' '}
        <span className="text-purple-300 font-medium">Flask</span>
      </p>
      <p>
        ⚡ Integrating APIs, handling user authentication, and managing{' '}
        <span className="text-purple-300 font-medium">MySQL</span> databases securely
      </p>
      <p>
        ⚡ Exploring <span className="text-purple-300 font-medium">Cybersecurity practices</span> — with a focus on threat detection, secure authentication, and data protection in full-stack systems
      </p>
      <p>
        ⚡ Learning and applying <span className="text-purple-300 font-medium">AI/ML techniques</span> to build smarter web solutions — including automation, analytics, and intelligent decision-making
      </p>
    </div>
  </div>
</section>

  );
}

export default Skills;
