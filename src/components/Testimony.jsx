import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Testimony = ({name,image}) => {
  return (
    <Box border={"2px solid #fff"} p={"30px"} width={"350px"} borderRadius={10}>
      <Flex gap={5}>
        <Image src={image} />
        <Box>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={12}>Designer</Text>
        </Box>
      </Flex>
      <Text pt={5} fontSize={12}>
        Slate helps you see how many more days you need to work to reach your
        financial goal for the month and year. Slate helps you see how many more
        days you need to work to reach your financial goal for the month and
        year.your financial goal for the month and year.
      </Text>
    </Box>
  );
};

export default Testimony;
