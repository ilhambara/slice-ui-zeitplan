import * as React from "react";
import { Box, ButtonGroup, Container, Heading, Image, Text, VStack } from "@chakra-ui/react";

export const Download: React.FC = () => {
  return (
    <>
      <Box id="download" as="section" h={["fit-content", 422]} w="full" bgColor="white">
        <Container maxW="container.lg" pt={["80px", "150px"]} pb={["80px", 0]}>
          <VStack spacing={[8, 12]} textAlign="center" align="center">
            <Heading as="h1" fontSize={["2xl", "4xl"]} fontWeight="400">
              Download Aplikasi Keren Ini Sekarang!
            </Heading>

            <Box maxW={761}>
              <Text fontSize={["md", "lg"]} textColor="gray.500">
                Please download lah aplikasi ini, udah susah-susah buat, mana pas bikin sampe begadang, terus juga
                ditambah weekend. Jadi, please download lah ya.
              </Text>
            </Box>

            <ButtonGroup spacing={4} pt={[6, 0]}>
              <Image src="/img/download-ios.svg" alt="CTA download IOS" cursor="pointer" />
              <Image src="/img/download-android.svg" alt="CTA download Android" cursor="pointer" />
            </ButtonGroup>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
