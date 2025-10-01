import { WikipediaArticle } from "./wikipedia";

export interface ConspiracyTheory {
  id: string;
  theory: string;
  template: string;
  believabilityScore: number;
  sources: WikipediaArticle[];
  timestamp: Date;
}

export class ConspiracyGenerator {
  public generateTheory(articles: WikipediaArticle[]): ConspiracyTheory {
    // Generate a mock conspiracy theory using the article titles
    const theoryText = `The government is hiding secrets about ${articles.map(a => a.title).join(", ")}.`;

    return {
      id: Math.random().toString(36).substring(2, 9),
      theory: theoryText,
      template: "Mock Template",
      believabilityScore: Math.floor(Math.random() * 100),
      sources: articles,
      timestamp: new Date(),
    };
  }
}
