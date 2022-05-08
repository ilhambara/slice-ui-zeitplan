import * as React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  GridItem,
  Heading,
  Icon,
  IconButton,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";
import { Extender } from "./Extender";

const NAV_SOCIAL_LINKS: [string, IconType][] = [
  ["Instagram", FiInstagram],
  ["Facebook", FiFacebook],
  ["Twitter ", FiTwitter],
];

export const Footer: React.FC = () => {
  return (
    <>
      <Box as="footer" bgColor="white">
        <Container maxW="container.lg" minH={428} w="full" pt={["50px", "150px"]} pb={["50px", 0]}>
          <Divider my={[4, 8]} />
          <Stack
            direction={["column", "row"]}
            minH={248}
            w="full"
            justify="space-between"
            py={[8, 16]}
            spacing={[10, 0]}
          >
            <VStack spacing={6} maxW={432} textAlign="left" align="start">
              <Box>
                <Image src="/img/logo.svg" alt="logo zeitplan" />
                <Heading as="h1" fontSize={["xl", "2xl"]} fontWeight="400" pt={4}>
                  Zeitplan
                </Heading>
              </Box>

              <Text fontSize={["sm", "md"]} textColor="gray.500">
                Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga
                inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal
                mungkin.
              </Text>

              <Text fontSize={["sm", "md"]} fontWeight="semibold" textColor="gray.500">
                COPYRIGHT (C) 2021. DESIGN BY NAUVAL
              </Text>
            </VStack>

            <Grid templateColumns="repeat(2, 1fr)" gap={[0, 24]}>
              <GridItem>
                <Heading as="h1" fontSize={["xl", "2xl"]} fontWeight="400" pb={4}>
                  Sitemap
                </Heading>

                <List fontSize={["sm", "md"]} fontWeight="semibold" textColor="gray.500" spacing={[2, 3]}>
                  <ListItem>Beranda</ListItem>
                  <ListItem>Fitur-Fitur</ListItem>
                  <ListItem>Harga</ListItem>
                  <ListItem>Testimoni</ListItem>
                  <ListItem>Download</ListItem>
                </List>
              </GridItem>

              <GridItem>
                <Heading as="h1" fontSize={["xl", "2xl"]} fontWeight="400" pb={4}>
                  Partner
                </Heading>

                <List fontSize={["sm", "md"]} fontWeight="semibold" textColor="gray.500" spacing={[2, 3]}>
                  <ListItem>Sefan.ru</ListItem>
                  <ListItem>Ganool</ListItem>
                  <ListItem>Waptrick</ListItem>
                  <ListItem>Stafaband</ListItem>
                  <ListItem>MyWapBlog</ListItem>
                  <ListItem>Friv</ListItem>
                </List>
              </GridItem>
            </Grid>

            <VStack align="flex-start" maxW={["full", 240]} spacing={4}>
              <Heading as="h1" fontSize={["xl", "2xl"]} fontWeight="400">
                Tetep Terhubung
              </Heading>

              <Text fontSize={["sm", "md"]} textColor="gray.500">
                Lihat kami pansos di sosial media berikut:
              </Text>

              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
                {NAV_SOCIAL_LINKS.map(([label, AsIcon]) => (
                  <GridItem key={label}>
                    <IconButton
                      aria-label={label}
                      icon={<Icon as={AsIcon} boxSize={[5, 6]} />}
                      w={[10, 12]}
                      h={[10, 12]}
                      color="#FE5E44"
                      bgColor="#FFF7F5"
                      borderRadius="full"
                    />
                  </GridItem>
                ))}
              </Grid>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Extender />
    </>
  );
};
