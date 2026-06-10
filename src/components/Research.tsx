import { useEffect, useRef, useState } from 'react';
import { BookOpen, ExternalLink, Award, Target } from 'lucide-react';

const publications = [
  {
    title: 'Brain Tumor Detection using Machine Learning in MRI Images',
    conference: 'IEEE MPCON 2025', accuracy: '90%',
    methods: ['CNN', 'SVM', 'KNN', 'Random Forest'],
    description: 'Developed and compared multiple ML models for accurate brain tumor detection in MRI scans.',
  },
  {
    title: 'Breast Cancer Diagnosis using Deep Learning',
    conference: 'IEEE CICN', accuracy: '93.7%',
    methods: ['VGG19', 'ResNet50', 'Transfer Learning'],
    description: 'Applied transfer learning and deep CNNs for breast cancer diagnosis with high accuracy.',
  },
];

export default function Research() {
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="research" ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen className="w-8 h-8 text-cyber-green" />
          <h2 className="section-title cyber-text">Research Publications</h2>
        </div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <div key={i} className="cyber-card p-6 md:p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyber-blue/5 to-transparent rounded-full blur-3xl" />
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-cyber-green/10"><BookOpen className="w-5 h-5 text-cyber-green" /></div>
                      <span className="text-cyber-green font-mono text-sm">{pub.conference}</span>
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3 leading-snug">{pub.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{pub.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {pub.methods.map((m, mi) => <span key={mi} className="text-xs px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue font-mono">{m}</span>)}
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 border border-cyber-green/20">
                    <Target className="w-8 h-8 text-cyber-green mb-2" />
                    <div className="text-3xl font-display font-bold text-white">{pub.accuracy}</div>
                    <div className="text-gray-500 text-xs font-mono">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-cyber-green hover:text-cyber-green-light transition-colors font-mono text-sm">
            <Award className="w-4 h-4" />View all publications on Google Scholar<ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
