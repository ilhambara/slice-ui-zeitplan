import * as React from "react";
import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { TestimonialCard } from "../cards/TestimonialCard";

export const Testimonial: React.FC = () => {
  return (
    <>
      <Box id="testimoni" as="section" bgColor="#FFEFED">
        <Container maxW="container.lg" minH="100vh" w="full" pt="150px">
          <VStack spacing={10} textAlign="center" align="center">
            <Box maxW={567}>
              <Heading as="h1" fontWeight="400">
                Apa kata umat manusia tentang aplikasi keren ini?
              </Heading>
            </Box>

            <Box maxW={567}>
              <Text fontSize="lg" textColor="gray.500">
                Kami tidak memfilter semua review, males soalnya. Jadi semua yang ditampilkan di sini semuanya asli
                tanpa reksadana.
              </Text>
            </Box>
          </VStack>

          <TestimonialCard />
        </Container>
      </Box>
    </>
  );
};
