import React, { useState } from 'react';
import { BookOpen, Lightbulb, Shield, AlertTriangle, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const EducationalSidebar: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const sections = [
    {
      id: 'how-it-works',
      icon: <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'How This Works',
      content: [
        'We fetch 3 random Wikipedia articles using their public API',
        'Our algorithm extracts key entities (names, places, dates, concepts)',
        'We combine these elements using satirical conspiracy theory templates',
        'The result is obviously fictional and designed to be transparently absurd',
        'All sources are linked for educational transparency'
      ]
    },
    {
      id: 'critical-thinking',
      icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Critical Thinking Tips',
      content: [
        'Question the source: Who is making the claim?',
        'Check for evidence: Are there credible sources?',
        'Look for logical fallacies: Does the reasoning make sense?',
        'Consider motivation: Why might someone spread this information?',
        'Cross-reference: Do other reliable sources confirm this?',
        'Be aware of confirmation bias: Are you believing it because you want to?'
      ]
    },
    {
      id: 'red-flags',
      icon: <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Conspiracy Theory Red Flags',
      content: [
        'Claims that "they" don\'t want you to know something',
        'Vague references to powerful, unnamed groups',
        'Lack of credible evidence or sources',
        'Explanations that are overly complex for simple events',
        'Dismissal of contradictory evidence as "part of the conspiracy"',
        'Appeal to fear, anger, or prejudice rather than logic'
      ]
    },
    {
      id: 'media-literacy',
      icon: <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
      title: 'Media Literacy Resources',
      content: [
        { text: 'Snopes - Fact-checking website', url: 'https://www.snopes.com' },
        { text: 'MediaWise - Digital literacy education', url: 'https://www.poynter.org/mediawise/' },
        { text: 'AllSides - Media bias analysis', url: 'https://www.allsides.com' },
        { text: 'FactCheck.org - Political fact-checking', url: 'https://www.factcheck.org' },
        { text: 'News Literacy Project', url: 'https://newslit.org' }
      ]
    }
  ];

  return (
    <div className="w-full space-y-4">
      <div className="terminal-window rounded-lg p-4">
        <h2 className="text-base sm:text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
          <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
          Educational Resources
        </h2>
        
        {sections.map((section) => (
          <div key={section.id} className="mb-4 last:mb-0">
            <button
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-2 text-cyan-300">
                {section.icon}
                <span className="font-semibold text-sm sm:text-base">{section.title}</span>
              </div>
              {expandedSection === section.id ? (
                <ChevronUp className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              )}
            </button>
            
            {expandedSection === section.id && (
              <div className="mt-2 p-3 bg-black/30 rounded-lg border border-cyan-500/20">
                <ul className="space-y-2">
                  {section.content.map((item, index) => (
                    <li key={index} className="text-xs sm:text-sm text-cyan-100">
                      {typeof item === 'string' ? (
                        <span>• {item}</span>
                      ) : (
                        <div className="flex items-start gap-2">
                          <span className="flex-shrink-0">•</span>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline flex items-center gap-1 break-words"
                          >
                            <span>{item.text}</span>
                            <ExternalLink className="w-3 h-3 flex-shrink-0" />
                          </a>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="terminal-window rounded-lg p-4">
        <h3 className="text-sm sm:text-base font-bold text-amber-400 mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4" />
          Important Reminder
        </h3>
        <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-3">
          <p className="text-xs sm:text-sm text-amber-100">
            This tool creates <strong>obviously fictional</strong> conspiracy theories to help you 
            recognize the patterns and logical fallacies common in real misinformation. 
            Always fact-check information from credible sources!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationalSidebar;