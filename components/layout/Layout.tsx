import * as React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { NavbarDesktop } from "../navbar/Navbar-desktop";
import { Footer } from "../footer/Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <VStack bgGradient="linear(to-b, #FFF4F2 40%, #FFF0EE 100%)">
        <NavbarDesktop />
        <Box as="main" w="full">
          {children}
        </Box>
      </VStack>

      <Footer />
    </>
  );
};
