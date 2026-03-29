import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import ColorPicker from '../Theme/ColorPicker';
import configData from '../../data/config.json';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks = [
    { title: 'Biography', path: '/' },
    { title: 'Experience', path: '/experience' },
    { title: 'Skills & Projects', path: '/skills' },
    { title: 'Community', path: '/contributions' },
    { title: 'Articles', path: '/articles' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <header className="navbar glass">
      <div className="container nav-content">
        <NavLink to="/" className="nav-logo">
          {configData.name}<span className="accent-text">{configData.footer.copyrightSuffix}</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Controls */}
        <div className="nav-controls">
          <ColorPicker />
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-nav glass">
          <ul className="mobile-nav-links">
            {navLinks.map(link => (
              <li key={link.path}>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => isActive ? "mobile-nav-link active" : "mobile-nav-link"}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
