// App.jsx
import { useState } from 'react';
import GradientPreview from './components/GradientPreview';
import GradientControls from './components/GradientControls';
import CodeOutput from './components/CodeOutput';
import PresetsPanel from './components/PresetsPanel';
import ColorPicker from './components/ColorPicker'; // Add this import
import './styles/App.css';

function App() {
  const [gradient, setGradient] = useState({
    type: 'linear',
    angle: 90,
    colors: [
      { color: '#FF512F', position: 0 },
      { color: '#DD2476', position: 100 }
    ]
  });

  const updateColor = (index, newColor) => {
    const updatedColors = [...gradient.colors];
    updatedColors[index] = newColor;
    setGradient({...gradient, colors: updatedColors});
  };

  const addColor = () => {
    const newColor = {
      color: `#${Math.floor(Math.random()*16777215).toString(16)}`,
      position: Math.floor(Math.random() * 100)
    };
    setGradient({...gradient, colors: [...gradient.colors, newColor]});
  };

  const removeColor = (index) => {
    if (gradient.colors.length <= 2) return;
    const updatedColors = gradient.colors.filter((_, i) => i !== index);
    setGradient({...gradient, colors: updatedColors});
  };

  return (
    <div className="gradient-generator">
      <h1>CSS Gradient Generator</h1>
      
      <div className="main-container">
        <GradientPreview gradient={gradient} />
        
        <div className="controls-container">
          <GradientControls
            gradient={gradient}
            setGradient={setGradient}
            addColor={addColor}
          />
          
          {gradient.colors.map((colorStop, index) => (
            <ColorPicker
              key={index}
              colorStop={colorStop}
              index={index}
              updateColor={updateColor}
              removeColor={removeColor}
              disabled={gradient.colors.length <= 2}
            />
          ))}
          
          <CodeOutput gradient={gradient} />
        </div>
        
        <PresetsPanel setGradient={setGradient} />
      </div>
    </div>
  );
}

export default App;