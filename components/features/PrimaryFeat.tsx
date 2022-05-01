import * as React from "react";
import { Box, Divider, Flex, Grid, Heading, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { FiDatabase, FiWifiOff, FiUser, FiCode } from "react-icons/fi";

export const PrimaryFeat: React.FC = () => {
  return (
    <>
      <Stack direction="row" w="full" h={508} justify="space-between">
        <VStack spacing={16} w={369} h="full" textAlign="left" align="start" justify="center">
          <VStack spacing={8}>
            <Heading as="h1" fontWeight="400">
              Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
            </Heading>

            <Text fontSize="lg" textColor="gray.500">
              Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya
              lambat, kadang tiba-tiba logout sendiri, untung gak berdua.
            </Text>
          </VStack>

          <HStack direction="row" justify="space-between" w="325px" h="52px">
            <Box>
              <Text fontSize="xs" textColor="gray.500">
                TOTAL DON{"'"}TLOUD
              </Text>
              <Text fontSize="2xl" fontWeight="semibold">
                1,501,234
              </Text>
            </Box>

            <Divider orientation="vertical" />

            <Box>
              <Text fontSize="xs" textColor="gray.500">
                TOTAL USERS
              </Text>
              <Text fontSize="2xl" fontWeight="semibold">
                1,318,829
              </Text>
            </Box>
          </HStack>
        </VStack>

        <Grid w={669} h="full" templateColumns="repeat(2, 1fr)" gap={6}>
          <VStack align="left" minH={239} bg="#FFF7F5" borderRadius={6} p={10}>
            <HStack spacing={4}>
              <Flex align="center" justify="center" w={50} h={50} bg="#FFD9D2" borderRadius={6}>
                <Icon as={FiDatabase} w={6} h={6} color="#FE5E44" />
              </Flex>

              <Text fontSize="lg" fontWeight="semibold">
                Aplikasi Gratis
              </Text>
            </HStack>

            <Text pt={4}>
              Semua fitur di aplikasi ini adalah gratis, tapi data privasi kamu akan kami jual ke agen khusus US.
            </Text>
          </VStack>

          <VStack align="left" minH={239} bg="#FFF7F5" borderRadius={6} p={10}>
            <HStack spacing={4}>
              <Flex align="center" justify="center" w={50} h={50} bg="#FFD9D2" borderRadius={6}>
                <Icon as={FiWifiOff} w={6} h={6} color="#FE5E44" />
              </Flex>

              <Text fontSize="lg" fontWeight="semibold">
                Kode OTP Error
              </Text>
            </HStack>

            <Text pt={4}>Pas login kode OTP lo gak kekirim kadang, terus lo harus nyoba berulang kali sampe bisa.</Text>
          </VStack>

          <VStack align="left" minH={239} bg="#FFF7F5" borderRadius={6} p={10}>
            <HStack spacing={4}>
              <Flex align="center" justify="center" w={50} h={50} bg="#FFD9D2" borderRadius={6}>
                <Icon as={FiUser} w={6} h={6} color="#FE5E44" />
              </Flex>

              <Text fontSize="lg" fontWeight="semibold">
                Data Tidak Aman
              </Text>
            </HStack>

            <Text pt={4}>
              Data tidak disimpan dengan baik dan rentan bocor, jangan heran data lo tiba-tiba ada di deepweb.
            </Text>
          </VStack>

          <VStack align="left" minH={239} bg="#FFF7F5" borderRadius={6} p={10}>
            <HStack spacing={4}>
              <Flex align="center" justify="center" w={50} h={50} bg="#FFD9D2" borderRadius={6}>
                <Icon as={FiCode} w={6} h={6} color="#FE5E44" />
              </Flex>

              <Text fontSize="lg" fontWeight="semibold">
                Biasanya Error
              </Text>
            </HStack>

            <Text pt={4}>
              Ketika submit data biasanya error di bagian ajax-nya, eh nggak deng itu aplikasi pemerintah~
            </Text>
          </VStack>
        </Grid>
      </Stack>
    </>
  );
};
