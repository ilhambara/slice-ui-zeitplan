import * as React from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import {
  Button,
  Container,
  HStack,
  Image,
  Stack,
  Spacer,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
} from "@chakra-ui/react";
import { ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import config from "../../config/siteConfig";

const NAV_LINKS = [
  ["home", config.navlink.Home],
  ["fitur-fitur", config.navlink.Fitur],
  ["harga", config.navlink.Harga],
  ["testimoni", config.navlink.Testimoni],
];

export const NavbarMobile: React.FC = () => {
  const router = useRouter();
  const isActive = router.asPath;

  return (
    <>
      <Container
        display={["block", "none"]}
        as="header"
        maxW="container.lg"
        pos="sticky"
        top={0}
        zIndex={999}
        pt={[4, 8]}
      >
        <Stack
          as="nav"
          direction="row"
          h={["64px", "100px"]}
          w="full"
          align="center"
          bgColor="white"
          borderRadius="6px"
          boxShadow="lg"
          p={[4, 8]}
        >
          <NextLink href="/" passHref>
            <Link>
              <Image src="img/nav-logo.svg" h={["32px", "40px"]} w="auto" alt="Zeitplan logo" />
            </Link>
          </NextLink>

          <Spacer />

          <HStack>
            <Menu>
              <MenuButton as={IconButton} aria-label="Menu" icon={<HamburgerIcon />} variant="ghost" />
              <MenuList mt={3} mr={-4}>
                {NAV_LINKS.map(([nav, href]) => (
                  <NextLink key={nav} href={href} passHref>
                    <MenuItem
                      textTransform="capitalize"
                      color={isActive === href ? "#FE5E44" : "gray.600"}
                      fontWeight={isActive === href ? "semibold" : "regular"}
                    >
                      {nav}
                    </MenuItem>
                  </NextLink>
                ))}

                <MenuDivider />

                <MenuItem>
                  <NextLink href="#download" passHref>
                    <Button
                      as="a"
                      rightIcon={<ArrowForwardIcon />}
                      colorScheme="orange"
                      bgColor="#FE5E44"
                      fontWeight="regular"
                      variant="solid"
                      size="sm"
                      w="full"
                    >
                      Download
                    </Button>
                  </NextLink>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Stack>
      </Container>
    </>
  );
};
