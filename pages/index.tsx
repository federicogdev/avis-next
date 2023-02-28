import React, { FC } from "react";
import Head from "next/head";
import { INewsArticle, INewsArticlesResponse } from "@/models/NewsArticles";
import { GetServerSideProps } from "next";
import { Box, Text } from "@chakra-ui/react";

interface IHomePageProps {
  newsArticles: INewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  IHomePageProps
> = async () => {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" +
      process.env.NEWS_API_KEY
  );

  const newsResponse: INewsArticlesResponse = await res.json();

  return { props: { newsArticles: newsResponse.articles } };
};

const HomePage: FC<IHomePageProps> = ({ newsArticles }) => {
  return (
    <>
      <Head>
        <title key="title">Avis News</title>
      </Head>

      <Box>
        <Text>{JSON.stringify(newsArticles)}</Text>
      </Box>
    </>
  );
};

export default HomePage;
