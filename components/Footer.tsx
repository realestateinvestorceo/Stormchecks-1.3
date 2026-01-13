import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-dark py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-2 mb-2">
                <ShieldCheck className="h-6 w-6 text-gray-500" />
                <span className="text-xl font-bold text-gray-300">StormChecks — Forensic Building Documentation</span>
            </div>
            <div className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </div>
          
          <div className="flex space-x-6">
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">Terms of Service</a>
             <a href="#contact" className="text-gray-500 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};