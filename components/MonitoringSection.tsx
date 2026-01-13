import React from 'react';
import { Button } from './Button';
import { History, Eye, BellRing } from 'lucide-react';

export const MonitoringSection: React.FC = () => {
  const scrollToCTA = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center space-x-2 text-gray-400 font-bold tracking-wider uppercase text-xs mb-4">
              <span>FREE FOR LIFE</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              We Watch Your Building So You Don't Have To
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Most owners don't find out about storm damage until the filing window has already closed. We fix that.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Sign up and we'll analyze your property's storm exposure for the past 2 years — completely free. Then we monitor your location indefinitely. If a storm hits that may have caused claimable damage, we alert you within 48 hours.
            </p>
            <p className="text-lg text-navy font-bold mb-8">
              No cost. No commitment. No surprise repair bills years later.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="h-12 w-12 bg-amber/10 rounded-full flex items-center justify-center text-amber mb-4">
                    <History className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">2-Year Lookback</h3>
                <p className="text-gray-600">We check your property against every storm event from the past 24 months</p>
            </div>
             <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="h-12 w-12 bg-navy/10 rounded-full flex items-center justify-center text-navy mb-4">
                    <Eye className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">Continuous Monitoring</h3>
                <p className="text-gray-600">Your property stays on our radar. Every storm, every season, forever.</p>
            </div>
             <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="h-12 w-12 bg-amber/10 rounded-full flex items-center justify-center text-amber mb-4">
                    <BellRing className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">48-Hour Alerts</h3>
                <p className="text-gray-600">If we detect a potential claim, you'll know within 2 days — not 2 years</p>
            </div>
        </div>

        <div className="text-center">
            <Button size="lg" onClick={scrollToCTA} className="shadow-lg">
                Start Free Monitoring
            </Button>
            <p className="text-sm text-gray-500 mt-4">
                Takes 2 minutes. We just need your property address.
            </p>
        </div>
      </div>
    </section>
  );
};