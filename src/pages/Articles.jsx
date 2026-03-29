import React, { useState, useEffect } from 'react';
import { FileText, Calendar, ArrowRight, Mic, Quote, Edit3 } from 'lucide-react';
import articlesData from '../data/articles.json';
import './Articles.css';

const Articles = () => {
  useEffect(() => { document.title = 'Articles - Edmond Makolle'; }, []);

  const [activeTab, setActiveTab] = useState('authored');

  const getItemsForTab = () => {
    switch(activeTab) {
      case 'authored': return articlesData.authored;
      case 'mentioned': return articlesData.mentioned;
      case 'presentations': return articlesData.presentations;
      default: return articlesData.authored;
    }
  };

  const currentItems = getItemsForTab();

  return (
    <div className="page-container page-transition">
      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 className="page-title">{articlesData.pageTitle}</h1>
        <p className="page-subtitle">{articlesData.pageSubtitle}</p>

        <div className="articles-tabs glass">
          <button 
            className={`tab-btn ${activeTab === 'authored' ? 'active' : ''}`}
            onClick={() => setActiveTab('authored')}
          >
            <Edit3 size={18} /> Authored Articles
          </button>
          <button 
            className={`tab-btn ${activeTab === 'mentioned' ? 'active' : ''}`}
            onClick={() => setActiveTab('mentioned')}
          >
            <Quote size={18} /> Mentions & Features
          </button>
          <button 
            className={`tab-btn ${activeTab === 'presentations' ? 'active' : ''}`}
            onClick={() => setActiveTab('presentations')}
          >
            <Mic size={18} /> Presentations
          </button>
        </div>

        <div className="articles-list" key={activeTab}>
          {currentItems.map((item, index) => (
            <article 
              key={item.id} 
              className="article-card glass anim-style-5"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="article-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{item.date}</span>
                </div>
                <div className="meta-item">
                  {activeTab === 'presentations' ? <Mic size={14} /> : (activeTab === 'mentioned' ? <Quote size={14} /> : <FileText size={14} />)}
                  <span>{item.readTime}</span>
                </div>
              </div>
              
              <h2 className="article-title">
                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
              </h2>
              
              <p className="article-excerpt">{item.excerpt}</p>
              
              <div className="article-footer">
                <div className="article-tags">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                
                <a href={item.link} className="read-more" target="_blank" rel="noopener noreferrer">
                  {activeTab === 'presentations' ? 'Watch Rec' : (activeTab === 'mentioned' ? 'Read Feature' : 'Read Article')} 
                  <ArrowRight size={16} className="read-more-icon" />
                </a>
              </div>
            </article>
          ))}
          {currentItems.length === 0 && (
            <div className="no-items-placeholder glass">
              <p>No items found for this category at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Articles;
