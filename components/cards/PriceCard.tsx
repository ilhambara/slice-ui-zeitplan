import * as React from "react";
import { Box, Button, Grid, GridItem, Heading, List, ListIcon, ListItem, Text, VStack } from "@chakra-ui/react";
import prices from "../../data/price.json";
import PriceIcon from "../../public/img/list-icon-price.svg";

export const PriceCard: React.FC = () => {
  return (
    <>
      <Box py={24}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          {prices
            .slice(0)
            .reverse()
            .map((price) => (
              <GridItem key={price.id} maxW={369} minH={605} bg="white" borderRadius={6} boxShadow="lg">
                <VStack align="left" spacing={6} p={12}>
                  <Text fontSize="sm" fontWeight="semibold" letterSpacing={1.5} color="#FE5E44">
                    {price.tag}
                  </Text>
                  <Box>
                    <Heading as="h3" fontSize="4xl" fontWeight="400" pb={4}>
                      {price.title}
                    </Heading>
                    <Text fontSize="lg" textColor="gray.500">
                      {price.desc}
                    </Text>
                  </Box>

                  <List spacing={5}>
                    {price.benefit.map((item) => {
                      // console.log(item[1]);

                      return (
                        <ListItem key={item} fontSize="lg">
                          <ListIcon as={PriceIcon} w={5} h={5} color="green.500" mr={4} />
                          {item}
                        </ListItem>
                      );
                    })}
                  </List>

                  <Box w="full" pt={4}>
                    <Button
                      w="full"
                      colorScheme="orange"
                      bgColor="#FE5E44"
                      fontWeight="regular"
                      variant="solid"
                      py={6}
                      px={12}
                    >
                      Download
                    </Button>
                  </Box>
                </VStack>
              </GridItem>
            ))}
        </Grid>
      </Box>
    </>
  );
};
