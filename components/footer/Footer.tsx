import * as React from "react";
import { Box, Container, Divider, Heading, VStack } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <>
      <Box as="footer" bgColor="white">
        <Container maxW="container.lg" minH="50vh" w="full" pt="150px">
          <Divider my={8} />
          <VStack spacing={16} textAlign="left" align="start">
            <Heading as="h1" fontWeight="400">
              Footer &ndash; Zeitplan
            </Heading>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
