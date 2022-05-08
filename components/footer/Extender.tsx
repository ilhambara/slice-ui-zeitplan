import * as React from "react";
import NextLink from "next/link";
import { Box, ButtonGroup, Container, IconButton, Link, Spacer, Text } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { FiGlobe } from "react-icons/fi";

export const Extender: React.FC = () => {
  return (
    <>
      <Box h={16} bg="gray.700">
        <Container maxW="container.lg" h="full" display="flex" justifyContent="center" alignItems="center">
          <Box>
            <Text color="gray.200">
              Sliced using{" "}
              <Link href="https://nextjs.org/" color="blue.200" isExternal>
                Next.js
              </Link>{" "}
              and{" "}
              <Link href="https://chakra-ui.com/ " color="blue.200" isExternal>
                Chakra UI
              </Link>
              {". "}
              See the source code{" "}
              <Link href="https://github.com/ilhambara/slice-ui-zeitplan" color="blue.200" isExternal>
                here
              </Link>
              .
            </Text>
          </Box>

          <Spacer />

          <ButtonGroup>
            <NextLink href="https://github.com/ilhambara" passHref>
              <IconButton
                as="a"
                aria-label="Github account"
                icon={<SiGithub />}
                variant="ghost"
                color="white"
                colorScheme="whiteAlpha"
                target="_blank"
              />
            </NextLink>

            <NextLink href="https://barathrum.studio" passHref>
              <IconButton
                as="a"
                aria-label="Github account"
                icon={<FiGlobe />}
                variant="ghost"
                color="white"
                colorScheme="whiteAlpha"
                target="_blank"
              />
            </NextLink>
          </ButtonGroup>
        </Container>
      </Box>
    </>
  );
};
