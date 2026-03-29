import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const accentColors = [
  { name: 'Indigo', value: '#6366f1', hover: '#4f46e5' },
  { name: 'Emerald', value: '#10b981', hover: '#059669' },
  { name: 'Rose', value: '#f43f5e', hover: '#e11d48' },
  { name: 'Amber', value: '#f59e0b', hover: '#d97706' },
  { name: 'Sky', value: '#0ea5e9', hover: '#0284c7' }
];

// Helper to convert hex to RGB
const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : null;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [accent, setAccent] = useState(() => {
    const saved = localStorage.getItem('accent');
    return saved ? JSON.parse(saved) : accentColors[0];
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Setting RGB values for glassmorphism utilities if needed
    const bgPrimary = theme === 'dark' ? '#0f172a' : '#ffffff';
    document.documentElement.style.setProperty('--bg-primary-rgb', hexToRgb(bgPrimary));
  }, [theme]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent-color', accent.value);
    document.documentElement.style.setProperty('--accent-hover', accent.hover);
    localStorage.setItem('accent', JSON.stringify(accent));
  }, [accent]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, accent, setAccent, accentColors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
