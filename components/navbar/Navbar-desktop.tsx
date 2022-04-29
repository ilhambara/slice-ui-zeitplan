import * as React from "react";
import NextLink from "next/link";
import { Button, Container, HStack, Image, Stack, Spacer, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export const NavbarDesktop: React.FC = () => {
  return (
    <>
      <Container as="header" maxW="container.lg" pos="sticky" top={0} zIndex={999} pt={8}>
        <Stack
          as="nav"
          direction="row"
          h="100px"
          w="full"
          align="center"
          bgColor="white"
          borderRadius="6px"
          boxShadow="lg"
          p={8}
        >
          <NextLink href="/" passHref>
            <Link>
              <Image src="img/nav-logo.png" h="40px" w="auto" alt="Zeitplan logo" />
            </Link>
          </NextLink>

          <Spacer />

          <HStack>
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" color="#FE5E44">
                Home
              </Button>
            </NextLink>

            <NextLink href="#fitur-fitur" passHref>
              <Button as="a" variant="ghost" color="gray.400" fontWeight="regular">
                Fitur-Fitur
              </Button>
            </NextLink>

            <NextLink href="#harga" passHref>
              <Button as="a" variant="ghost" color="gray.400" fontWeight="regular">
                Harga
              </Button>
            </NextLink>

            <NextLink href="#testimoni" passHref>
              <Button as="a" variant="ghost" color="gray.400" fontWeight="regular">
                Testimoni
              </Button>
            </NextLink>

            {/* Download Button */}
            <NextLink href="#download" passHref>
              <Button
                as="a"
                rightIcon={<ArrowForwardIcon />}
                colorScheme="orange"
                bgColor="#FE5E44"
                fontWeight="regular"
                variant="solid"
              >
                Download
              </Button>
            </NextLink>
          </HStack>
        </Stack>
      </Container>
    </>
  );
};
