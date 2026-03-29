import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Palette } from 'lucide-react';
import './ColorPicker.css';

const ColorPicker = () => {
  const { accentColors, accent, setAccent } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="color-picker-container">
      <button 
        className="color-picker-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        title="Choose Theme Color"
      >
        <Palette size={20} />
      </button>

      {isOpen && (
        <div className="color-picker-dropdown glass">
          <p className="color-picker-title">Accent Colors</p>
          <div className="color-options">
            {accentColors.map((color) => (
              <button
                key={color.name}
                className={`color-option ${accent.name === color.name ? 'active' : ''}`}
                style={{ backgroundColor: color.value }}
                onClick={() => {
                  setAccent(color);
                  setIsOpen(false);
                }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
