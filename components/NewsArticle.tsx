import { INewsArticle } from "@/models/NewsArticles";
import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  Link,
  LinkOverlay,
  VStack,
} from "@chakra-ui/react";
import dayjs from "dayjs";

interface INewsArticleProps {
  article: INewsArticle;
}

const NewsArticle: FC<INewsArticleProps> = ({ article }) => {
  const validImageUrl =
    article.urlToImage?.startsWith("http://") ||
    article.urlToImage?.startsWith("https://")
      ? article.urlToImage
      : "http://pioneer-technical.com/wp-content/uploads/2016/12/news-placeholder.png";

  //FIXME: Make sure the Stack containing the texts is flexed and justified space between
  return (
    <Stack
      maxW={{ sm: "md", md: "md", lg: "lg" }}
      shadow="lg"
      borderRadius="lg"
      as={Link}
      href={article.url}
      mB={10}
    >
      <Image
        src={validImageUrl}
        alt="Green double couch with wooden legs"
        borderTopRadius="lg"
        shadow="md"
        h={{ sm: "60%", md: "50%" }}
        maxH={{ sm: "60%", md: "50%" }}
      />
      <Flex
        direction="column"
        p={4}
        justify="space-between"
        h={{ sm: "40%", md: "50%" }}
      >
        <Heading size="md" noOfLines={2}>
          {article.title}
        </Heading>
        <Text lineHeight={1.2} noOfLines={3}>
          {article.content}
        </Text>
        <Flex justify="space-between" align="center">
          <Text color="blue.600" fontSize="md" fontWeight={"bold"}>
            {article.source.name}
          </Text>
          <Text fontSize="sm">
            {dayjs(article.publishedAt).format("DD MMM YYYY")}
          </Text>
        </Flex>
      </Flex>
    </Stack>
  );
};

export default NewsArticle;
