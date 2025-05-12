// components/GradientControls.jsx
export default function GradientControls({ gradient, setGradient, addColor }) {
  const handleTypeChange = (e) => {
    setGradient({...gradient, type: e.target.value});
  };

  const handleAngleChange = (e) => {
    setGradient({...gradient, angle: e.target.value});
  };

  return (
    <div className="gradient-controls">
      <div className="control-group">
        <label>Gradient Type</label>
        <select value={gradient.type} onChange={handleTypeChange}>
          <option value="linear">Linear</option>
          <option value="radial">Radial</option>
          <option value="conic">Conic</option>
        </select>
      </div>

      {gradient.type === 'linear' && (
        <div className="control-group">
          <label>Angle: {gradient.angle}°</label>
          <input
            type="range"
            min="0"
            max="360"
            value={gradient.angle}
            onChange={handleAngleChange}
          />
        </div>
      )}

      <button className="add-color-btn" onClick={addColor}>
        + Add Color Stop
      </button>
    </div>
  );
}