import * as React from "react";
import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { PriceCard } from "../cards/PriceCard";

export const Pricing: React.FC = () => {
  return (
    <>
      <Box id="harga" as="section" w="full" bgColor="#FFF7F5">
        <Container maxW="container.lg" minH="100vh" w="full" py={["80px", "150px"]}>
          <VStack spacing={[6, 10]} textAlign="center" align="center">
            <Box maxW={[320, 540]}>
              <Heading as="h1" fontSize={["2xl", "4xl"]} fontWeight="400">
                Main catur sambil bersepeda, beda harga beda fitur
              </Heading>
            </Box>

            <Box maxW={567}>
              <Text fontSize={["md", "lg"]} textColor="gray.500">
                Aplikasi ini gratis sebenernya, brodie. Tapi kalo mau bayar gapapa juga sih, untuk gantinya kami kasih
                fitur yang spesial buat kamu!
              </Text>
            </Box>
          </VStack>

          <PriceCard />

          <Flex justify="center" textAlign="center">
            <Box maxW={567}>
              <Text fontSize={["sm", "md"]} textColor="gray.500">
                <b>Harap Diingat:</b> Harga di atas belum termasuk KKM, dan harga sewaktu-waktu bisa berubah secara
                mendadak seperti pengumuman PPKM darurat.
              </Text>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
