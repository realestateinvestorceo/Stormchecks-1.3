import React from 'react';
import { Button } from './Button';
import { CheckCircle2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-navy relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          You Pay Nothing Unless You Get Paid
        </h2>
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Zero out-of-pocket cost. Zero upfront fees. StormChecks takes 10% only when your claim pays out. The public adjuster takes 20%. If the claim doesn't pay, you owe nothing to anyone.
        </p>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-10 border border-white/10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-6">
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>Free storm history analysis</span>
            </li>
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>No upfront fees</span>
            </li>
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>No recovery, no fee</span>
            </li>
            <li className="flex items-center text-gray-200">
              <CheckCircle2 className="h-5 w-5 text-amber mr-3 flex-shrink-0" />
              <span>Vetted public adjuster network</span>
            </li>
          </ul>
          <p className="text-gray-400 text-sm border-t border-white/10 pt-4">
            It starts with free monitoring. If we find something, you decide what to do next.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Button size="lg" className="w-full sm:w-auto text-lg px-12 py-5 shadow-[0_0_20px_rgba(201,151,0,0.3)]">
            Start Free Monitoring
          </Button>
          <p className="text-gray-400 text-sm">
            Takes 2 minutes. No obligation. Completely confidential.
          </p>
        </div>
      </div>
    </section>
  );
};