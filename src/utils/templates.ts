import { ConspiracyTemplate, WikipediaArticle, ConspiracyTheory } from '../types';

export const CONSPIRACY_TEMPLATES: ConspiracyTemplate[] = [
  {
    id: 'secret-meeting',
    name: 'Secret Meeting',
    pattern: 'What they don\'t want you to know: {entity1} has been secretly meeting with {entity2} since {date} to orchestrate {entity3}. The evidence is hidden in plain sight within {entity4}.',
    category: 'historical',
    placeholders: ['entity1', 'entity2', 'date', 'entity3', 'entity4'],
  },
  {
    id: 'scientific-cover',
    name: 'Scientific Cover-up',
    pattern: 'CLASSIFIED: {entity1} was never actually about {entity2}. It\'s a sophisticated cover for {entity3}\'s real agenda involving {entity4}. The {date} incident proves everything.',
    category: 'scientific',
    placeholders: ['entity1', 'entity2', 'entity3', 'entity4', 'date'],
  },
  {
    id: 'cultural-manipulation',
    name: 'Cultural Manipulation',
    pattern: 'CONFIDENTIAL REPORT: {entity1} is not what it seems. This popular {entity2} is actually a psychological operation designed by {entity3} to influence {entity4} behavior patterns.',
    category: 'cultural',
    placeholders: ['entity1', 'entity2', 'entity3', 'entity4'],
  },
  {
    id: 'geographic-mystery',
    name: 'Geographic Mystery',
    pattern: 'RESTRICTED ACCESS: The truth about {entity1} - this location contains a hidden {entity2} facility operated by {entity3}. Satellite images from {date} reveal suspicious {entity4} activity.',
    category: 'geographic',
    placeholders: ['entity1', 'entity2', 'entity3', 'date', 'entity4'],
  },
  {
    id: 'historical-connection',
    name: 'Historical Connection',
    pattern: 'TOP SECRET: Historical records show that {entity1} and {entity2} are connected through a secret {entity3} established in {date}. Modern {entity4} can be traced back to this origin.',
    category: 'historical',
    placeholders: ['entity1', 'entity2', 'entity3', 'date', 'entity4'],
  },
  {
    id: 'technology-control',
    name: 'Technology Control',
    pattern: 'EYES ONLY: {entity1} technology was deliberately designed to monitor {entity2}. The {date} update introduced hidden {entity3} capabilities for {entity4} surveillance.',
    category: 'scientific',
    placeholders: ['entity1', 'entity2', 'date', 'entity3', 'entity4'],
  },
];

export class ConspiracyGenerator {
  private templates = CONSPIRACY_TEMPLATES;
  
  generateTheory(articles: WikipediaArticle[]): ConspiracyTheory {
    // Combine all entities from articles
    const allEntities = articles.flatMap(article => article.entities);
    
    // Filter out sensitive or inappropriate content
    const safeEntities = this.filterSafeEntities(allEntities);
    
    // Select random template
    const template = this.templates[Math.floor(Math.random() * this.templates.length)];
    
    // Fill template with entities
    const theory = this.fillTemplate(template, safeEntities, articles);
    
    // Calculate believability score (lower is more obviously fictional)
    const believabilityScore = this.calculateBelievabilityScore(theory, articles);
    
    return {
      id: `theory-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      theory,
      believabilityScore,
      sources: articles,
      template: template.name,
      timestamp: new Date(),
    };
  }
  
  private filterSafeEntities(entities: string[]): string[] {
    const blacklist = [
      // Political figures and parties
      'trump', 'biden', 'republican', 'democrat', 'congress', 'senate',
      // Sensitive topics
      'terrorism', 'terrorist', 'nazi', 'hitler', 'holocaust', 'genocide',
      'murder', 'suicide', 'death', 'killing', 'violence', 'war',
      // Real conspiracies or harmful content
      'qanon', 'illuminati', 'vaccine', 'autism', 'covid', 'coronavirus',
      // Religious content
      'jesus', 'christ', 'god', 'allah', 'mohammed', 'buddha',
    ];
    
    return entities.filter(entity => 
      !blacklist.some(blocked => 
        entity.toLowerCase().includes(blocked.toLowerCase())
      )
    );
  }
  
  private fillTemplate(template: ConspiracyTemplate, entities: string[], articles: WikipediaArticle[]): string {
    let theory = template.pattern;
    
    // Shuffle entities for randomness
    const shuffledEntities = [...entities].sort(() => Math.random() - 0.5);
    
    // Fill placeholders
    template.placeholders.forEach((placeholder, index) => {
      let replacement = '';
      
      if (placeholder === 'date') {
        // Generate a random year between 1950 and 2020
        replacement = (1950 + Math.floor(Math.random() * 70)).toString();
      } else {
        // Use available entities or article titles
        if (shuffledEntities[index]) {
          replacement = shuffledEntities[index];
        } else if (articles[index % articles.length]) {
          replacement = articles[index % articles.length].title;
        } else {
          replacement = 'REDACTED';
        }
      }
      
      theory = theory.replace(`{${placeholder}}`, replacement);
    });
    
    return theory;
  }
  
  private calculateBelievabilityScore(theory: string, articles: WikipediaArticle[]): number {
    // Start with base absurdity
    let score = 15; // Start low (more absurd)
    
    // Factors that increase believability (making it less obviously satirical)
    const believabilityFactors = [
      'secret', 'classified', 'hidden', 'cover', 'evidence', 'proof',
      'government', 'agency', 'organization', 'corporation', 'foundation'
    ];
    
    // Factors that decrease believability (making it more obviously satirical)
    const absurdityFactors = [
      'mysterious', 'unknown', 'strange', 'unusual', 'unexplained',
      'alien', 'supernatural', 'magical', 'impossible', 'ridiculous'
    ];
    
    believabilityFactors.forEach(factor => {
      if (theory.toLowerCase().includes(factor)) {
        score += 5;
      }
    });
    
    absurdityFactors.forEach(factor => {
      if (theory.toLowerCase().includes(factor)) {
        score -= 3;
      }
    });
    
    // Add randomness to the mix of Wikipedia articles (more random = less believable)
    const topicDiversity = new Set(articles.map(a => a.title.split(' ')[0])).size;
    score -= topicDiversity * 2;
    
    // Ensure score stays within reasonable bounds (0-100)
    return Math.max(0, Math.min(100, score));
  }
}