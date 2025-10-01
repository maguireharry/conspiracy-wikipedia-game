export interface WikipediaArticle {
  title: string;
  extract: string;
  url: string;
  entities: string[];
}

export interface ConspiracyTheory {
  id: string;
  theory: string;
  believabilityScore: number;
  sources: WikipediaArticle[];
  template: string;
  timestamp: Date;
}

export interface ConspiracyTemplate {
  id: string;
  name: string;
  pattern: string;
  category: 'historical' | 'scientific' | 'cultural' | 'geographic';
  placeholders: string[];
}