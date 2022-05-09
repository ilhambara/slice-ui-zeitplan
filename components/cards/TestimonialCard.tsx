import * as React from "react";
import { Avatar, Box, Center, Flex, HStack, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import testimonial from "../../data/testimonial.json";

export const TestimonialCard: React.FC = () => {
  return (
    <>
      <Box pt={[12, 24]}>
        <Flex direction={["column", "row"]} justify="space-between" gap={8}>
          {[...Array(testimonial.length / 2)].map((_, i) => (
            <Stack key={i} align="center" gap={[6, 8]}>
              {testimonial.slice(i * 2, i * 2 + 2).map((rate) => (
                <VStack
                  key={rate.id}
                  maxW={["90%", 370]}
                  h="fit-content"
                  align="start"
                  bgColor="white"
                  borderRadius={6}
                  boxShadow="md"
                  p={7}
                  spacing={6}
                >
                  {/* Stars Rating */}
                  <HStack spacing={1.5}>
                    {[...Array(5)].map((star, value) => {
                      const ratingValue = value + 1;
                      return (
                        <Box
                          key={star}
                          boxSize={5}
                          borderRadius={3}
                          bgColor={ratingValue > rate.rating ? "#CCCCCC" : "#FFC93F"}
                        >
                          <Center h="full">
                            <Icon as={AiFillStar} boxSize={4} color="white" />
                          </Center>
                        </Box>
                      );
                    })}
                    {/* End of Stars Rating */}
                  </HStack>

                  <Box>
                    <Text fontSize="sm" lineHeight={1.8} textStyle="testiCard">
                      &quot;{rate.review}&quot;
                    </Text>
                  </Box>

                  <HStack spacing={5}>
                    <Avatar size="55px" src={rate.avatar} />
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="semibold" textStyle="testiCard">
                        {rate.name}
                      </Text>
                      <Text fontSize="xs" fontWeight="semibold" textColor="#6E7293" textStyle="testiCard">
                        {rate.role}
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
              ))}
            </Stack>
          ))}
        </Flex>
      </Box>
    </>
  );
};
