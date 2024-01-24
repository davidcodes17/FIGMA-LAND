import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Card = ({image,text,width,height}) => {
  return (
    <Box textAlign={"center"} bg={"#fff"} m={5} color={"#000"} py={10} borderRadius={40}>
      <Text fontSize={20} fontWeight={600}>{text}</Text>
      <Flex justifyContent={'center'}>
        <Text width={210} py={10} fontSize={12}>
          Ever wondered if you're too reliant on a client for work? Slate helps
          you identify
        </Text>
      </Flex>
      <Flex justifyContent={"center"}>
        <Button
          textAlign={"center"}
          borderRadius={0}
          fontSize={12}
          bg={"teal"}
          color={"#fff"}
          width={"150px"}
          fontWeight={400}
        //   boxShadow={"0px 0px 100px teal"}
          _hover={"none"}
        >
          Sign Up
        </Button>
      </Flex>
      <Flex justifyContent={"center"}>
        <Image src={image} width={width} height={height} />
      </Flex>
    </Box>
  );
};

export default Card;
