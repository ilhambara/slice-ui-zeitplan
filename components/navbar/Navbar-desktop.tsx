import * as React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import { Button, Container, HStack, Image, Stack, Spacer, Link } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import config from "../../config/siteConfig";

const NAV_LINKS = [
  ["home", config.navlink.Home],
  ["fitur-fitur", config.navlink.Fitur],
  ["harga", config.navlink.Harga],
  ["testimoni", config.navlink.Testimoni],
];

export const NavbarDesktop: React.FC = () => {
  const router = useRouter();
  const isActive = router.asPath;

  return (
    <>
      <Container display={["none", "block"]} as="header" maxW="container.lg" pos="sticky" top={0} zIndex={999} pt={8}>
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
              <Image src="img/nav-logo.svg" h="40px" w="auto" alt="Zeitplan logo" />
            </Link>
          </NextLink>

          <Spacer />

          <HStack>
            {NAV_LINKS.map(([nav, href]) => (
              <NextLink key={nav} href={href} passHref>
                <Button
                  as="a"
                  variant="ghost"
                  textTransform="capitalize"
                  color={isActive === href ? "#FE5E44" : "gray.400"}
                  fontWeight={isActive === href ? "semibold" : "regular"}
                >
                  {nav}
                </Button>
              </NextLink>
            ))}

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
