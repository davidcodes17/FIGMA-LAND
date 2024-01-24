import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Hero = () => {
  return (
    <Box my={{lg :150, md : 150, sm  : 130,base : 100}}>
      <Flex justifyContent={"center"}>
        <Box>
          {/* <Flex justifyContent={'center'}> */}
            <Heading
              fontWeight={600}
              // width={300}
              textAlign={"center"}
              fontSize={{ lg: 65, md: 50, sm: 50, base: 40 }}
            >
              Work at the speed <br /> of thought
            </Heading>
          {/* </Flex> */}
          <Flex justifyContent={'center'}>

          <Text textAlign={"center"} fontSize={{lg : 15,md : 15,sm : 12,base : 10}} py={5}>
            Most calenders are designed for teams. Slate is designed for <br />
            frellancers who want a simple way to plan their schedule
          </Text>
          </Flex>
          <Flex justifyContent={"center"} gap={10} alignItems={"center"}>
            <Button
              py={4}
              px={5}
              fontSize={12}
              borderRadius={0}
              bg={"teal"}
              color={"#fff"}
              _hover={"none"}
            >
              Try for Free
            </Button>
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
              Learn More
            </Button>
          </Flex>
        </Box>
      </Flex>
      <Image src="/hero.png" mt={20} />
    </Box>
  );
};

export default Hero;
