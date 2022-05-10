import * as React from "react";
import { Box, Grid, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FiCloudOff, FiTrash2, FiVideo, FiBell } from "react-icons/fi";
import { IconType } from "react-icons";
import featTwo from "../../data/features-2.json";

const FEAT_TWO: [string, string, IconType][] = [
  [featTwo[0].title, featTwo[0].desc, FiCloudOff],
  [featTwo[1].title, featTwo[1].desc, FiVideo],
  [featTwo[2].title, featTwo[2].desc, FiTrash2],
  [featTwo[3].title, featTwo[3].desc, FiBell],
];

export const SecondaryFeat: React.FC = () => {
  return (
    <>
      <Stack
        direction={["column-reverse", "row"]}
        w="full"
        h={["full", 879]}
        align="center"
        justify="space-between"
        spacing={[16, 0]}
      >
        <Box w={["90%", "fit-content"]} h={["fit-content", 679]} pb={[20, 0]}>
          <Image src="/img/fitur-img.svg" alt="Feature image" />
        </Box>

        <VStack w={["full", "48%"]} spacing={12}>
          <VStack spacing={[6, 8]}>
            <Heading as="h1" fontSize={["2xl", "4xl"]} fontWeight="400">
              Memangnya ada fitur apa aja sih di aplikasi yang katanya keren ini? Jadi penasaran nich~
            </Heading>

            <Text fontSize={["md", "lg"]} textColor="gray.500">
              Aplikasi sekeren ini akan membuat kamu tidak dapat memberi alasan apapun untuk bolos matkul dosen (HAHA
              MAMPUS!). Lagian lo kuliah tapi jarang masuk, titip absen doang!
            </Text>
          </VStack>

          <Grid w="full" h="full" templateColumns="repeat(2, 1fr)" gap={[10, 8]}>
            {FEAT_TWO.map(([title, desc, AsIcon]) => (
              <VStack key={title} minH={141} align="left" spacing={4}>
                <Icon as={AsIcon} boxSize={[8, 9]} color="#FE5E44" />
                <Heading as="h6" fontSize="lg" fontWeight="400">
                  {title}
                </Heading>
                <Text fontSize="md" textColor="gray.500">
                  {desc}
                </Text>
              </VStack>
            ))}
          </Grid>
        </VStack>
      </Stack>
    </>
  );
};
