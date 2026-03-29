import React, { useEffect } from 'react';
import { Users, Calendar, ExternalLink } from 'lucide-react';
import contributionsData from '../data/contributions.json';
import './Contributions.css';

const Contributions = () => {
  useEffect(() => { document.title = 'Community - Edmond Makolle'; }, []);

  return (
    <div className="page-container page-transition">
      <div className="container">
        <h1 className="page-title">{contributionsData.pageTitle}</h1>
        <p className="page-subtitle">{contributionsData.pageSubtitle}</p>

        <div className="contributions-grid">
          {[...contributionsData.items].sort((a, b) => a.id - b.id).map((item, index) => (
            <div key={index} className="community-card glass">
              <div className="community-header">
                {item.logoUrl && (
                  <div className="community-logo">
                    <img src={item.logoUrl} alt={`${item.communityName} logo`} />
                  </div>
                )}
                <div className="community-titles">
                  <h3 className="community-name">{item.communityName}</h3>
                  <h4 className="community-role">{item.role}</h4>
                </div>
              </div>
              
              <div className="community-meta">
                <div className="meta-tag">
                  <Calendar size={14} />
                  <span>{item.duration}</span>
                </div>
                <div className="meta-tag">
                  <Users size={14} />
                  <span>Community</span>
                </div>
              </div>

              <p className="community-desc">{item.description}</p>
              
              <div className="community-footer">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="community-link">
                  Visit Community <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contributions;
