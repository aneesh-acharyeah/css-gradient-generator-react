// components/GradientPreview.jsx
import { useEffect, useState } from 'react';
import { generateGradientCSS } from '../hooks/useGradient';

export default function GradientPreview({ gradient }) {
  const [css, setCss] = useState('');

  useEffect(() => {
    setCss(generateGradientCSS(gradient));
  }, [gradient]);

  return (
    <div className="gradient-preview">
      <div 
        className="preview-area"
        style={{ background: css }}
      >
        <div className="preview-text">Your Gradient</div>
      </div>
    </div>
  );
}