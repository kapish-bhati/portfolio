import { useEffect, useRef, useState } from 'react';
import { FolderKanban, ExternalLink, Github, Lock, Brain, Vote, Image } from 'lucide-react';

const projects = [
  {
    title: 'AES-128 Implementation', category: 'Cybersecurity',
    description: 'Implementation of AES-128 encryption algorithm developed during DRDO internship for secure defense communications.',
    icon: Lock, color: 'green',
    tags: ['Cryptography', 'C++', 'Security', 'AES'],
    highlights: ['Defense-grade encryption', 'DRDO project', 'Secure communication'],
  },
  {
    title: 'Student Depression Prediction', category: 'Machine Learning',
    description: 'ML model for predicting student mental health status using Logistic Regression, Random Forest, and data analysis techniques.',
    icon: Brain, color: 'purple',
    tags: ['Python', 'Scikit-Learn', 'Random Forest', 'Mental Health'],
    highlights: ['Data analysis', 'Multiple ML models', 'Social impact'],
  },
  {
    title: 'Election Management System', category: 'Full Stack',
    description: 'Comprehensive voting system supporting standard, Tideman, and runoff voting methods with secure authentication.',
    icon: Vote, color: 'blue',
    tags: ['Python', 'Flask', 'SQL', 'Authentication'],
    highlights: ['Multiple voting algorithms', 'Secure system', 'Full-stack'],
  },
  {
    title: 'Image Processing Suite', category: 'Computer Vision',
    description: 'Image processing toolkit featuring blur filters, edge detection, and image recovery algorithms.',
    icon: Image, color: 'orange',
    tags: ['Python', 'OpenCV', 'Image Processing', 'CV'],
    highlights: ['Multiple filters', 'Edge detection', 'Recovery tools'],
  },
];

const colorMap: Record<string, { border: string; text: string; bg: string }> = {
  green: { border: 'hover:border-cyber-green/50', text: 'text-cyber-green', bg: 'bg-cyber-green/10' },
  blue: { border: 'hover:border-cyber-blue/50', text: 'text-cyber-blue', bg: 'bg-cyber-blue/10' },
  purple: { border: 'hover:border-purple-500/50', text: 'text-purple-400', bg: 'bg-purple-500/10' },
  orange: { border: 'hover:border-orange-500/50', text: 'text-orange-400', bg: 'bg-orange-500/10' },
};

export default function Projects() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <FolderKanban className="w-8 h-8 text-cyber-blue" />
          <h2 className="section-title cyber-text">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const c = colorMap[project.color];
            const Icon = project.icon;
            return (
              <div key={i} className={`cyber-card p-6 group ${c.border} transition-all duration-500`}>
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${c.bg}`}><Icon className={`w-6 h-6 ${c.text}`} /></div>
                  <span className={`text-xs font-mono px-3 py-1 rounded-full ${c.bg} ${c.text}`}>{project.category}</span>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, ti) => <span key={ti} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 font-mono">{tag}</span>)}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((h, hi) => <span key={hi} className="text-xs text-gray-500">{hi > 0 ? ' • ' : ''}{h}</span>)}
                  </div>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors"><Github className="w-5 h-5 text-gray-400 hover:text-white" /></a>
                    <a href="#" className="p-2 rounded-lg hover:bg-white/10 transition-colors"><ExternalLink className="w-5 h-5 text-gray-400 hover:text-white" /></a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a href="https://github.com/kapish-bhati" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyber-blue hover:text-cyber-blue-light transition-colors font-mono text-sm">
            <Github className="w-4 h-4" />View all projects on GitHub<ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
