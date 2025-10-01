import React from 'react';
import { BookOpen, Shield, AlertTriangle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/90 border-t border-cyan-500/30 mt-8 sm:mt-16">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              About This Tool
            </h3>
            <p className="text-xs sm:text-sm text-cyan-100 leading-relaxed">
              The Conspiracy Theory Generator is an educational satire tool designed to teach 
              critical thinking and media literacy skills. It creates obviously fictional 
              conspiracy theories to help users recognize common patterns in misinformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              Educational Purpose
            </h3>
            <ul className="text-xs sm:text-sm text-cyan-100 space-y-1 sm:space-y-2">
              <li>• Teach pattern recognition in misinformation</li>
              <li>• Promote critical thinking skills</li>
              <li>• Demonstrate logical fallacies</li>
              <li>• Encourage source verification</li>
              <li>• Support media literacy education</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base sm:text-lg font-bold text-cyan-400 mb-3 sm:mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />
              Ethical Guidelines
            </h3>
            <ul className="text-xs sm:text-sm text-cyan-100 space-y-1 sm:space-y-2">
              <li>• All content is clearly labeled as satirical</li>
              <li>• No real conspiracies or harmful content</li>
              <li>• Transparent about generation process</li>
              <li>• Sources Wikipedia articles for transparency</li>
              <li>• Promotes fact-checking and verification</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-cyan-500/30 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm text-gray-400">
                © 2025 Conspiracy Theory Generator - Educational Satire Tool
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Powered by Wikipedia API • Built by Anthahkarana for educational purposes
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <div className="classified-stamp text-xs px-2 py-1">
                100% SATIRICAL
              </div>
              <div className="text-xs text-cyan-400 flex items-center gap-1">
                <Shield className="w-3 h-3" />
                Safe for Education
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-xs text-red-300 text-center leading-relaxed">
            <strong>FINAL DISCLAIMER:</strong> This application is a satirical educational tool. 
            All generated theories are completely fictional and created for the purpose of teaching 
            critical thinking skills. Please always verify information through credible sources and 
            think critically about all information you encounter online.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;