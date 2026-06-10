import { useEffect, useRef, useState } from 'react';
import { Cpu, Shield, Code2, Wrench } from 'lucide-react';

interface Skill { name: string; level: number }
interface Category { title: string; icon: React.ReactNode; skills: Skill[]; gradient: string }

const categories: Category[] = [
  { title: 'Cybersecurity', icon: <Shield className="w-6 h-6" />, gradient: 'from-cyber-green to-emerald-400',
    skills: [{ name: 'AES Encryption', level: 90 }, { name: 'Cryptography', level: 85 }, { name: 'Secure Coding', level: 88 }, { name: 'Network Security', level: 82 }] },
  { title: 'Programming', icon: <Code2 className="w-6 h-6" />, gradient: 'from-cyber-blue to-sky-400',
    skills: [{ name: 'Python', level: 95 }, { name: 'C/C++', level: 88 }, { name: 'Java', level: 80 }, { name: 'JavaScript', level: 75 }] },
  { title: 'AI / Machine Learning', icon: <Cpu className="w-6 h-6" />, gradient: 'from-purple-500 to-pink-500',
    skills: [{ name: 'Machine Learning', level: 85 }, { name: 'Deep Learning', level: 80 }, { name: 'CNN', level: 82 }, { name: 'Scikit-Learn', level: 88 }] },
  { title: 'Tools & Technologies', icon: <Wrench className="w-6 h-6" />, gradient: 'from-orange-500 to-amber-400',
    skills: [{ name: 'Git/GitHub', level: 90 }, { name: 'Linux', level: 85 }, { name: 'Jupyter', level: 92 }, { name: 'VS Code', level: 95 }] },
];

const badges = ['AES', 'Cryptography', 'Network Security', 'Python', 'C++', 'Java', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'CNN', 'Random Forest', 'Git', 'Linux', 'Docker', 'REST APIs', 'SQL', 'MongoDB'];

export default function Skills() {
  const [vis, setVis] = useState(false);
  const [animated, setAnimated] = useState<Set<string>>(new Set());
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVis(true);
        setTimeout(() => {
          categories.forEach((cat) => cat.skills.forEach((s) => setTimeout(() => setAnimated((p) => new Set(p).add(s.name)), Math.random() * 300)));
        }, 200);
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Cpu className="w-8 h-8 text-cyber-blue" />
          <h2 className="section-title cyber-text">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {categories.map((cat, ci) => (
            <div key={ci} className="cyber-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${cat.gradient} bg-opacity-20`}>{cat.icon}</div>
                <h3 className="text-lg font-display font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-mono">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div className={`progress-fill bg-gradient-to-r ${cat.gradient}`} style={{ width: animated.has(skill.name) ? `${skill.level}%` : '0%' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="cyber-card p-6">
          <h3 className="text-lg font-display font-semibold text-white mb-6">All Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {badges.map((skill, i) => <span key={i} className="skill-badge cursor-default">{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
