import { INewsArticle } from "@/models/NewsArticles";
import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";
import NewsArticle from "./NewsArticle";

interface INewsArticlesGrid {
  articles: INewsArticle[];
}

const NewsArticlesGrid: FC<INewsArticlesGrid> = ({ articles }) => {
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={5}
      // gridTemplateRows="masonry"
    >
      {articles.map((article) => (
        <NewsArticle article={article} key={article.url} />
      ))}
    </SimpleGrid>
  );
};

export default NewsArticlesGrid;
