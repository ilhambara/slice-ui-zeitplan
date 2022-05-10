import * as React from "react";
import { Box, Divider, Flex, Grid, Heading, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { FiDatabase, FiWifiOff, FiUser, FiCode } from "react-icons/fi";
import { IconType } from "react-icons";
import featOne from "../../data/features-1.json";

const FEAT_ONE: [string, string, IconType][] = [
  [featOne[0].title, featOne[0].desc, FiDatabase],
  [featOne[1].title, featOne[1].desc, FiWifiOff],
  [featOne[2].title, featOne[2].desc, FiUser],
  [featOne[3].title, featOne[3].desc, FiCode],
];

export const PrimaryFeat: React.FC = () => {
  return (
    <>
      <Stack direction={["column", "row"]} w="full" h={["full", 508]} justify="space-between" spacing={[16, 0]}>
        <VStack spacing={[12, 16]} w={["full", 369]} h="full" textAlign="left" align="start" justify="center">
          <VStack spacing={[6, 8]}>
            <Heading as="h1" fontSize={["2xl", "4xl"]} fontWeight="400">
              Kenapa Kamu Sangat Harus Pakai Aplikasi Yang Keren Ini?
            </Heading>

            <Text fontSize={["md", "lg"]} textColor="gray.500">
              Sejujurnya aplikasi kita ini seringkali bermasalah. Kadang-kadang gak bisa submit data, kadang dibukanya
              lambat, kadang tiba-tiba logout sendiri, untung gak berdua.
            </Text>
          </VStack>

          <HStack direction="row" justify={["space-evenly", "space-between"]} w={["full", "325px"]} h="52px">
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

        <Grid w={["full", 669]} templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]} gap={6}>
          {FEAT_ONE.map(([title, desc, AsIcon]) => (
            <VStack
              key={title}
              align="left"
              justify="center"
              minH={["fit-content", 239]}
              bg="#FFF7F5"
              borderRadius={6}
              p={[5, 10]}
              spacing={[6, 4]}
            >
              <Stack direction="row" align="center" spacing={4}>
                <Flex
                  align="center"
                  justify="center"
                  w={["40px", "50px"]}
                  h={["40px", "50px"]}
                  bg="#FFD9D2"
                  borderRadius={[4, 6]}
                >
                  <Icon as={AsIcon} boxSize={[5, 6]} color="#FE5E44" />
                </Flex>

                <Text fontSize={["xl", "lg"]} fontWeight="semibold">
                  {title}
                </Text>
              </Stack>

              <Text fontSize="md">{desc}</Text>
            </VStack>
          ))}
        </Grid>
      </Stack>
    </>
  );
};
