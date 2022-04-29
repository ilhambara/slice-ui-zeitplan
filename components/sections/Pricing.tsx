import * as React from "react";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";

export const Pricing: React.FC = () => {
  return (
    <>
      <Box id="harga" as="section" bgColor="#FFF7F5">
        <Container maxW="container.lg" minH="100vh" w="full" pt="150px">
          <VStack spacing={16} textAlign="left" align="start">
            <Heading as="h1" fontWeight="400">
              Main catur sambil bersepeda, beda harga beda fitur
            </Heading>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
