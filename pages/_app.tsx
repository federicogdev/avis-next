import "@/styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import { ChakraProvider, Container } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title key="title">Avis</title>
        <meta
          name="description"
          key="description"
          content="Generated by create next app"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <Container maxW={{ sm: "100%", md: "80%" }}>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
