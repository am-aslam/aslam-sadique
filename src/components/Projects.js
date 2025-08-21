import React, { useState } from 'react';
import { ExternalLink, Github, FileText, Star, Calendar, TrendingUp } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header">
          <div className="section-label">PORTFOLIO</div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            Innovative AI/ML solutions that drive real-world impact
          </p>
        </div>

        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects-showcase">
          <div className="featured-projects">
            <h3 className="showcase-title">
              <Star size={20} />
              Highlighted Work
            </h3>
            <div className="featured-grid">
              {featuredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="featured-project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="project-category">{project.category}</div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h4 className="project-title">{project.title}</h4>
                      <div className="project-year">
                        <Calendar size={14} />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-metrics">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="metric-item">
                          <TrendingUp size={14} />
                          <span className="metric-label">{key}:</span>
                          <span className="metric-value">{value}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="project-technologies">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="project-actions">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </a>
                      )}
                      {project.links.paper && (
                        <a 
                          href={project.links.paper} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText size={16} />
                          Paper
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="all-projects">
            <h3 className="showcase-title">All Projects</h3>
            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="project-card"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="project-image-container">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="project-category">{project.category}</div>
                      {project.featured && (
                        <div className="featured-badge">
                          <Star size={14} />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h4 className="project-title">{project.title}</h4>
                      <div className="project-year">
                        <Calendar size={14} />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="tech-more">+{project.technologies.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="project-actions">
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                      {project.links.paper && (
                        <a 
                          href={project.links.paper} 
                          className="project-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FileText size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;