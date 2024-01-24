import { Box, Button, Flex, Grid, Image } from "@chakra-ui/react";
import React from "react";

const GalleryImages = () => {
  return (
    <Box>
      <Grid
        gridTemplateColumns={{
          lg: "1fr 1fr 1fr 1fr",
          md: "1fr 1fr 1fr 1fr",
          sm: "1fr 1fr",
          base: "1fr",
        }}
        gridGap={5}
        mx={100}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image
          src="/image (2).png"
          borderRadius={10}
          width={{ lg: "80%", md: "80%", sm: "80%", base: "100%" }}
        />
        <Image
          src="/image (3).png"
          borderRadius={10}
          width={{ lg: "80%", md: "80%", sm: "80%", base: "100%" }}
        />
        <Image
          src="/image (4).png"
          borderRadius={10}
          width={{ lg: "80%", md: "80%", sm: "80%", base: "100%" }}
        />
        <Image
          src="/image (5).png"
          borderRadius={10}
          width={{ lg: "80%", md: "80%", sm: "80%", base: "100%" }}
        />
      </Grid>
      <Grid
        gridTemplateColumns={{
          lg: "2fr 2fr 2fr",
          md: "1fr 1fr 1fr",
          sm: "1fr 1fr",
          base: "1fr",
        }}
        gridGap={5}
        mx={100}
        justifyContent={"center"}
        py={10}
      >
        <Image
          src="/image (7).png"
          borderRadius={10}
          width={{ lg: "100%", md: "80%", sm: "80%", base: "100%" }}
        />
        <Image
          src="/image (1).png"
          borderRadius={10}
          width={{ lg: "60%", md: "80%", sm: "80%", base: "100%" }}
        />
        <Image
          src="/image (6).png"
          borderRadius={10}
          width={{ lg: "100%", md: "80%", sm: "80%", base: "100%" }}
        />
      </Grid>
      <Flex justifyContent={"center"}>
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
          See More
        </Button>
      </Flex>
    </Box>
  );
};

export default GalleryImages;
