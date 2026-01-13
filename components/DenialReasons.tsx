import React from 'react';
import { FileWarning, XCircle, SearchX } from 'lucide-react';

export const DenialReasons: React.FC = () => {
  const reasons = [
    {
      icon: <FileWarning className="h-8 w-8 text-amber" />,
      title: "The Wrong Language",
      description: "Most claims fail because contractors speak 'construction' while adjusters speak 'policy'. If your documentation doesn't map damage directly to policy definitions, it gets rejected."
    },
    {
      icon: <XCircle className="h-8 w-8 text-amber" />,
      title: "No Storm Nexus",
      description: "Carriers deny claims by calling damage 'wear and tear'. We build the meteorological evidence linking specific damage to a specific storm event date."
    },
    {
      icon: <SearchX className="h-8 w-8 text-amber" />,
      title: "Missing Internal Criteria",
      description: "Carriers use specific, often unwritten checklists to approve files. We know these checklists. Your inspection might be accurate, but if the paperwork misses the criteria, you get $0."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Why Claims Get Denied (Even When Valid)
          </h2>
          <p className="text-lg text-gray-600">
            The damage is real. But if the paperwork doesn't meet the carrier's internal criteria, you get $0.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6 p-3 bg-navy/5 inline-block rounded-lg">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};