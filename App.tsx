import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { DenialReasons } from './components/DenialReasons';
import { InsiderAdvantage } from './components/InsiderAdvantage';
import { CaseStudies } from './components/CaseStudies';
import { HowItWorks } from './components/HowItWorks';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <DenialReasons />
        <InsiderAdvantage />
        <CaseStudies />
        <HowItWorks />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;