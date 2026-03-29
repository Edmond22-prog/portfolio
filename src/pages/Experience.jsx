import React, { useEffect } from 'react';
import { Briefcase, Calendar, MapPin, Globe, FileBadge, ExternalLink } from 'lucide-react';
import experienceData from '../data/experience.json';
import './Experience.css';

const Experience = () => {
  useEffect(() => { document.title = 'Experiences - Edmond Makolle'; }, []);

  return (
    <div className="page-container page-transition">
      <div className="container">
        <h1 className="page-title">{experienceData.pageTitle}</h1>
        <p className="page-subtitle">{experienceData.pageSubtitle}</p>

        <div className="timeline">
          {experienceData.items.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={20} className="marker-icon" />
              </div>
              <div className="timeline-content glass">
                <div className="timeline-header">
                  <div className="company-info-wrapper">
                    {exp.logoUrl && (
                      <div className="company-logo">
                        <img src={exp.logoUrl} alt={`${exp.company} logo`} />
                      </div>
                    )}
                    <div className="company-details">
                      <h3 className="role">{exp.role}</h3>
                      <div className="company-name-wrapper">
                        {exp.companyLink ? (
                          <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="company-link">
                            <h4 className="company">{exp.company}</h4>
                            <ExternalLink size={14} className="link-icon" />
                          </a>
                        ) : (
                          <h4 className="company">{exp.company}</h4>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="meta-info">
                    <div className="period meta-tag">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    {exp.location && (
                      <div className="location meta-tag">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                    {exp.workMode && (
                      <div className="work-mode meta-tag">
                        <Globe size={14} />
                        <span>{exp.workMode}</span>
                      </div>
                    )}
                    {exp.contractType && (
                      <div className="contract-type meta-tag">
                        <FileBadge size={14} />
                        <span>{exp.contractType}</span>
                      </div>
                    )}
                  </div>
                </div>
                <p className="description">{exp.description}</p>
                <ul className="highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
