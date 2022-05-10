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
  Link,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IconType } from "react-icons/lib";
import { FiFacebook, FiFigma, FiInstagram, FiTwitter } from "react-icons/fi";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Extender } from "./Extender";

const NAV_SOCIAL_LINKS: [string, IconType][] = [
  ["Instagram", FiInstagram],
  ["Facebook", FiFacebook],
  ["Twitter ", FiTwitter],
];

export const Footer: React.FC = () => {
  return (
    <>
      <Box as="footer" w="full" bgColor="white">
        <Container maxW="container.lg" minH={428} w="full" pt={[0, "150px"]} pb={["50px", 0]}>
          <Divider my={[4, 8]} />
          <Stack
            direction={["column", "row"]}
            minH={248}
            w="full"
            justify="space-between"
            py={[8, 16]}
            spacing={[10, 0]}
          >
            <VStack maxW={432} textAlign="left" align="start" spacing={6}>
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
                COPYRIGHT (C) 2021.{" "}
                <Link href="https://twitter.com/mhdnauvalazhar" isExternal>
                  DESIGN BY NAUVAL <ExternalLinkIcon mb="4px" mx="2px" />
                </Link>
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

              <Grid templateColumns="repeat(4, 1fr)" gap={[5, 4]}>
                {NAV_SOCIAL_LINKS.map(([label, AsIcon]) => (
                  <GridItem key={label}>
                    <IconButton
                      aria-label={label}
                      icon={<Icon as={AsIcon} boxSize={6} />}
                      w={12}
                      h={12}
                      color="#FE5E44"
                      bgColor="#FFF7F5"
                      borderRadius="full"
                    />
                  </GridItem>
                ))}
                <GridItem>
                  <Link href="https://www.figma.com/@mhd" isExternal>
                    <IconButton
                      aria-label="Figma"
                      icon={<Icon as={FiFigma} boxSize={6} />}
                      w={12}
                      h={12}
                      color="#FE5E44"
                      bgColor="#FFF7F5"
                      borderRadius="full"
                    />
                  </Link>
                </GridItem>
              </Grid>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Extender />
    </>
  );
};
