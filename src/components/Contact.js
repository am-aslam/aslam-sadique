import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Calendar, MessageSquare } from 'lucide-react';
import { personalInfo } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    projectType: 'consultation'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        projectType: 'consultation'
      });
      
      // Clear status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  const projectTypes = [
    { value: 'consultation', label: 'AI/ML Consultation' },
    { value: 'development', label: 'Model Development' },
    { value: 'research', label: 'Research Collaboration' },
    { value: 'speaking', label: 'Speaking Engagement' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="section-header">
          <div className="section-label">GET IN TOUCH</div>
          <h2 className="section-title">Let's Build Something Amazing</h2>
          <p className="section-description">
            Ready to transform your data into intelligent solutions? Let's discuss your project.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3 className="info-title">Contact Information</h3>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Mail size={20} />
                  </div>
                  <div className="method-details">
                    <div className="method-label">Email</div>
                    <a href={`mailto:${personalInfo.email}`} className="method-value">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={20} />
                  </div>
                  <div className="method-details">
                    <div className="method-label">Phone</div>
                    <a href={`tel:${personalInfo.phone}`} className="method-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="method-details">
                    <div className="method-label">Location</div>
                    <span className="method-value">{personalInfo.location}</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4 className="social-title">Connect with me</h4>
                <div className="social-buttons">
                  <a 
                    href={personalInfo.linkedin} 
                    className="social-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={18} />
                    LinkedIn
                  </a>
                  <a 
                    href={personalInfo.github} 
                    className="social-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>

              <div className="availability">
                <h4 className="availability-title">
                  <Calendar size={18} />
                  Availability
                </h4>
                <p className="availability-text">
                  Currently available for new projects and consulting opportunities. 
                  Response time: 24-48 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-header">
                <h3 className="form-title">
                  <MessageSquare size={20} />
                  Send a Message
                </h3>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company" className="form-label">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="projectType" className="form-label">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    {projectTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Brief description of your project"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="form-textarea"
                  rows={6}
                  placeholder="Tell me more about your project, goals, timeline, and how I can help..."
                />
              </div>

              <button 
                type="submit" 
                className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="form-success">
                  Message sent successfully! I'll get back to you within 24-48 hours.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;