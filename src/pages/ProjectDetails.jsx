import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Building2, Tag, Layers, ExternalLink } from 'lucide-react';
import skillsData from '../data/skills.json';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = useMemo(() => {
    return skillsData.architectureSectionData.projects.find(p => p.id === id);
  }, [id]);

  if (!project) {
    return (
      <div className="page-container container not-found">
        <h2>Project not found</h2>
        <button onClick={() => navigate('/skills')} className="btn btn-primary">
          Back to Skills & Projects
        </button>
      </div>
    );
  }

  return (
    <div className="page-container page-transition">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        <button onClick={() => navigate(-1)} className="back-button">
          <ArrowLeft size={20} /> Back
        </button>

        <div className="project-detail-header glass">
          <h1 className="project-detail-title">{project.title}</h1>

          <div className="project-header-bottom">
            <div className="project-meta-list">
              <div className="meta-item">
                <Building2 size={16} />
                <span>{project.company}</span>
              </div>
              <div className="meta-item">
                <Layers size={16} />
                <span>{project.type}</span>
              </div>
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                <ExternalLink size={16} />
                View Project
              </a>
            )}
          </div>
        </div>

        <div className="project-detail-content glass">
          <h2 className="section-title">Overview</h2>
          <p className="description-text">{project.description}</p>
          
          <h2 className="section-title" style={{ marginTop: '2rem' }}>Architecture & Implementation</h2>
          <p className="detailed-text">{project.detailedDescription}</p>

          <h2 className="section-title" style={{ marginTop: '2rem' }}>Technologies Used</h2>
          <div className="tags-container">
            {project.tags.map((tag, i) => (
              <div key={i} className="detail-tag">
                <Tag size={14} className="tag-icon" />
                {tag}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProjectDetails;
