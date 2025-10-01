import React, { useState, useEffect } from 'react';
import { Shield, AlertTriangle, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-cyan-500/30 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col items-center gap-4">
          {/* Logo and Title */}
          <div className="flex items-center gap-3 text-center">
            <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 flex-shrink-0" />
            <div>
              <h1 className="text-lg sm:text-2xl font-bold text-cyan-400 glitch" data-text="CONSPIRACY THEORY GENERATOR">
                CONSPIRACY THEORY GENERATOR
              </h1>
              <p className="text-xs text-cyan-600">Educational Satire Tool v1.0</p>
            </div>
          </div>
          
          {/* Status Badges - Hidden on mobile when scrolled */}
          <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-4 transition-all duration-300 ${
            isScrolled ? 'hidden sm:flex' : 'flex'
          }`}>
            <div className="classified-stamp text-xs px-2 py-1">
              100% SATIRE
            </div>
            
            <div className="flex items-center gap-1 text-xs text-amber-400">
              <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Educational Purpose Only</span>
              <span className="sm:hidden">Educational</span>
            </div>
            
            <div className="flex items-center gap-1 text-xs text-cyan-400">
              <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Critical Thinking Tool</span>
              <span className="sm:hidden">Learning</span>
            </div>
          </div>
        </div>
        
        {/* Disclaimer - Hidden on mobile when scrolled */}
        <div className={`mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg transition-all duration-300 ${
          isScrolled ? 'hidden sm:block' : 'block'
        }`}>
          <p className="text-xs sm:text-sm text-red-300 text-center">
            <strong>DISCLAIMER:</strong> This application generates <span className="hidden sm:inline">obviously</span> fictional conspiracy theories for educational purposes. 
            All content is satirical and designed to teach critical thinking<span className="hidden sm:inline"> and media literacy skills</span>.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;