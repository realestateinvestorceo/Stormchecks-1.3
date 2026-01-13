import React from 'react';
import { TrendingUp } from 'lucide-react';

const cases = [
  {
    type: "Commercial Marina",
    location: "Coastal Florida",
    initial: "$0",
    final: "$3,900,000",
    note: "Initial claim denied as 'deferred maintenance'."
  },
  {
    type: "Industrial Warehouse",
    location: "Texas",
    initial: "$0",
    final: "$3,400,000",
    note: "Damage hidden under solar array."
  },
  {
    type: "Self-Storage Facility",
    location: "Georgia",
    initial: "$725,000",
    final: "$6,500,000",
    note: "Carrier missed 80% of roof scope."
  },
  {
    type: "Retail Strip Center",
    location: "Midwest",
    initial: "$150,000",
    final: "$1,700,000",
    note: "Found structural wind damage others missed."
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Real Results. Real Recovery.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't deal in hypotheticals. Here is what happens when you have the right documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cases.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy to-amber"></div>
              
              <div className="mb-4">
                <h3 className="text-lg font-bold text-navy">{item.type}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                  {item.location}
                </p>
              </div>

              <div className="space-y-4 mb-4">
                <div className="p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-red-600 font-semibold uppercase tracking-wider">Initial Carrier Offer</p>
                  <p className="text-xl font-bold text-gray-800">{item.initial}</p>
                </div>
                
                <div className="flex justify-center">
                   <TrendingUp className="text-gray-300 w-6 h-6" />
                </div>

                <div className="p-3 bg-green-50 rounded-lg border border-green-100">
                  <p className="text-xs text-green-700 font-semibold uppercase tracking-wider">Final Settlement</p>
                  <p className="text-2xl font-extrabold text-navy">{item.final}</p>
                </div>
              </div>

              <p className="text-sm text-gray-500 italic border-t pt-3 border-gray-100">
                "{item.note}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};