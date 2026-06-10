import { useEffect, useState, useRef } from 'react';
import { Download, ArrowRight, Terminal, Shield, Cpu, Award } from 'lucide-react';

const typingTexts = ['Cybersecurity Engineer', 'AI/ML Researcher', 'GATE Qualified Engineer', 'Defense-tech Developer'];

function AnimatedCounter({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!vis) return;
    let start: number;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 2000, 1);
      setCount(Math.floor(p * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [vis, end]);

  return <div ref={ref} className="stat-number">{count}{suffix}</div>;
}

export default function Hero() {
  const [textIdx, setTextIdx] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typingTexts[textIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (display.length < current.length) setDisplay(current.slice(0, display.length + 1));
        else setTimeout(() => setDeleting(true), 2000);
      } else {
        if (display.length > 0) setDisplay(display.slice(0, -1));
        else { setDeleting(false); setTextIdx((p) => (p + 1) % typingTexts.length); }
      }
    }, deleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [display, deleting, textIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyber-blue/30">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green" />
          </span>
          <span className="text-sm font-mono text-cyber-green">Available for opportunities</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 leading-tight">
          <span className="text-white">Building</span><span className="cyber-text"> Secure Systems</span><span className="text-white">,</span>
          <br /><span className="text-white">Intelligent Models &</span>
          <br /><span className="cyber-text">Real-World Products</span>
        </h1>

        <div className="mb-10 h-8 flex items-center justify-center">
          <Terminal className="w-5 h-5 text-cyber-green mr-2" />
          <span className="text-lg md:text-xl text-gray-300 font-mono">
            {display}<span className="animate-pulse text-cyber-blue">|</span>
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary flex items-center gap-2">
            View Projects <ArrowRight className="w-5 h-5" />
          </button>
          <a href="#" className="btn-secondary flex items-center gap-2"><Download className="w-5 h-5" />Download Resume</a>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-secondary">Contact Me</button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Award, end: 8.5, label: 'CGPA' },
            { icon: Shield, end: 3, suffix: '+', label: 'Internships' },
            { icon: Cpu, end: 2, label: 'IEEE Papers' },
            { icon: Terminal, end: 10, suffix: '+', label: 'Projects' },
          ].map((stat, i) => (
            <div key={i} className="cyber-card p-6 text-center">
              <div className="flex justify-center mb-3"><stat.icon className="w-8 h-8 text-cyber-blue" /></div>
              <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              <div className="text-gray-400 font-mono text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 rounded-full border-2 border-cyber-blue/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-3 bg-cyber-blue rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
