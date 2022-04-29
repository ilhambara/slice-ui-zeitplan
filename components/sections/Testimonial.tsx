import * as React from "react";
import { Box, Container, Heading, VStack } from "@chakra-ui/react";

export const Testimonial: React.FC = () => {
  return (
    <>
      <Box id="testimoni" as="section" bgColor="#FFEFED">
        <Container maxW="container.lg" minH="100vh" w="full" pt="150px">
          <VStack spacing={16} textAlign="left" align="start">
            <Heading as="h1" fontWeight="400">
              Apa kata umat manusia tentang aplikasi keren ini?
            </Heading>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
