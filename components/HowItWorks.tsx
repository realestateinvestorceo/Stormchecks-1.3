import React from 'react';
import { Search, FileText, Handshake } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Free to start. You only pay if you recover.
          </p>
        </div>

        <div className="relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                
                {/* Step 1 */}
                <div className="relative bg-gray-50 pt-4">
                    <div className="mx-auto w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white shadow-lg mb-6 border-4 border-white">
                        <Search className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-navy text-center mb-3">1. Free Monitoring Setup</h3>
                    <p className="text-gray-600 text-center leading-relaxed px-4">
                        We analyze your property's storm history for the past 2 years and set up continuous monitoring. If there's damage now, we'll find it. If a storm hits later, we'll alert you. No cost ever for this.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="relative bg-gray-50 pt-4">
                    <div className="mx-auto w-24 h-24 bg-white rounded-full flex items-center justify-center text-navy shadow-lg mb-6 border-4 border-amber">
                        <FileText className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-navy text-center mb-3">2. Forensic Documentation</h3>
                    <p className="text-gray-600 text-center leading-relaxed px-4">
                        If damage exists, we deploy our field team to document every inch. We build the carrier-grade evidence file that proves your loss irrefutably.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="relative bg-gray-50 pt-4">
                    <div className="mx-auto w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white shadow-lg mb-6 border-4 border-white">
                        <Handshake className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-bold text-navy text-center mb-3">3. Claim Recovery</h3>
                    <p className="text-gray-600 text-center leading-relaxed px-4">
                        We connect you with a vetted top-tier public adjuster. They use our evidence file to file the claim and negotiate the maximum settlement.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};