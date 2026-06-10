import { useEffect, useState } from 'react';
import { Github, GitCommit, GitBranch, Star, Code2 } from 'lucide-react';

const languages = [
  { name: 'Python', percentage: 40, color: 'bg-yellow-500' },
  { name: 'C++', percentage: 25, color: 'bg-blue-500' },
  { name: 'Java', percentage: 20, color: 'bg-orange-500' },
  { name: 'JavaScript', percentage: 10, color: 'bg-yellow-400' },
  { name: 'Other', percentage: 5, color: 'bg-gray-500' },
];

const recentRepos = [
  { name: 'AES-Encryption', desc: 'AES-128 implementation', stars: 12 },
  { name: 'ML-Health-Detection', desc: 'Medical ML models', stars: 24 },
  { name: 'Voting-System', desc: 'Election management', stars: 8 },
  { name: 'Image-Processing', desc: 'CV toolkit', stars: 15 },
];

export default function GitHubSection() {
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    const el = document.getElementById('github');
    if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="github" className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Github className="w-8 h-8 text-cyber-blue" />
          <h2 className="section-title cyber-text">GitHub Activity</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="cyber-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-cyber-blue/10"><Github className="w-8 h-8 text-cyber-blue" /></div>
              <div>
                <h3 className="text-xl font-display font-bold text-white">kapish-bhati</h3>
                <p className="text-gray-400 text-sm">github.com/kapish-bhati</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div><div className="text-2xl font-bold text-white">25</div><div className="text-gray-500 text-xs font-mono">Repositories</div></div>
              <div><div className="text-2xl font-bold text-white">50</div><div className="text-gray-500 text-xs font-mono">Followers</div></div>
              <div><div className="text-2xl font-bold text-white">30</div><div className="text-gray-500 text-xs font-mono">Following</div></div>
            </div>
          </div>

          <div className="cyber-card p-6">
            <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-cyber-green" />Languages
            </h3>
            <div className="space-y-3">
              {languages.map((lang, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-300">{lang.name}</span>
                    <span className="text-gray-500">{lang.percentage}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-cyber-dark-lighter overflow-hidden">
                    <div className={`h-full ${lang.color} transition-all duration-1000`} style={{ width: vis ? `${lang.percentage}%` : '0%' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cyber-card p-6">
            <h3 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-cyber-blue" />Featured Repos
            </h3>
            <div className="space-y-3">
              {recentRepos.map((repo, i) => (
                <div key={i} className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-white truncate">{repo.name}</h4>
                      <p className="text-xs text-gray-500 truncate">{repo.desc}</p>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-400"><Star className="w-3 h-3" />{repo.stars}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="https://github.com/kapish-bhati" target="_blank" rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-2 rounded-lg border border-cyber-blue/30 text-cyber-blue text-sm hover:bg-cyber-blue/10 transition-colors">
              <Github className="w-4 h-4" />View Full Profile
            </a>
          </div>
        </div>

        <div className="mt-8 cyber-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="w-5 h-5 text-cyber-green" />
            <span className="text-white font-semibold">Contribution Activity</span>
          </div>
          <div className="grid grid-cols-[repeat(52,1fr)] gap-1">
            {Array.from({ length: 365 }).map((_, i) => {
              const level = Math.floor(Math.random() * 5);
              const c = ['bg-cyber-dark-lighter', 'bg-cyber-green/20', 'bg-cyber-green/40', 'bg-cyber-green/60', 'bg-cyber-green'];
              return <div key={i} className={`w-3 h-3 rounded-sm ${c[level]}`} />;
            })}
          </div>
          <div className="flex items-center justify-end gap-2 mt-3 text-xs text-gray-500">
            <span>Less</span>
            {['bg-cyber-dark-lighter', 'bg-cyber-green/20', 'bg-cyber-green/40', 'bg-cyber-green/60', 'bg-cyber-green'].map((c, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
            ))}
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
