import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Card";

const Content = () => {
  return (
    <Box py={10} textAlign={"center"}>
      <Box>
        <Heading py={5} fontSize={50} fontWeight={500}>Contents</Heading>
        <Text fontSize={12}>
          We focus on ergonomics and meeting you where you work. <br />
          It's only a keystone away.
        </Text>
      </Box>
      <Box>
        <Flex justifyContent={"center"} flexWrap={"wrap"} gap={20}>
          <Card image={"/board.png"} text={"Work"} />
          <Card image={"/board.png"} text={"Design with Real Data"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Content;
