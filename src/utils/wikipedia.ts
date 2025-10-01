import { WikipediaArticle } from '../types';

const WIKIPEDIA_API_BASE = 'https://en.wikipedia.org/api/rest_v1';
const WIKIPEDIA_API_RANDOM = `${WIKIPEDIA_API_BASE}/page/summary`;

export class WikipediaService {
  private static instance: WikipediaService;
  private cache = new Map<string, WikipediaArticle>();
  private lastRequestTime = 0;
  private readonly MIN_REQUEST_INTERVAL = 100; // Rate limiting

  static getInstance(): WikipediaService {
    if (!WikipediaService.instance) {
      WikipediaService.instance = new WikipediaService();
    }
    return WikipediaService.instance;
  }

  private async rateLimit(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    if (timeSinceLastRequest < this.MIN_REQUEST_INTERVAL) {
      await new Promise(resolve => 
        setTimeout(resolve, this.MIN_REQUEST_INTERVAL - timeSinceLastRequest)
      );
    }
    this.lastRequestTime = Date.now();
  }

  async getRandomArticles(count: number = 3): Promise<WikipediaArticle[]> {
    const articles: WikipediaArticle[] = [];
    
    for (let i = 0; i < count; i++) {
      try {
        await this.rateLimit();
        
        // Get random article title
        const randomResponse = await fetch(
          'https://en.wikipedia.org/api/rest_v1/page/random/summary',
          {
            headers: {
              'User-Agent': 'Conspiracy Theory Generator/1.0 (Educational Purpose)',
            },
          }
        );
        
        if (!randomResponse.ok) {
          throw new Error(`Wikipedia API error: ${randomResponse.status}`);
        }
        
        const randomData = await randomResponse.json();
        
        // Check cache first
        if (this.cache.has(randomData.title)) {
          articles.push(this.cache.get(randomData.title)!);
          continue;
        }
        
        const article: WikipediaArticle = {
          title: randomData.title,
          extract: randomData.extract || '',
          url: randomData.content_urls?.desktop?.page || '',
          entities: this.extractEntities(randomData.extract || randomData.title),
        };
        
        // Cache the article
        this.cache.set(randomData.title, article);
        articles.push(article);
        
      } catch (error) {
        console.error('Error fetching Wikipedia article:', error);
        // Add fallback article on error
        const fallbackArticle: WikipediaArticle = {
          title: 'Mysterious Entity',
          extract: 'A mysterious entity with unknown origins.',
          url: '',
          entities: ['mysterious entity', 'unknown origins', 'secret'],
        };
        articles.push(fallbackArticle);
      }
    }
    
    return articles;
  }

  private extractEntities(text: string): string[] {
    if (!text) return [];
    
    const entities: string[] = [];
    
    // Extract potential proper nouns (capitalized words/phrases)
    const properNouns = text.match(/\b[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*\b/g) || [];
    entities.push(...properNouns);
    
    // Extract years/dates
    const dates = text.match(/\b(19|20)\d{2}\b/g) || [];
    entities.push(...dates);
    
    // Extract common conspiracy-worthy terms
    const conspiracyTerms = text.match(/\b(government|organization|society|corporation|foundation|institute|agency|department|committee|council|group|association|union|federation|alliance|network|system|project|program|operation|experiment|research|study|investigation|report|document|file|record|evidence|proof|secret|classified|confidential|hidden|underground|mysterious|unknown|strange|unusual|unexplained|conspiracy|cover-up|surveillance|control|power|influence|manipulation|propaganda|brainwashing|mind control)\b/gi) || [];
    entities.push(...conspiracyTerms);
    
    // Remove duplicates and filter out short/common words
    return [...new Set(entities)]
      .filter(entity => entity.length > 2 && !['the', 'and', 'for', 'are', 'but', 'not', 'you', 'all'].includes(entity.toLowerCase()))
      .slice(0, 10); // Limit to top 10 entities
  }
}