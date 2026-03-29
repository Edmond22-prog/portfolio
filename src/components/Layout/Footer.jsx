import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import configData from '../../data/config.json';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer glass">
      <div className="container footer-content">
        <div className="footer-left">
          <p className="footer-copyright">
            &copy; {year} {configData.footer.copyrightName}<span className="accent-text">{configData.footer.copyrightSuffix}</span>. All rights reserved.
          </p>
          <p className="footer-subtitle">{configData.title}</p>
        </div>
        
        <div className="footer-socials">
          <a href={configData.socials.github} target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
            <Github size={20} />
          </a>
          <a href={configData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${configData.email}`} className="social-link" title="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
