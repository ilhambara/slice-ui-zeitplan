import * as React from "react";
import { Box, ButtonGroup, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";

export const Download: React.FC = () => {
  return (
    <>
      <Box id="download" as="section" h={422} w="full" bgColor="white">
        <Container maxW="container.lg" pt="150px">
          <VStack spacing={12} textAlign="center" align="center">
            <Heading as="h1" fontWeight="400">
              Download Aplikasi Keren Ini Sekarang!
            </Heading>

            <Box maxW={761}>
              <Text fontSize="xl" textColor="gray.500">
                Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga
                ditambah weekend. Jadi, please download lah ya.
              </Text>
            </Box>

            <ButtonGroup spacing={4}>
              <Image src="/img/download-ios.svg" alt="CTA download IOS" />
              <Image src="/img/download-android.svg" alt="CTA download Android" />
            </ButtonGroup>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
