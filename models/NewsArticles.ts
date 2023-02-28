export interface INewsArticle {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
  source: { name: string };
}

export interface INewsArticlesResponse {
  articles: INewsArticle[];
}
