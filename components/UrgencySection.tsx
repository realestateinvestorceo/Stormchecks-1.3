import React from 'react';
import { Button } from './Button';
import { Clock } from 'lucide-react';

export const UrgencySection: React.FC = () => {
  const scrollToCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-navy-dark border-t border-navy-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-amber/10 rounded-full mb-6">
          <Clock className="h-6 w-6 text-amber" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Every Month You Wait, the Window Shrinks
        </h2>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
          Storm damage claims have a 1–3 year filing deadline depending on your state. After that, the money is gone — no matter how much damage exists. If your building has been through a storm in the last 3 years, now is the time to find out what you're owed.
        </p>
        <Button onClick={scrollToCTA} size="lg">
          Start Free Monitoring
        </Button>
      </div>
    </section>
  );
};