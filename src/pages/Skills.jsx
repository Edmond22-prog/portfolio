import React, { useState, useMemo, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Server, Database, Cloud, Shield, Code, Settings, ArrowRight, Filter } from 'lucide-react';
import skillsData from '../data/skills.json';
import './Skills.css';

const iconMap = {
  Server: <Server className="skill-icon" />,
  Database: <Database className="skill-icon" />,
  Cloud: <Cloud className="skill-icon" />,
  Shield: <Shield className="skill-icon" />,
  Code: <Code className="skill-icon" />,
  Settings: <Settings className="skill-icon" />
};

const Skills = () => {
  useEffect(() => { document.title = 'Skills & Projects - Edmond Makolle'; }, []);

  const [selectedCompany, setSelectedCompany] = useState('All');
  const [selectedTech, setSelectedTech] = useState('All');

  const { companies, technologies } = useMemo(() => {
    const compSet = new Set();
    const techSet = new Set();
    
    skillsData.architectureSectionData.projects.forEach(p => {
      if (p.company) compSet.add(p.company);
      p.tags.forEach(t => techSet.add(t));
    });

    return {
      companies: ['All', ...Array.from(compSet).sort()],
      technologies: ['All', ...Array.from(techSet).sort()]
    };
  }, []);

  const filteredProjects = useMemo(() => {
    return skillsData.architectureSectionData.projects
      .filter(p => {
        const matchCompany = selectedCompany === 'All' || p.company === selectedCompany;
        const matchTech = selectedTech === 'All' || p.tags.includes(selectedTech);
        return matchCompany && matchTech;
      })
      .sort((a, b) => a.title.localeCompare(b.title));
  }, [selectedCompany, selectedTech]);

  return (
    <div className="page-container page-transition">
      <div className="container">
        <h1 className="page-title">{skillsData.pageTitle}</h1>
        <p className="page-subtitle">{skillsData.pageSubtitle}</p>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillsData.categories.map((category, index) => (
            <div key={index} className="skill-category glass">
              <div className="category-header">
                {iconMap[category.iconName]}
                <h3 className="category-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-badge">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Projects & Architecture */}
        <div className="architecture-section">
          <h2 className="section-title">{skillsData.architectureSectionData.title}</h2>
          <p className="section-description">
            {skillsData.architectureSectionData.description}
          </p>

          <div className="filters-container glass">
            <div className="filter-group">
              <label><Filter size={16} /> Company:</label>
              <select 
                value={selectedCompany} 
                onChange={(e) => setSelectedCompany(e.target.value)}
                className="filter-select"
              >
                {companies.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            
            <div className="filter-group">
              <label><Filter size={16} /> Technology:</label>
              <select 
                value={selectedTech} 
                onChange={(e) => setSelectedTech(e.target.value)}
                className="filter-select"
              >
                {technologies.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="projects-grid">
              {filteredProjects.map((proj) => (
                <NavLink to={`/projects/${proj.id}`} key={proj.id} className="project-card glass hover-card">
                  <div className="project-header">
                    <h3 className="project-title">{proj.title}</h3>
                    <span className="project-type">{proj.company}</span>
                  </div>
                  <p className="project-description">{proj.description}</p>
                  <div className="project-footer">
                    <div className="project-tags">
                      {proj.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                      {proj.tags.length > 3 && <span className="tag">+{proj.tags.length - 3}</span>}
                    </div>
                    <span className="view-details-link">
                      Details <ArrowRight size={16} />
                    </span>
                  </div>
                </NavLink>
              ))}
            </div>
          ) : (
            <div className="no-projects-found glass">
               <p>No projects match your current filters. Try selecting different options.</p>
               <button 
                className="btn btn-secondary" 
                onClick={() => { setSelectedCompany('All'); setSelectedTech('All'); }}
                style={{ marginTop: '1rem' }}
               >
                 Reset Filters
               </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
