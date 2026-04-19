import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Server, Database, Cloud, Brain, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import biographyData from '../data/biography.json';
import './Biography.css';

const Biography = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => { document.title = 'Edmond Makolle'; }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!biographyData.testimonials || biographyData.testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % biographyData.testimonials.length);
    }, 10000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % biographyData.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? biographyData.testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="biography-page page-transition">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              {biographyData.hero.greeting} <span className="accent-text">{biographyData.hero.name}</span>.<br />
              {biographyData.hero.title}
            </h1>
            <p className="hero-description">
              {biographyData.hero.description}
            </p>
            <div className="hero-actions">
              <NavLink to={biographyData.hero.primaryActionLink} className="btn btn-primary">
                {biographyData.hero.primaryActionText} <ArrowRight size={18} />
              </NavLink>
              <NavLink to={biographyData.hero.secondaryActionLink} className="btn btn-secondary">
                {biographyData.hero.secondaryActionText}
              </NavLink>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-image-container">
              <div className="hero-blob-bg"></div>
              {biographyData.hero.avatar && (
                <img src={biographyData.hero.avatar} alt={biographyData.hero.name} className="hero-avatar" />
              )}
              
              {/* Floating Tech Badges */}
              <div className="tech-badge glass badge-1">
                <Server className="tech-icon" size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Microservices</span>
              </div>
              <div className="tech-badge glass badge-2">
                <Database className="tech-icon" size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Databases</span>
              </div>
              <div className="tech-badge glass badge-3">
                <Cloud className="tech-icon" size={18} style={{ color: 'var(--accent-color)' }} />
                <span>Cloud</span>
              </div>
              <div className="tech-badge glass badge-4">
                <Brain className="tech-icon" size={18} style={{ color: 'var(--accent-color)' }} />
                <span>AI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="section-title">{biographyData.about.title}</h2>
            <div className="about-text">
              {biographyData.about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </div>
          </div>
          
          <div className="stats-grid">
            {biographyData.stats.map((stat, index) => (
              <div key={index} className="stat-card glass">
                <h3 className="stat-number accent-text">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {biographyData.testimonials && biographyData.testimonials.length > 0 && (
        <section className="testimonials-section container">
          <div className="testimonials-header">
            <h2 className="section-title">What People Say</h2>
            <div className="carousel-controls">
              <button className="carousel-btn" onClick={prevTestimonial} aria-label="Previous Testimonial">
                <ChevronLeft size={20} />
              </button>
              <button className="carousel-btn" onClick={nextTestimonial} aria-label="Next Testimonial">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="carousel-container glass">
            <Quote size={48} className="quote-icon" />
            
            <div className="carousel-track" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {biographyData.testimonials.map((test, index) => (
                <div key={test.id} className="testimonial-slide">
                  <p className="testimonial-text">"{test.text}"</p>
                  <div className="testimonial-author">
                    {test.linkedin ? (
                      <a href={test.linkedin} target="_blank" rel="noopener noreferrer" className="author-link" title={`${test.name}'s LinkedIn`}>
                        <div className="author-initials">{test.initials}</div>
                      </a>
                    ) : (
                      <div className="author-initials">{test.initials}</div>
                    )}
                    <div className="author-info">
                      <h4 className="author-name">
                        {test.linkedin ? (
                          <a href={test.linkedin} target="_blank" rel="noopener noreferrer" className="author-link-name">
                            {test.name}
                          </a>
                        ) : (
                          test.name
                        )}
                      </h4>
                      <span className="author-role">{test.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="carousel-indicators">
              {biographyData.testimonials.map((_, index) => (
                <button 
                  key={index} 
                  className={`indicator-dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Biography;
