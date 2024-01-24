import { Box, Button, Center, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Part from "../components/Part";

const Partners = () => {
  return (
    <Box py={10}>
      <Box>
        <Box textAlign={"center"}>
          <Heading fontSize={50} fontWeight={500}>
            Partners
          </Heading>
          <Text fontSize={12} py={5}>
            We focus on ergronomic and meeting you where you work. <br />
            It's only a keystoke away.
          </Text>
        </Box>
        <Flex justifyContent={'center'}>
          <Button
            py={4}
            px={5}
            fontSize={12}
            borderRadius={0}
            bg={"transparent"}
            border={"1.2px solid #fff"}
            color={"#fff"}
            _hover={"none"}
          >
            All Partners
          </Button>
        </Flex>
      </Box>
        <Part />
    </Box>
  );
};

export default Partners;
