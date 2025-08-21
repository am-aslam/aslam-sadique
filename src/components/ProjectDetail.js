import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, FileText, Calendar } from 'lucide-react';
import { projects } from '../mock';
import Header from './Header';
import Footer from './Footer';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail">
        <Header />
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            Back to Portfolio
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-detail">
      <Header />
      
      <section className="project-detail-section">
        <div className="project-detail-container">
          <div className="project-detail-header">
            <Link to="/" className="back-link">
              <ArrowLeft size={20} />
              Back to Portfolio
            </Link>
            
            <div className="project-header">
              <div className="project-category">{project.category}</div>
              <h1 className="project-title">{project.title}</h1>
              <div className="project-meta">
                <span className="project-date">
                  <Calendar size={16} />
                  {project.date}
                </span>
              </div>
            </div>
          </div>

          <div className="project-hero">
            <img 
              src={project.image} 
              alt={project.title}
              className="project-hero-image"
            />
          </div>

          <div className="project-content">
            <div className="project-main">
              <div className="project-description">
                <h2>Project Overview</h2>
                <p>{project.longDescription}</p>
              </div>

              <div className="project-metrics-section">
                <h2>Performance Metrics</h2>
                <div className="metrics-grid">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="metric-card">
                      <div className="metric-value">{value}</div>
                      <div className="metric-label">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="project-sidebar">
              <div className="project-info-card">
                <h3>Technologies Used</h3>
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-item">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-actions-card">
                <h3>Project Links</h3>
                <div className="action-buttons">
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                  {project.links.paper && (
                    <a 
                      href={project.links.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-button"
                    >
                      <FileText size={20} />
                      Research Paper
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;