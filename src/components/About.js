import React from 'react';
import { Brain, Code, Database, Zap, Target, Users } from 'lucide-react';
import { personalInfo, skills } from '../mock';

const About = () => {
  const achievements = [
    {
      icon: <Brain size={24} />,
      title: "AI Innovation",
      description: "Developed cutting-edge neural networks that improved business metrics by 40%+"
    },
    {
      icon: <Database size={24} />,
      title: "Big Data Processing",
      description: "Built scalable pipelines processing 10TB+ of data daily across distributed systems"
    },
    {
      icon: <Target size={24} />,
      title: "Production ML",
      description: "Deployed 23+ machine learning models serving millions of users in production"
    },
    {
      icon: <Users size={24} />,
      title: "Team Leadership",
      description: "Led cross-functional teams of 15+ engineers and data scientists"
    }
  ];

  const skillCategories = [
    { name: "Programming", skills: skills.programming, color: "#38FF62" },
    { name: "ML Frameworks", skills: skills.mlFrameworks, color: "#FF6B38" },
    { name: "Cloud Platforms", skills: skills.cloudPlatforms, color: "#38A7FF" },
    { name: "Data Tools", skills: skills.dataTools, color: "#FF38E1" }
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="section-header">
          <div className="section-label">ABOUT ME</div>
          <h2 className="section-title">Transforming Data Into Intelligence</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="bio-text">
              <p>{personalInfo.bio}</p>
            </div>
            
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <div className="achievement-content">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-description">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-section">
            <h3 className="skills-title">Technical Expertise</h3>
            
            <div className="skills-grid">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="skill-category">
                  <h4 className="category-title" style={{ color: category.color }}>
                    {category.name}
                  </h4>
                  <div className="skills-list">
                    {category.skills.slice(0, 4).map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-level">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-fill"
                            style={{ 
                              width: `${skill.level}%`,
                              backgroundColor: category.color
                            }}
                          />
                        </div>
                        <span className="skill-years">{skill.years} years</span>
                      </div>
                    ))}
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

export default About;