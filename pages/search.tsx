import NewsArticlesGrid from "@/components/NewsArticlesGrid";
import { INewsArticle } from "@/models/NewsArticles";
import {
  Box,
  FormControl,
  Input,
  Text,
  Flex,
  Button,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import React, { FormEvent, useState } from "react";

interface Props {}

const SearchPage = (props: Props) => {
  const [searchResults, setSearchResults] = useState<INewsArticle[] | null>(
    null
  );
  // const [searchQuery, setSearchQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const searchQuery = formData.get("searchQuery")?.toString();
    if (searchQuery) {
      try {
        setSearchResults(null);
        setError(false);
        setIsLoading(true);

        const res = await fetch("/api/search-news?q=" + searchQuery);

        const articles: INewsArticle[] = await res.json();
        setSearchResults(articles);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <Head>
        <title key="title">Avis News - Search</title>
      </Head>
      <Box py={30}>
        <Box pt={10}>
          <Text fontSize="3xl" fontWeight="bold">
            Search
          </Text>
        </Box>
        <Box py={5}>
          <form onSubmit={onSubmit}>
            <Flex
              direction={{ sm: "column", md: "row" }}
              justify="space-between"
            >
              <Input
                name="searchQuery"
                placeholder="Sports, entertainment, politics...."
                w={{ sm: "100%", md: "90%" }}
                mb={{ sm: "10px" }}
                // value={searchQuery}
                // onChange={(event) => setSearchQuery(event.target.value)}
              />
              <Button bg="blue.400" textColor="white" type="submit">
                Search
              </Button>
            </Flex>
          </form>
        </Box>

        <Box>
          {isLoading && <Spinner />}

          {searchResults && <NewsArticlesGrid articles={searchResults} />}
        </Box>
      </Box>
    </>
  );
};

export default SearchPage;
