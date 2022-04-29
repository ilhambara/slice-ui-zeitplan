import * as React from "react";
import NextImage from "next/image";
import { Box, Container, Heading, Stack, Text, VStack, Button, ButtonGroup, Image } from "@chakra-ui/react";

export const Hero: React.FC = () => {
  return (
    <>
      <Box id="home">
        <Container maxW="container.lg" minH="90vh">
          <Stack direction="row" h="fit-content" align="center" py={12}>
            <VStack w="50%" align="left" spacing={12}>
              <VStack align="left" pr={8} spacing="8">
                <Heading as="h1" fontSize="5xl" fontWeight="400" textColor="gray.800">
                  Sebuah cara mudah mengatur jadwal kuliah kamu
                </Heading>

                <Text fontSize="xl" textColor="gray.500">
                  Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu
                  sangatlah tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~
                </Text>

                <ButtonGroup spacing="4" pt={4} textTransform="capitalize">
                  <Button colorScheme="orange" bgColor="#FE5E44" fontWeight="regular" variant="solid" py={6} px={12}>
                    Learn More
                  </Button>
                  <Button colorScheme="orange" bgColor="#FFEFED" textColor="#FE5E44" variant="outline" py={6} px={12}>
                    Play Demo
                  </Button>
                </ButtonGroup>
              </VStack>

              <Box w="501px" h="253px" pos="relative" left={-12}>
                <Image src="/img/hero-card-svg.svg" alt="Home card" />
              </Box>
            </VStack>

            <Box w="50%" width={580} height={652}>
              <Image src="/img/hero-img.png" alt="Home image" />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
