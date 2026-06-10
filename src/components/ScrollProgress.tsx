import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-cyber-dark z-50">
      <div className="h-full transition-all duration-100"
        style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #06b6d4, #10b981)', boxShadow: '0 0 10px rgba(6,182,212,0.8)' }} />
    </div>
  );
}
