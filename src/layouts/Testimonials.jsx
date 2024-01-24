import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import Testimony from "../components/Testimony";

const Testimonials = () => {
  return (
    <Box py={10}>
      <Heading textAlign={"center"} fontSize={50} fontWeight={500}>
        Testimonials
      </Heading>
      <Box pt={10}>
        <Flex gap={10} flexWrap={"wrap"} justifyContent={"center"} py={5}>
          <Testimony name={"Claire Bell"} image={"/per (1).png"} />
          <Testimony name={"Fransisco Lane"} image={"/per (2).png"} />
        </Flex>
        <Flex gap={10} flexWrap={"wrap"} justifyContent={"center"} py={5}>
          <Testimony name={"Ralph Fisher"} image={"/per (3).png"} />
          <Testimony name={"Jorge Murphy"} image={"/per (4).png"} />
        </Flex>
      </Box>
    </Box>
  );
};

export default Testimonials;
