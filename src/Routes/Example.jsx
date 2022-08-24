import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text,Grid } from "@chakra-ui/react";

export default function Example({data}) {
    console.log(data)
  return (
    <Center h="100vh">
  

      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src={data.image} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{data.category}</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            {data.brand}
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
         {data.title}
        </Text>
        <Text mt={2}>Rs.{data.price}</Text>
        <Flex mt={2} align="center">
          <Box  color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>4.84</b> (190)
          </Text>
        </Flex>
      </Box>
      
    </Center>
  );
}