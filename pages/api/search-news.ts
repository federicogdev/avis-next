// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { INewsArticlesResponse } from "@/models/NewsArticles";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const searchQuery = req.query.q?.toString();

  const errorString: string = "Please provide a search query";

  if (!searchQuery) {
    return res.status(400).json({ error: errorString });
  }

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${searchQuery}&apikey=${process.env.NEWS_API_KEY}`
  );

  const newsResponse: INewsArticlesResponse = await response.json();
  res.status(200).json(newsResponse.articles);
}
