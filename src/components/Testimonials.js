import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../mock';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleManualNavigation = (direction) => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      nextTestimonial();
    } else {
      prevTestimonial();
    }
    
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="section-header">
          <div className="section-label">TESTIMONIALS</div>
          <h2 className="section-title">What Colleagues Say</h2>
          <p className="section-description">
            Feedback from industry leaders and collaborators
          </p>
        </div>

        <div className="testimonials-carousel">
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="quote-icon">
                <Quote size={32} />
              </div>
              
              <blockquote className="testimonial-text">
                "{testimonials[currentTestimonial].testimonial}"
              </blockquote>
              
              <div className="testimonial-rating">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                  <Star key={index} size={16} className="star-filled" />
                ))}
              </div>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                  />
                </div>
                <div className="author-info">
                  <div className="author-name">{testimonials[currentTestimonial].name}</div>
                  <div className="author-position">{testimonials[currentTestimonial].position}</div>
                  <div className="author-company">{testimonials[currentTestimonial].company}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="testimonial-navigation">
            <button 
              className="nav-button prev"
              onClick={() => handleManualNavigation('prev')}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentTestimonial(index);
                    setIsAutoPlaying(false);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-button next"
              onClick={() => handleManualNavigation('next')}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="testimonials-grid">
          {testimonials.filter(t => t.featured).map((testimonial) => (
            <div key={testimonial.id} className="testimonial-preview">
              <div className="preview-content">
                <div className="preview-quote">"{testimonial.testimonial.substring(0, 120)}..."</div>
                <div className="preview-author">
                  <div className="preview-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="preview-info">
                    <div className="preview-name">{testimonial.name}</div>
                    <div className="preview-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;