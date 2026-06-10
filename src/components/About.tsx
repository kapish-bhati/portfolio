import { useEffect, useRef, useState } from 'react';
import { User, GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const timeline = [
  { year: '2024', title: 'GATE 2026 Qualified', desc: 'AIR 6709 - All India Rank' },
  { year: '2024', title: 'Femacare Internship', desc: 'Product Management & Optimization' },
  { year: '2023', title: 'Shiv Nadar Foundation', desc: 'Resource Booking Platform Development' },
  { year: '2023', title: 'DRDO Internship', desc: 'Defense-grade Security Systems' },
  { year: '2022', title: 'IEEE Publications', desc: 'Machine Learning Research Papers' },
  { year: '2021', title: 'B.Tech Journey', desc: 'Computer Science Engineering' },
];

export default function About() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <User className="w-8 h-8 text-cyber-blue" />
          <h2 className="section-title cyber-text">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" /><div className="terminal-dot bg-yellow-500" /><div className="terminal-dot bg-green-500" />
              <span className="ml-4 text-gray-500 text-xs font-mono">kapish@portfolio:~</span>
            </div>
            <div className="p-4 font-mono text-sm">
              <div className="mb-4"><span className="text-cyber-green">$ </span><span className="text-white">whoami</span></div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>I'm <span className="text-cyber-blue font-semibold">Kapish Bhati</span>, a Computer Science Engineer passionate about <span className="text-cyber-green">Cybersecurity</span>, <span className="text-cyber-blue">AI/ML</span>, and building real-world products that make a difference.</p>
                <p>My journey spans from implementing defense-grade security systems at <span className="text-cyber-green">DRDO</span> to developing ML models for medical diagnosis published in <span className="text-cyber-blue">IEEE conferences</span>.</p>
                <p><span className="text-cyber-green">GATE 2026 AIR 6709</span> qualified, I'm on a mission to secure digital infrastructure and push the boundaries of AI research.</p>
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400"><GraduationCap className="w-4 h-4 text-cyber-blue" /><span>B.Tech CSE</span></div>
                <div className="flex items-center gap-2 text-gray-400"><MapPin className="w-4 h-4 text-cyber-green" /><span>India</span></div>
                <div className="flex items-center gap-2 text-gray-400"><Calendar className="w-4 h-4 text-cyber-blue" /><span>Class of 2025</span></div>
                <div className="flex items-center gap-2 text-gray-400"><Award className="w-4 h-4 text-cyber-green" /><span>SSB Recommended</span></div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-semibold text-white mb-6">
              <span className="text-cyber-blue">{'<'}</span> Journey <span className="text-cyber-blue">{'/>'}</span>
            </h3>
            <div className="relative pl-6 border-l-2 border-cyber-blue/30">
              {timeline.map((item, i) => (
                <div key={i} className="relative mb-8 last:mb-0 group">
                  <div className="absolute -left-[1.4rem] w-3 h-3 rounded-full bg-cyber-dark border-2 border-cyber-blue group-hover:bg-cyber-blue transition-colors" />
                  <div className="cyber-card p-4 ml-2">
                    <span className="text-cyber-green font-mono text-sm font-semibold">{item.year}</span>
                    <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
