export interface WikipediaArticle {
  title: string;
  extract: string;
  url: string;
}

export class WikipediaService {
  private static instance: WikipediaService;

  private constructor() {}

  public static getInstance(): WikipediaService {
    if (!WikipediaService.instance) {
      WikipediaService.instance = new WikipediaService();
    }
    return WikipediaService.instance;
  }

  public async getRandomArticles(count: number): Promise<WikipediaArticle[]> {
    // Return mock static articles for now
    const mockArticles: WikipediaArticle[] = [
      {
        title: "Mock Article 1",
        extract: "This is a mock extract for article 1.",
        url: "https://en.wikipedia.org/wiki/Mock_Article_1",
      },
      {
        title: "Mock Article 2",
        extract: "This is a mock extract for article 2.",
        url: "https://en.wikipedia.org/wiki/Mock_Article_2",
      },
      {
        title: "Mock Article 3",
        extract: "This is a mock extract for article 3.",
        url: "https://en.wikipedia.org/wiki/Mock_Article_3",
      },
    ];
    return mockArticles.slice(0, count);
  }
}
