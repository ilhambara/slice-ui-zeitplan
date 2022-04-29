import * as React from "react";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";

export const Features: React.FC = () => {
  return (
    <>
      <Box id="fitur-fitur" as="section" bgColor="white">
        <Container maxW="container.lg" minH="100vh" w="full" pt="150px">
          <VStack spacing={16} h="full" textAlign="left" align="start" justify="space-evenly">
            <Heading as="h1" fontWeight="400">
              Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
            </Heading>

            <Heading as="h1" fontWeight="400">
              Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~
            </Heading>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
