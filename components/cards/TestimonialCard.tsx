import * as React from "react";
import { Box, Image } from "@chakra-ui/react";

export const TestimonialCard: React.FC = () => {
  return (
    <>
      <Box py={20}>
        <Image src="/img/testimonial/testimonial.svg" w={1169} h="full" alt="All testimonies" />
      </Box>
    </>
  );
};
