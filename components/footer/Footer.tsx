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
        <Container maxW="container.lg" minH={428} w="full" pt="150px">
          <Divider my={8} />
          <Stack direction="row" minH={248} w="full" py={16} justify="space-between">
            <VStack spacing={6} maxW={432} textAlign="left" align="start">
              <Box>
                <Image src="/img/logo.svg" alt="logo zeitplan" />
                <Heading as="h1" fontSize="2xl" fontWeight="400" pt={4}>
                  Zeitplan
                </Heading>
              </Box>

              <Text textColor="gray.500">
                Sebuah aplikasi yang membantu kamu untuk membuat jadwal kuliah, jadwal mabar, jadwal makan, jadwal liga
                inggris, dan jadwal-jadwal lainnya. Walaupun banyak error, setidaknya kami sudah berusaha semaksimal
                mungkin.
              </Text>

              <Text fontWeight="semibold" textColor="gray.500">
                COPYRIGHT (C) 2021. DESIGN BY NAUVAL
              </Text>
            </VStack>

            <Grid templateColumns="repeat(2, 1fr)" gap={24}>
              <GridItem>
                <Heading as="h1" fontSize="2xl" fontWeight="400" pb={4}>
                  Sitemap
                </Heading>

                <List fontWeight="semibold" textColor="gray.500" spacing={3}>
                  <ListItem>Beranda</ListItem>
                  <ListItem>Fitur-Fitur</ListItem>
                  <ListItem>Harga</ListItem>
                  <ListItem>Testimoni</ListItem>
                  <ListItem>Download</ListItem>
                </List>
              </GridItem>

              <GridItem>
                <Heading as="h1" fontSize="2xl" fontWeight="400" pb={4}>
                  Partner
                </Heading>

                <List fontWeight="semibold" textColor="gray.500" spacing={3}>
                  <ListItem>Sefan.ru</ListItem>
                  <ListItem>Ganool</ListItem>
                  <ListItem>Waptrick</ListItem>
                  <ListItem>Stafaband</ListItem>
                  <ListItem>MyWapBlog</ListItem>
                  <ListItem>Friv</ListItem>
                </List>
              </GridItem>
            </Grid>

            <VStack align="flex-start" maxW={240} spacing={4}>
              <Heading as="h1" fontSize="2xl" fontWeight="400">
                Tetep Terhubung
              </Heading>

              <Text textColor="gray.500">Lihat kami pansos di sosial media berikut:</Text>

              <Grid templateColumns="repeat(3, 1fr)" gap={4}>
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
              </Grid>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Extender />
    </>
  );
};
