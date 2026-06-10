import { useEffect, useState } from 'react';

interface Particle { id: number; x: number; y: number; size: number; duration: number; delay: number }

export default function FloatingParticles() {
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 4 + 2, duration: Math.random() * 10 + 10, delay: Math.random() * 5,
    }))
  );

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <div key={p.id} className="absolute rounded-full bg-cyber-blue/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size,
            animation: `float ${p.duration}s ease-in-out infinite`, animationDelay: `${p.delay}s` }} />
      ))}
    </div>
  );
}

export function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => { setPos({ x: e.clientX, y: e.clientY }); setVis(true); };
    const leave = () => setVis(false);
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    return () => { window.removeEventListener('mousemove', move); document.removeEventListener('mouseleave', leave); };
  }, []);

  if (!vis) return null;
  return (
    <div className="fixed pointer-events-none z-50 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 opacity-30 blur-3xl transition-opacity duration-300"
      style={{ left: pos.x, top: pos.y, background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }} />
  );
}
