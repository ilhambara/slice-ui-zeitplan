import * as React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <VStack bgGradient="linear(to-b, #FFF4F2 40%, #FFF0EE 100%)">
        <Navbar />
        <Box as="main" w="full">
          {children}
        </Box>
      </VStack>

      <Footer />
    </>
  );
};
