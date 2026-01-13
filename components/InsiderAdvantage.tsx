import React from 'react';
import { Lock, FileCheck } from 'lucide-react';

export const InsiderAdvantage: React.FC = () => {
  return (
    <section className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center space-x-2 text-amber font-bold tracking-wider uppercase text-sm mb-4">
              <Lock className="h-4 w-4" />
              <span>The Insider Advantage</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Documentation Designed to Pass The Test.
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Our founder spent 20 years sitting on the other side of the desk at major insurance carriers. His job was to approve or deny claims based on rigorous internal auditing standards.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              He knows exactly why a file gets flagged for denial and exactly what a file needs to sail through for approval. Now, StormChecks builds forensic files designed specifically to pass the tests he used to administer.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="h-px bg-gray-700 flex-1"></div>
              <span className="text-gray-500 font-mono text-sm">EST. 2004</span>
            </div>
          </div>

          <div className="md:w-1/2 bg-navy-light p-8 md:p-10 rounded-2xl border border-navy-light/50 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FileCheck className="h-6 w-6 text-amber mr-3" />
              The Difference
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs mt-0.5">X</div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">Standard Contractor Bid</h4>
                  <p className="text-gray-400 text-sm mt-1">"Replace roof due to hail damage. Cost: $250,000."</p>
                  <p className="text-red-400 text-xs mt-1 uppercase font-bold tracking-wide">Result: Denied (Insufficient Proof)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-amber/20 text-amber flex items-center justify-center font-bold text-xs mt-0.5">✓</div>
                <div className="ml-4">
                  <h4 className="text-white font-semibold">StormChecks Forensic File</h4>
                  <p className="text-gray-400 text-sm mt-1">120-page engineering report, NOAA weather data overlay, microscopic impact analysis, carrier-compliant Xactimate estimation.</p>
                  <p className="text-amber text-xs mt-1 uppercase font-bold tracking-wide">Result: Approved ($250,000+ Paid)</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};