// components/PresetsPanel.jsx
const presets = [
    {
        name: 'Sunset',
        colors: [
            { color: '#FF512F', position: 0 },
            { color: '#DD2476', position: 100 }
        ]
    },
    {
        name: 'Ocean',
        colors: [
            { color: '#1CB5E0', position: 0 },
            { color: '#000851', position: 100 }
        ]
    },
    {
        name: 'Aurora',
        colors: [
            { color: '#00F260', position: 0 },
            { color: '#0575E6', position: 100 }
        ]
    },
    {
        name: 'Peach',
        colors: [
            { color: '#ED4264', position: 0 },
            { color: '#FFEDBC', position: 100 }
        ]
    },
    {
        name: 'Firewatch',
        colors: [
            { color: '#cb2d3e', position: 0 },
            { color: '#ef473a', position: 100 }
        ]
    },
    {
        name: 'Skyline',
        colors: [
            { color: '#1488CC', position: 0 },
            { color: '#2B32B2', position: 100 }
        ]
    },
    {
        name: 'Lush',
        colors: [
            { color: '#56ab2f', position: 0 },
            { color: '#a8e063', position: 100 }
        ]
    },
    {
        name: 'Royal',
        colors: [
            { color: '#141E30', position: 0 },
            { color: '#243B55', position: 100 }
        ]
    },
    {
        name: 'Purple Dream',
        colors: [
            { color: '#DA22FF', position: 0 },
            { color: '#9733EE', position: 100 }
        ]
    },
    {
        name: 'Mojito',
        colors: [
            { color: '#1D976C', position: 0 },
            { color: '#93F9B9', position: 100 }
        ]
    }
];


export default function PresetsPanel({ setGradient }) {
    const applyPreset = (preset) => {
        setGradient({
            type: 'linear',
            angle: 90,
            colors: preset.colors
        });
    };

    return (
        <div className="presets-panel">
            <h3>Preset Gradients</h3>
            <div className="presets-grid">
                {presets.map((preset, index) => (
                    <button
                        key={index}
                        className="preset-btn"
                        onClick={() => applyPreset(preset)}
                        style={{
                            background: `linear-gradient(90deg, ${preset.colors.map(c => `${c.color} ${c.position}%`).join(', ')
                                }`
                        }}
                        title={preset.name}
                    />
                ))}
            </div>
        </div>
    );
}