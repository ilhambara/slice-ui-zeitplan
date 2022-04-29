import * as React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export const Hero: React.FC = () => {
  return (
    <>
      <Box id="home">
        <Container maxW="container.lg" minH="100vh">
          <Heading as="h1" fontWeight="400">
            Sebuah cara mudah mengatur jadwal kuliah kamu
          </Heading>
          <Text>
            Datang kuliah terlambat karena ketiduran itu tidak masalah; datang kuliah karena lupa jadwal itu sangatlah
            tidak keren. Aplikasi ini adalah sahabat kamu sekarang, brodie~
          </Text>
        </Container>
      </Box>
    </>
  );
};
