import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Feat = ({image,text}) => {
  return (
    <Box py={5}>
      <Flex alignItems={'center'} gap={5} py={2}>
        <Image src={image} />
        <Text fontSize={12} width={100} fontWeight={600}>
         {text}
        </Text>
      </Flex>
      <Text fontSize={12}>
        When you add work to your <br />
        Slate calender we automatically <br />
        calculate useful insight
      </Text>
    </Box>
  );
};

export default Feat;
