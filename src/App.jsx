import React, { useState } from 'react';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`App ${theme}`}>
      <header>
        <button type="button" onClick={toggleTheme}>
          {theme === 'light' ? '🔆' : '🌙'}
        </button>
        <div className="hero">
          <img src='./src/assets/yo-v2.webp' alt="Juan Zurita" width={"20px"}/>
          <h1>Juan Zurita</h1>
          <h2>Software Developer</h2>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <AboutSection />
        <hr />
        <ExperienceSection />
        <hr />
        <EducationSection />
        <hr />
        <SkillsSection />
        <hr />
        <ProjectsSection />
      </main>
      <footer>
        <div>
          <a href="https://www.linkedin.com/in/juanzuritavasquez/">
            <img className="icon" src='./src/assets/linkedin.svg' alt="LinkedIn" width="60" />
          </a>
          <a href="https://github.com/juan-zv">
            <img className="icon" src='./src/assets/github.svg' alt="GitHub" width="60" />
          </a>
        </div>
        <p>&copy; 2024 | Juan Zurita</p>
        <a target="_blank" href="https://icons8.com/icon/set/software/ios-filled">Icon Set</a> by <a target="_blank" href="https://icons8.com">Icons8</a>
      </footer>
    </div>
  );
}