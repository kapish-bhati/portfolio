import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Shield, Users, TrendingUp } from 'lucide-react';

const experiences = [
  {
    company: 'DRDO', role: 'Cybersecurity Intern', location: 'Scientific Analysis Group',
    period: '2023', icon: Shield, color: 'green',
    highlights: ['Implemented AES-128 Encryption for secure communication', 'Developed defense-grade software systems', 'Worked on cryptography and secure communication protocols', 'Contributed to national security projects'],
  },
  {
    company: 'Shiv Nadar Foundation', role: 'Software Development Intern', location: 'Shiv Nadar University',
    period: '2023', icon: Users, color: 'blue',
    highlights: ['Built Resource Booking Platform with authentication', 'Implemented Role-Based Access Control (RBAC)', 'Developed internal tools for university operations', 'Full-stack development with modern technologies'],
  },
  {
    company: 'Femacare', role: 'Product Management Intern', location: 'Healthcare Tech',
    period: '2024', icon: TrendingUp, color: 'purple',
    highlights: ['Optimized user flows for better conversion', 'Conducted competitive analysis and market research', 'Supported fundraising activities and investor presentations', 'Product strategy and roadmap development'],
  },
];

const colors = {
  green: { border: 'border-l-cyber-green', bg: 'bg-cyber-green/10', text: 'text-cyber-green' },
  blue: { border: 'border-l-cyber-blue', bg: 'bg-cyber-blue/10', text: 'text-cyber-blue' },
  purple: { border: 'border-l-purple-500', bg: 'bg-purple-500/10', text: 'text-purple-400' },
};

export default function Experience() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8 text-cyber-green" />
          <h2 className="section-title cyber-text">Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => {
            const c = colors[exp.color as keyof typeof colors];
            const Icon = exp.icon;
            return (
              <div key={i} className={`cyber-card p-6 md:p-8 border-l-4 ${c.border} group`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl ${c.bg}`}><Icon className={`w-6 h-6 ${c.text}`} /></div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">{exp.role}</h3>
                      <p className={`font-semibold ${c.text}`}>{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm"><Calendar className="w-4 h-4" />{exp.period}</div>
                </div>
                <ul className="grid md:grid-cols-2 gap-3">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-2 text-gray-300 text-sm">
                      <span className={`mt-1 ${c.text}`}>›</span>{h}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
