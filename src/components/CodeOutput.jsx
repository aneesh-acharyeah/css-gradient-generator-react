// components/CodeOutput.jsx
import { useState } from 'react';
import { generateGradientCSS } from '../hooks/useGradient';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export default function CodeOutput({ gradient }) {
  const [copied, setCopied] = useState(false);
  const cssCode = generateGradientCSS(gradient);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-output">
      <h3>CSS Code</h3>
      <pre>{cssCode}</pre>
      <CopyToClipboard text={cssCode} onCopy={handleCopy}>
        <button className="copy-btn">
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </button>
      </CopyToClipboard>
    </div>
  );
}