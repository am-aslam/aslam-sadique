import React from 'react';
import { Brain, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '../mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Publications', href: '#publications' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <Brain className="logo-icon" />
              <span className="logo-text">BITSANDBRAIN</span>
            </div>
            <p className="footer-tagline">
              {personalInfo.tagline}
            </p>
            <div className="footer-social">
              <a 
                href={personalInfo.github} 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href={personalInfo.linkedin} 
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="social-link"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="links-section">
              <h3 className="links-title">Quick Links</h3>
              <ul className="links-list">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button 
                      className="footer-link"
                      onClick={() => scrollToSection(link.href)}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="links-section">
              <h3 className="links-title">Expertise</h3>
              <ul className="links-list">
                <li><span className="expertise-item">Machine Learning</span></li>
                <li><span className="expertise-item">Deep Learning</span></li>
                <li><span className="expertise-item">Computer Vision</span></li>
                <li><span className="expertise-item">Natural Language Processing</span></li>
                <li><span className="expertise-item">Data Science</span></li>
                <li><span className="expertise-item">MLOps</span></li>
              </ul>
            </div>

            <div className="links-section">
              <h3 className="links-title">Contact Info</h3>
              <div className="contact-info">
                <p className="contact-item">
                  <Mail size={16} />
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </p>
                <p className="contact-item">
                  <span className="location-icon">📍</span>
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          </div>
          
          <button 
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;