import MatrixBackground from './components/MatrixBackground';
import FloatingParticles, { CursorGlow } from './components/FloatingParticles';
import ScrollProgress from './components/ScrollProgress';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Achievements from './components/Achievements';
import GitHubSection from './components/GitHubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-cyber-dark overflow-x-hidden">
      <MatrixBackground />
      <FloatingParticles />
      <CursorGlow />
      <ScrollProgress />
      <Navigation />

      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Research />
        <Achievements />
        <GitHubSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
