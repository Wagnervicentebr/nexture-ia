import React from 'react';
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
import { StudentProfilePage } from './components/StudentProfilePage';
import { Navigate, Route, Routes } from 'react-router';

function HomePage() {
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/perfil-aluno" element={<StudentProfilePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
