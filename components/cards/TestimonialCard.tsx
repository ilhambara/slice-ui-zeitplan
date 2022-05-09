import * as React from "react";
import { Grid, GridItem, Image } from "@chakra-ui/react";

export const TestimonialCard: React.FC = () => {
  return (
    <>
      <Grid py={[12, 24]} w="full" h="full" templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]} gap={0}>
        <GridItem>
          <Image src="/img/testimonial/testi-1.svg" alt="Testimoni card 1" />
        </GridItem>
        <GridItem>
          <Image src="/img/testimonial/testi-2.svg" alt="Testimoni card 2" />
        </GridItem>
        <GridItem>
          <Image src="/img/testimonial/testi-3.svg" alt="Testimoni card 3" />
        </GridItem>
      </Grid>
    </>
  );
};
