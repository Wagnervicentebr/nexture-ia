import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DifferentiationSection } from './components/DifferentiationSection';
import { MetricsSection } from './components/MetricsSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { SocialProofSection } from './components/SocialProofSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-['Inter']">
      <Navbar />
      
      <main>
        <Hero />
        
        <ProblemSection />
        
        <section id="solucoes">
          <SolutionSection />
        </section>
        
        <section id="diferenciais">
          <DifferentiationSection />
        </section>
        
        <MetricsSection />
        
        <section id="processo">
          <HowItWorksSection />
        </section>
        
        <section id="casos">
          <SocialProofSection />
        </section>
        
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
