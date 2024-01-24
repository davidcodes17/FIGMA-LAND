import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Feat from "../components/Feat";

const Features = () => {
  return (
    <Box pb={20}>
      <Heading textAlign={"center"} fontWeight={500}>
        FEATURES
      </Heading>
      <Text textAlign={"center"} py={5} fontSize={12}>
        Most calenders are designed for teams. Slate is designed for <br />
        frellancers who want a simple way to plan their schedule
      </Text>
      <Box>
        <Flex
          alignItems={"center"}
          // flexDir={{ lg: "column", md: "column", sm: "row", base: "row" }}
          flexWrap={"wrap"}
          justifyContent={"center"}
          gap={35}
        >
          <Image src="/frm.png" width={"500px"} />
          <Flex justifyContent={'center'}>
            <Box>
              <Feat
                image={"/Vector (1).png"}
                text={"A single source of truth"}
              />
              <Feat image={"/Vector.svg"} text={"Intuative interface"} />
              <Feat image={"/Vector (1).svg"} text={"Or with Rules"} />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Features;
