import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Ads = () => {
  return (
    <Box
      py={{ lg: "100px", md: "80px", sm: "50px", base: "30px" }}
      my={10}
      bg={"#fff"}
      color={"#000"}
    >
      <Flex
        alignItems={"center"}
        gap={10}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Box p={{ lg: 10, md: 10, sm: 5, base: 5 }}>
          <Text fontSize={{ lg: 50, md: 40, sm: "20px", base: 20 }}>
            OpenType feature <br />
            and Variable fonts
          </Text>
          <Flex display={{lg : "block", md : "block", sm : "flex", base : "flex"}} justifyContent={'center'}>
            <Button
              my={5}
              py={{ lg: 4, md: 4, sm: 2, base: 0 }}
              px={{ lg: 5, md: 5, sm: 3, base: 3 }}
              fontSize={{ lg: 12, md: 12, sm: 10, base: 10 }}
              borderRadius={0}
              bg={"teal"}
              color={"#fff"}
              _hover={"none"}
            >
              Try for Free
            </Button>
          </Flex>
        </Box>
        <Image
          width={{ lg: "35%", md: "35%", sm: "50%", base: "70%" }}
          border={"2px solid #000"}
          borderRadius={20}
          src="/chart.png"
        />
      </Flex>
    </Box>
  );
};

export default Ads;
