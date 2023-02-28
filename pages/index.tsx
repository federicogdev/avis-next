import React, { FC } from "react";
import Head from "next/head";
import { INewsArticle, INewsArticlesResponse } from "@/models/NewsArticles";
import { GetServerSideProps } from "next";
import { Box, SimpleGrid, GridItem, Text } from "@chakra-ui/react";
import NewsArticle from "@/components/NewsArticle";
import NewsArticlesGrid from "@/components/NewsArticlesGrid";

interface IHomePageProps {
  newsArticles: INewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  IHomePageProps
> = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/everything?q=world&apiKey=" +
      process.env.NEWS_API_KEY
  );

  const newsResponse: INewsArticlesResponse = await res.json();

  return { props: { newsArticles: newsResponse.articles } };
};

const HomePage: FC<IHomePageProps> = ({ newsArticles }) => {
  console.log(newsArticles);

  return (
    <>
      <Head>
        <title key="title">Avis News</title>
      </Head>
      <Box py={30}>
        <Box py={10}>
          <Text fontSize="3xl" fontWeight="bold">
            Top Headlines
          </Text>
        </Box>

        <NewsArticlesGrid articles={newsArticles} />
      </Box>
    </>
  );
};

export default HomePage;
