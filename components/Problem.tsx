import React from 'react';
import { AlertTriangle, Clock, DollarSign } from 'lucide-react';

export const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Hidden Damage Is Draining Your Building's Value
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Most commercial buildings have storm damage that owners never see. It hides in roofing membranes, behind cladding, inside HVAC systems. Your maintenance team won't catch it. Your annual inspection won't flag it.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
              We consistently find <span className="text-navy font-bold">$10–$15 per square foot</span> in recoverable damage that standard inspections miss. For a 30,000 sq ft building, that's over $300,000 sitting on the table — money your insurance company hopes you never claim.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-amber mt-1 flex-shrink-0 mr-4" />
                <div>
                  <h4 className="font-bold text-navy">The Clock Is Ticking</h4>
                  <p className="text-gray-600 text-sm mt-1">
                    You have 1–3 years from the storm date to file. After that, the window closes forever — and the insurance company keeps the money. Most owners don't find out until it's too late.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-navy p-8 rounded-xl shadow-xl text-white">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-400 uppercase text-sm font-semibold">Potential Loss</span>
                <AlertTriangle className="text-amber h-6 w-6" />
              </div>
              <div className="text-4xl font-extrabold mb-2 text-amber">$450,000+</div>
              <p className="text-gray-300">
                Average unclaimed damage on a 45k sq ft industrial roof.
              </p>
            </div>

            <div className="bg-white border-2 border-gray-100 p-8 rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500 uppercase text-sm font-semibold">The Reality</span>
                <DollarSign className="text-navy h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Carriers Don't Pay What They Don't Have To</h3>
              <p className="text-gray-600">
                Insurance companies are in the business of not paying claims. Without forensic-grade documentation linking damage to a specific storm event, your claim gets denied or lowballed. The inspection might be accurate — the paperwork still fails.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};