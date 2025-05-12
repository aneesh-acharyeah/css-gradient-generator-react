// src/hooks/useGradient.js
export const useGradient = () => {
  const generateGradientCSS = (gradient) => {
    const { type, angle, colors } = gradient;
    
    const colorStops = colors
      .sort((a, b) => a.position - b.position)
      .map(c => `${c.color} ${c.position}%`)
      .join(', ');

    switch (type) {
      case 'linear':
        return `linear-gradient(${angle}deg, ${colorStops})`;
      case 'radial':
        return `radial-gradient(circle, ${colorStops})`;
      case 'conic':
        return `conic-gradient(from ${angle}deg, ${colorStops})`;
      default:
        return `linear-gradient(${angle}deg, ${colorStops})`;
    }
  };

  return { generateGradientCSS };
};

// Also export as named export for direct usage
export const generateGradientCSS = (gradient) => {
  const { type, angle, colors } = gradient;
  
  const colorStops = colors
    .sort((a, b) => a.position - b.position)
    .map(c => `${c.color} ${c.position}%`)
    .join(', ');

  switch (type) {
    case 'linear':
      return `linear-gradient(${angle}deg, ${colorStops})`;
    case 'radial':
      return `radial-gradient(circle, ${colorStops})`;
    case 'conic':
      return `conic-gradient(from ${angle}deg, ${colorStops})`;
    default:
      return `linear-gradient(${angle}deg, ${colorStops})`;
  }
};