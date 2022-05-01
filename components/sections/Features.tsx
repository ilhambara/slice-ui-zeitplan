import * as React from "react";
import { Box, Container, VStack } from "@chakra-ui/react";
import { PrimaryFeat } from "../features/PrimaryFeat";
import { SecondaryFeat } from "../features/SecondaryFeat";

export const Features: React.FC = () => {
  return (
    <>
      <Box id="fitur-fitur" as="section" bgColor="white">
        <Container maxW="container.lg" minH="100vh" w="full" pt="150px">
          <VStack spacing={20} h="full" textAlign="left" align="start" justify="space-evenly">
            <PrimaryFeat />
            <SecondaryFeat />
          </VStack>
        </Container>
      </Box>
    </>
  );
};
