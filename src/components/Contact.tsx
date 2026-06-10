import { useEffect, useRef, useState, FormEvent } from 'react';
import { Mail, Send, MapPin, Linkedin, Github, Twitter, Download } from 'lucide-react';

export default function Contact() {
  const [vis, setVis] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className={`py-24 px-4 sm:px-6 lg:px-8 fade-in-section ${vis ? 'visible' : ''}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Mail className="w-8 h-8 text-cyber-green" />
          <h2 className="section-title cyber-text">Let's Connect</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Looking for a cybersecurity engineer, AI researcher, or just want to connect? I'm open to
              discussing opportunities in defense tech, research collaborations, and innovative projects.
            </p>

            <div className="space-y-6 mb-8">
              <div className="cyber-card p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyber-blue/10"><Mail className="w-6 h-6 text-cyber-blue" /></div>
                <div><div className="text-gray-500 text-sm">Email</div><div className="text-white font-mono">kapish.bhati@gmail.com</div></div>
              </div>
              <div className="cyber-card p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyber-green/10"><MapPin className="w-6 h-6 text-cyber-green" /></div>
                <div><div className="text-gray-500 text-sm">Location</div><div className="text-white font-mono">India</div></div>
              </div>
              <div className="cyber-card p-4 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-purple-500/10"><Download className="w-6 h-6 text-purple-400" /></div>
                <div className="flex-1"><div className="text-gray-500 text-sm">Resume</div><div className="text-white font-mono">Available upon request</div></div>
                <a href="#" className="btn-primary text-sm py-2">Download CV</a>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Github, href: 'https://github.com/kapish-bhati' },
                { Icon: Twitter, href: 'https://twitter.com' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <s.Icon className="w-5 h-5 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          <div className="cyber-card p-6 md:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-cyber-green/10 border border-cyber-green/30 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-cyber-green" />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thanks for reaching out. I'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                    <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-cyber" placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-cyber" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Subject</label>
                  <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="input-cyber" placeholder="What's this about?" required />
                </div>
                <div>
                  <label className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-cyber min-h-[150px] resize-none" placeholder="Your message..." required />
                </div>
                <button type="submit" disabled={submitting} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50">
                  {submitting ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Sending...</>)
                    : (<><Send className="w-5 h-5" />Send Message</>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
