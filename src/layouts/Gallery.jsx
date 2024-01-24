import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import GalleryImages from "./GalleryImages";

const Gallery = () => {
  return (
    <Box py={20}>
      <Box textAlign={"center"}>
        <Heading fontSize={50} fontWeight={500}>Gallery</Heading>
        <Text fontSize={12} py={5}>
          We focus on ergonomics and meeting you where you work. <br />
          It's only a keystone away.
        </Text>
        <GalleryImages />
      </Box>
    </Box>
  );
};

export default Gallery;
