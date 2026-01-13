import React from 'react';
import { Button } from './Button';
import { FileText, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-navy overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-5">
        <FileText size={600} strokeWidth={0.5} color="white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-navy-light border border-navy-light/50 rounded-full px-4 py-1.5 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-amber"></span>
            <span className="text-amber text-sm font-semibold tracking-wide uppercase">Forensic Documentation Experts</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            We Know Why Claims Get Denied. <span className="text-amber">Because We Used To Deny Them.</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Our founder spent 20 years inside insurance carriers denying claims. Now he builds the files that don't get denied. You pay nothing unless you recover.
          </p>
          
          <p className="text-lg text-gray-400 mb-8 font-medium">
             Start with free monitoring. If we find damage, you decide what's next.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button size="lg" onClick={scrollToCTA} className="group">
              Get Free Storm Monitoring
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-sm text-gray-400 pl-2">
              2-year lookback + ongoing alerts. No cost, no obligation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};