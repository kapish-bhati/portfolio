import { useEffect, useRef, useState } from 'react';
import { Trophy, Award, Star, Target, Flag, Medal } from 'lucide-react';

const achievements = [
  { icon: Trophy, title: 'GATE 2026 AIR 6709', description: 'Among top candidates nationwide', color: 'green' },
  { icon: Award, title: 'GATE 2025 Qualified', description: 'Computer Science & IT', color: 'blue' },
  { icon: Flag, title: 'SSB Recommended', description: 'Services Selection Board recommendation', color: 'orange' },
  { icon: Star, title: 'IEEE Publications', description: '2 research papers published', color: 'purple' },
  { icon: Medal, title: 'CGPA 8.5', description: 'Academic excellence throughout', color: 'green' },
  { icon: Target, title: '3+ Technical Internships', description: 'DRDO, Shiv Nadar, Femacare', color: 'blue' },
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  green: { bg: 'bg-cyber-green/10', border: 'border-cyber-green/30', text: 'text-cyber-green' },
  blue: { bg: 'bg-cyber-blue/10', border: 'border-cyber-blue/30', text: 'text-cyber-blue' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400' },
};

export default function Achievements() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="achievements" ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <h2 className="section-title cyber-text">Achievements</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const c = colorMap[a.color];
            const Icon = a.icon;
            return (
              <div key={i} className={`cyber-card p-6 ${c.bg} border ${c.border} group hover:scale-105 transition-all duration-300`}>
                <div className={`mb-4 ${c.text}`}><Icon className="w-10 h-10" /></div>
                <h3 className="text-lg font-display font-bold text-white mb-2">{a.title}</h3>
                <p className="text-gray-400 text-sm">{a.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
