import { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' }, { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }, { id: 'research', label: 'Research' },
  { id: 'achievements', label: 'Achievements' }, { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 50);
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) { const r = el.getBoundingClientRect(); if (r.top <= 100 && r.bottom >= 100) { setActive(item.id); break; } }
      }
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <nav className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-cyber-dark/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="flex items-center gap-2 group">
            <Shield className="w-8 h-8 text-cyber-blue group-hover:text-cyber-green transition-all" />
            <span className="font-display font-bold text-xl text-white">KB</span>
          </button>
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${active === item.id ? 'text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/30' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                {item.label}
              </button>
            ))}
          </div>
          <button className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${active === item.id ? 'text-cyber-blue bg-cyber-blue/10 border border-cyber-blue/30' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
