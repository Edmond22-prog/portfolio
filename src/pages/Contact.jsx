import React, { useEffect } from 'react';
import { Mail, Github, Linkedin, MessageSquare, MapPin } from 'lucide-react';
import contactData from '../data/contact.json';
import configData from '../data/config.json';
import './Contact.css';

const Contact = () => {
  useEffect(() => { document.title = 'Contact - Edmond Makolle'; }, []);

  return (
    <div className="page-container page-transition">
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div className="contact-header">
          <h1 className="page-title">{contactData.pageTitle}</h1>
          <p className="page-subtitle">{contactData.pageSubtitle}</p>
        </div>

        <div className="contact-content glass">
          <div className="contact-info">
            <h2 className="contact-title">{contactData.contactInfoTitle}</h2>
            <p className="contact-desc">
               {contactData.contactInfoDesc}
            </p>

            <div className="info-items">
              <a href={`mailto:${configData.email}`} className="info-item">
                <div className="info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Email</span>
                  <p className="info-value">{configData.email}</p>
                </div>
              </a>

              <a href={configData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon">
                  <Linkedin size={20} />
                </div>
                <div>
                  <span className="info-label">LinkedIn</span>
                  <p className="info-value">linkedin.com/in/{configData.socials.linkedin.split('/').filter(Boolean).pop()}</p>
                </div>
              </a>

              <a href={configData.socials.github} target="_blank" rel="noopener noreferrer" className="info-item">
                <div className="info-icon">
                  <Github size={20} />
                </div>
                <div>
                  <span className="info-label">GitHub</span>
                  <p className="info-value">github.com/{configData.socials.github.split('/').filter(Boolean).pop()}</p>
                </div>
              </a>

              <div className="info-item static">
                <div className="info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Location</span>
                  <p className="info-value">{contactData.location}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-message">
             <div className="message-icon-wrapper">
               <MessageSquare size={48} className="chat-icon"/>
             </div>
             <h3>{contactData.callToActionText}</h3>
             <a href={`mailto:${configData.email}`} className="btn btn-primary contact-btn">{contactData.callToActionButtonText}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
