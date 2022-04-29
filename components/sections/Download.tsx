import * as React from "react";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";

export const Download: React.FC = () => {
  return (
    <>
      <Box id="download" as="section" minH="50vh" w="full" bgColor="white">
        <Container maxW="container.lg" pt="150px">
          <VStack spacing={16} textAlign="left" align="start">
            <Heading as="h1" fontWeight="400">
              Download Aplikasi Keren Ini Sekarang!
            </Heading>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
