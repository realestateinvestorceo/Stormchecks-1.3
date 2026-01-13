import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          We Assume All The Risk.
        </h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          You have zero out-of-pocket cost. StormChecks takes a 10% success fee only when you get paid. The public adjuster takes 20%. If the claim doesn't pay, you owe us absolutely nothing.
        </p>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>Zero upfront fees</span>
            </li>
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>Free initial analysis</span>
            </li>
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>No recovery, no fee</span>
            </li>
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>Vetted adjuster network</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-5 shadow-[0_0_20px_rgba(201,151,0,0.3)]">
            Get Your Free Analysis
          </Button>
          <p className="text-gray-400 text-sm">
            Strictly confidential. No obligation.
          </p>
        </div>
      </div>
    </section>
  );
};