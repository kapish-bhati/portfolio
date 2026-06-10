import { Shield, Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-cyber-dark">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyber-blue" />
            <span className="font-display font-bold text-white">Kapish Bhati</span>
          </div>
          <div className="flex items-center gap-4">
            {[
              { Icon: Github, href: 'https://github.com/kapish-bhati' },
              { Icon: Linkedin, href: 'https://linkedin.com' },
              { Icon: Twitter, href: 'https://twitter.com' },
              { Icon: Mail, href: 'mailto:kapish.bhati@gmail.com' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-white/10 transition-colors">
                <s.Icon className="w-5 h-5 text-gray-400" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div className="font-mono flex items-center gap-1">Built with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS</div>
          <div className="font-mono">&copy; {new Date().getFullYear()} Kapish Bhati. All rights reserved.</div>
        </div>
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-gray-400">
            <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />Securing digital systems, one commit at a time
          </div>
        </div>
      </div>
    </footer>
  );
}
