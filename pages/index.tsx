import type { NextPage } from "next";
import Head from "next/head";
import {
  Container,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
  List,
  ListItem,
  ListIcon,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Home: NextPage = () => {
  return (
    <Container
      maxW="container.lg"
      h="100vh"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Head>
        <title>Your Next Chakra ⚡️ by Ilhambara</title>
        <meta name="description" content="A custom boilerplate to get the fastest setup for Next.js with Chakra UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack w="100%" h="100%" justifyContent="center" alignItems="center">
        <Heading as="h1" fontSize={["2xl", "5xl"]}>
          This is{" "}
          <ChakraLink
            href="https://github.com/ilhambara/your-next-chakra"
            color="blue.900"
            textDecoration="underline"
            isExternal
          >
            Your Next Chakra
          </ChakraLink>
          {" ⚡️"}
        </Heading>

        <Text fontSize={["xl", "2xl"]} py={[6, 12]}>
          A custom boilerplate to get the fastest setup for{" "}
          <ChakraLink href="https://nextjs.org/" fontWeight="500" color="blue.500" isExternal>
            Next.js
          </ChakraLink>{" "}
          with{" "}
          <ChakraLink href="https://chakra-ui.com/" fontWeight="500" color="teal.500" isExternal>
            Chakra UI
          </ChakraLink>
        </Text>

        <Box fontSize={["md", "lg"]}>
          <Text fontWeight="500" pb={4}>
            Another Setups that also included in this boilerplate:
          </Text>

          <List spacing={3}>
            <ListItem>
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              Typescript support
            </ListItem>
            <ListItem>
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              ESLint setup with basic Google style guide
            </ListItem>
            <ListItem>
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              Prettier config
            </ListItem>
            <ListItem>
              <ListIcon as={ArrowForwardIcon} color="green.500" />
              etc.{" "}
              <ChakraLink
                href="https://github.com/ilhambara/your-next-chakra/blob/main/package.json"
                color="blue.500"
                isExternal
              >
                (see here)
              </ChakraLink>
            </ListItem>
          </List>
        </Box>
      </VStack>

      <Flex w="100%" h="6rem" justifyContent="center" alignItems="center" borderTop="1px" borderColor="gray.900">
        <Text>
          Created in full-power by 🚀{" "}
          <ChakraLink href="https://barathrum.studio/" fontWeight="500" color="gray.900a" isExternal>
            Ilhambara
          </ChakraLink>
        </Text>
      </Flex>
    </Container>
  );
};

export default Home;
