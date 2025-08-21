import React, { useState } from 'react';
import { MapPin, Calendar, ChevronRight, Award } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="section-header">
          <div className="section-label">PROFESSIONAL JOURNEY</div>
          <h2 className="section-title">Experience & Impact</h2>
        </div>

        <div className="experience-content">
          <div className="experience-timeline">
            {experience.map((exp, index) => (
              <div 
                key={exp.id}
                className={`timeline-item ${selectedExperience === index ? 'active' : ''}`}
                onClick={() => setSelectedExperience(index)}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot"></div>
                </div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3 className="company-name">{exp.company}</h3>
                    <div className="timeline-meta">
                      <span className="duration">
                        <Calendar size={16} />
                        {exp.duration}
                      </span>
                      <span className="location">
                        <MapPin size={16} />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <h4 className="position-title">{exp.position}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="experience-details">
            {experience[selectedExperience] && (
              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-meta">
                    <h3 className="experience-company">
                      {experience[selectedExperience].company}
                    </h3>
                    <h4 className="experience-position">
                      {experience[selectedExperience].position}
                    </h4>
                    <div className="experience-info">
                      <span className="experience-duration">
                        <Calendar size={16} />
                        {experience[selectedExperience].duration}
                      </span>
                      <span className="experience-location">
                        <MapPin size={16} />
                        {experience[selectedExperience].location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="experience-description">
                  <p>{experience[selectedExperience].description}</p>
                </div>

                <div className="achievements-section">
                  <h5 className="achievements-title">
                    <Award size={18} />
                    Key Achievements
                  </h5>
                  <ul className="achievements-list">
                    {experience[selectedExperience].achievements.map((achievement, index) => (
                      <li key={index} className="achievement-item">
                        <ChevronRight size={16} className="achievement-icon" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-section">
                  <h5 className="technologies-title">Technologies Used</h5>
                  <div className="technologies-list">
                    {experience[selectedExperience].technologies.map((tech, index) => (
                      <span key={index} className="technology-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;