// components/ColorPicker.jsx
import { HexColorPicker } from 'react-colorful';
import { useState } from 'react';
import '../styles/ColorStop.css';

export default function ColorPicker({ colorStop, index, updateColor, removeColor, disabled }) {
  const [showPicker, setShowPicker] = useState(false);
  const [color, setColor] = useState(colorStop.color);

  const handlePositionChange = (e) => {
    updateColor(index, { ...colorStop, position: e.target.value });
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    updateColor(index, { ...colorStop, color: newColor });
  };

  return (
    <div className="color-stop">
      <div className="color-header">
        <span>Color {index + 1}</span>
        <button 
          onClick={() => removeColor(index)} 
          disabled={disabled}
          className="remove-btn"
        >
          ×
        </button>
      </div>

      <div className="color-controls">
        <div 
          className="color-swatch" 
          style={{ backgroundColor: color }}
          onClick={() => setShowPicker(!showPicker)}
        />

        <input
          type="text"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
          className="color-input"
        />

        <input
          type="range"
          min="0"
          max="100"
          value={colorStop.position}
          onChange={handlePositionChange}
          className="position-slider"
        />
        <span className="position-value">{colorStop.position}%</span>
      </div>

      {showPicker && (
        <div className="color-picker-popup">
          <HexColorPicker color={color} onChange={handleColorChange} />
          <button 
            className="close-picker"
            onClick={() => setShowPicker(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}