import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-navy shadow-lg py-3' : 'bg-navy py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-8 w-8 text-amber" />
            <span className="text-2xl font-bold text-white tracking-tight">StormChecks</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-300 hover:text-white transition-colors">The Problem</a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors">How It Works</a>
            <a href="#results" className="text-gray-300 hover:text-white transition-colors">Results</a>
            <Button variant="primary" size="md" onClick={scrollToCTA}>
              Get Free Analysis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-light absolute top-full left-0 right-0 shadow-xl border-t border-navy-dark">
          <div className="px-4 pt-4 pb-8 space-y-4">
            <a href="#problem" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2">The Problem</a>
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2">How It Works</a>
            <a href="#results" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white py-2">Results</a>
            <Button fullWidth onClick={scrollToCTA}>
              Get Free Analysis
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};