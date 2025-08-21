import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Brain, Code, Database, Cpu } from 'lucide-react';
import { personalInfo, stats } from '../mock';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Data Scientist',
    'AI/ML Engineer', 
    'Neural Network Architect',
    'Deep Learning Expert'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = titles[currentIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      } else {
        setCurrentText(current.slice(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Hello, I'm</span>
            </div>
            
            <h1 className="hero-title">
              {personalInfo.name.split(' ')[0]}
              <span className="name-accent">{personalInfo.name.split(' ')[1]}</span>
            </h1>
            
            <div className="hero-subtitle">
              <span className="subtitle-prefix">I'm a </span>
              <span className="typing-text">{currentText}</span>
              <span className="cursor">|</span>
            </div>
            
            <p className="hero-description">
              {personalInfo.tagline}
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">{stats.yearsExperience}+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.projectsCompleted}+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">{stats.modelsDeployed}+</span>
                <span className="stat-label">Models Deployed</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button 
                className="btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
              <button 
                className="btn-secondary"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
              </button>
            </div>
            
            <div className="hero-social">
              <a href={personalInfo.github} className="social-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href={personalInfo.linkedin} className="social-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="neural-sphere">
              <div className="sphere-core">
                <Brain className="brain-icon" size={48} />
              </div>
              <div className="orbit orbit-1">
                <div className="orbit-item">
                  <Code size={24} />
                </div>
              </div>
              <div className="orbit orbit-2">
                <div className="orbit-item">
                  <Database size={24} />
                </div>
              </div>
              <div className="orbit orbit-3">
                <div className="orbit-item">
                  <Cpu size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <button 
            className="scroll-button"
            onClick={() => scrollToSection('about')}
            aria-label="Scroll to about section"
          >
            <ArrowDown className="scroll-arrow" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;