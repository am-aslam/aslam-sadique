import React from 'react';
import { FileText, ExternalLink, Quote, Award, Calendar } from 'lucide-react';
import { publications } from '../mock';

const Publications = () => {
  const featuredPublications = publications.filter(pub => pub.featured);
  const otherPublications = publications.filter(pub => !pub.featured);

  return (
    <section className="publications-section" id="publications">
      <div className="publications-container">
        <div className="section-header">
          <div className="section-label">RESEARCH</div>
          <h2 className="section-title">Publications & Research</h2>
          <p className="section-description">
            Contributing to the advancement of AI and machine learning through research
          </p>
        </div>

        <div className="publications-content">
          <div className="featured-publications">
            <h3 className="subsection-title">
              <Award size={20} />
              Featured Publications
            </h3>
            
            <div className="featured-grid">
              {featuredPublications.map((publication) => (
                <div key={publication.id} className="featured-publication-card">
                  <div className="publication-header">
                    <div className="publication-meta">
                      <span className="publication-journal">{publication.journal}</span>
                      <span className="publication-year">
                        <Calendar size={14} />
                        {publication.year}
                      </span>
                    </div>
                    <div className="citation-count">
                      <Quote size={16} />
                      {publication.citations} citations
                    </div>
                  </div>
                  
                  <h4 className="publication-title">{publication.title}</h4>
                  
                  <div className="publication-authors">
                    {publication.authors.map((author, index) => (
                      <span key={index} className={`author ${author === 'A. Chen' ? 'author-self' : ''}`}>
                        {author}
                        {index < publication.authors.length - 1 && ', '}
                      </span>
                    ))}
                  </div>
                  
                  <p className="publication-abstract">{publication.abstract}</p>
                  
                  <div className="publication-actions">
                    <a 
                      href={publication.pdf} 
                      className="publication-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileText size={16} />
                      Read Paper
                    </a>
                    <span className="doi">DOI: {publication.doi}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="other-publications">
            <h3 className="subsection-title">All Publications</h3>
            
            <div className="publications-list">
              {publications.map((publication) => (
                <div key={publication.id} className="publication-item">
                  <div className="publication-content">
                    <div className="publication-header">
                      <h4 className="publication-title">{publication.title}</h4>
                      <div className="publication-meta">
                        <span className="publication-journal">{publication.journal}</span>
                        <span className="publication-year">{publication.year}</span>
                        <span className="citation-count">
                          <Quote size={14} />
                          {publication.citations}
                        </span>
                      </div>
                    </div>
                    
                    <div className="publication-authors">
                      {publication.authors.map((author, index) => (
                        <span key={index} className={`author ${author === 'A. Chen' ? 'author-self' : ''}`}>
                          {author}
                          {index < publication.authors.length - 1 && ', '}
                        </span>
                      ))}
                    </div>
                    
                    <p className="publication-abstract">{publication.abstract}</p>
                  </div>
                  
                  <div className="publication-actions">
                    <a 
                      href={publication.pdf} 
                      className="publication-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      View
                    </a>
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

export default Publications;