import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Call, Facebook, Instagram, Location, Twitch } from "iconsax-react";
import React from "react";

const Footer = () => {
  return (
    <Box p={{lg : 20, md : 20, sm : 10, base : 5}}>
      <Grid gridTemplateColumns={{lg : "2fr 2fr 2fr 2fr",md : "2fr 2fr", sm : "1fr 1fr", base : "1fr 1fr"}} gridGap={20} alignItems={'center'} justifyContent={'center'}>
        <Box>
          <Text fontSize={{lg : "30px",md : "30px", sm : "20px", base : "20px"}} fontWeight={100} py={3}>
            Figma Land
          </Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Home</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Examples</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Pricing</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Updates</Text>
        </Box>
        <Box>
          <Text fontSize={{lg : "30px",md : "30px", sm : "20px", base : "20px"}} fontWeight={100} py={3}>
            Resources
          </Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Home</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Examples</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Pricing</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Updates</Text>
        </Box>
        <Box>
          <Text fontSize={{lg : "30px",md : "30px", sm : "20px", base : "20px"}} fontWeight={100} py={3}>
            About Figma
          </Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Home</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Examples</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Pricing</Text>
          <Text fontSize={{lg : 25, md : 20, sm : 15, base : 12}} fontWeight={200}>Updates</Text>
        </Box>
        <Box>
          <Flex alignItems={'center'} gap={2}>
            <Location variant="Bold" size={30} color="#fff" />
            <Text fontSize={{lg : 15, md: 15, sm : 12, base : 12}}>7480 Mockingbird Hill</Text>
          </Flex>
          <Flex alignItems={'center'} gap={2} py={5}>
            <Image src="/phone.png" width={4} />
            <Text fontSize={{lg : 15, md: 15, sm : 12, base : 12}}>+234 9015061171</Text>
          </Flex>
          <Flex alignItems={'center'} gap={3} flexWrap={"wrap"}>
            <Facebook size={30} variant="Bold" color="#fff" />
            <Instagram size={30} variant="Bold" color="#fff" />
            <Twitch size={30} variant="Bold" color="#fff" />
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
