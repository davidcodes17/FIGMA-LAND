import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Part = () => {
  return (
    <Box px={10}>
      <Flex gap={10} py={10} justifyContent={'center'} flexWrap={"wrap"}>
        <Image src="/logos_apple-app-store.svg" width={"50px"} />
        <Image src="/logos_apiary.svg" width={"50px"} />
        <Image src="/logos_android-icon.svg" width={"50px"} />
        <Image src="/logos_basecamp.svg" width={"50px"} />
        <Image src="/logos_airbnb.svg" width={"50px"} />
        <Image src="/logos_ibm.svg" width={"100px"} />
      </Flex>
    </Box>
  );
};

export default Part;
