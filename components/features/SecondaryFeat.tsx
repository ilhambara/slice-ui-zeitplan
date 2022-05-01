import * as React from "react";
import { Box, Grid, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FiCloudOff, FiTrash2, FiVideo, FiBell } from "react-icons/fi";

export const SecondaryFeat: React.FC = () => {
  return (
    <>
      <Stack direction="row" w="full" h={879} align="center" justify="space-between">
        <Box h={679}>
          <Image src="/img/fitur-img.svg" alt="Home card" />
        </Box>

        <VStack w="48%" spacing={12}>
          <VStack spacing={6}>
            <Heading as="h1" fontWeight="400">
              Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~
            </Heading>

            <Text fontSize="lg" textColor="gray.500">
              Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA
              MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!
            </Text>
          </VStack>

          <Grid w="full" h="full" templateColumns="repeat(2, 1fr)" gap={8}>
            <VStack minH={141} align="left" spacing={4}>
              <Icon as={FiCloudOff} w={35} h={35} color="#FE5E44" />
              <Heading as="h6" fontSize="lg" fontWeight="400">
                Tidak Tersimpan Otomatis
              </Heading>
              <Text textColor="gray.500">Kalo lo pelupa ya udah dah, jadwal lo bakal gak kesimpen tuh.</Text>
            </VStack>

            <VStack minH={141} align="left" spacing={4}>
              <Icon as={FiVideo} w={35} h={35} color="#FE5E44" />
              <Heading as="h6" fontSize="lg" fontWeight="400">
                Si Rizal Gak Pernah Ngonten
              </Heading>
              <Text textColor="gray.500">Emang sih dia gak pernah ngonten, do’ain ya biar mau ngonten.</Text>
            </VStack>

            <VStack minH={141} align="left" spacing={4}>
              <Icon as={FiTrash2} w={35} h={35} color="#FE5E44" />
              <Heading as="h6" fontSize="lg" fontWeight="400">
                Terhapus Otomatis
              </Heading>
              <Text textColor="gray.500">Data lo bakal kehapus otomatis tiap hari, biar hemat server kita.</Text>
            </VStack>

            <VStack minH={141} align="left" spacing={4}>
              <Icon as={FiBell} w={35} h={35} color="#FE5E44" />
              <Heading as="h6" fontSize="lg" fontWeight="400">
                Nggak Tau Lagi Gw
              </Heading>
              <Text textColor="gray.500">Mikir teks buat konten susah bro, ini aja ngasal masih susah!</Text>
            </VStack>
          </Grid>
        </VStack>
      </Stack>
    </>
  );
};
