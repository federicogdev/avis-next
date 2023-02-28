import { INewsArticle } from "@/models/NewsArticles";
import React, { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
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
    <Card maxW={{ md: "md", lg: "lg" }}>
      <CardBody p={0} alignItems="space-between">
        <Image
          src={validImageUrl}
          alt="Green double couch with wooden legs"
          // borderRadius="lg"
          borderTopRadius="lg"
        />
        <Stack p={4}>
          <Heading size="md" noOfLines={2}>
            {article.title}
          </Heading>
          <Text lineHeight={1.2} noOfLines={4}>
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
        </Stack>
      </CardBody>
    </Card>
  );
};

export default NewsArticle;
