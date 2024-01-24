import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { HambergerMenu } from "iconsax-react";

const Header = ({onClick}) => {
  return (
    <Flex
      className="col"
      justifyContent={"space-between"}
      pos={"fixed"}
      zIndex={9}
      left={0}
      backdropFilter={"blur(10px)"}
      top={0}
      px={{lg : 20, md : 20, sm : 10, base : 5}}
      py={3}
      right={0}
      alignItems={"center"}
    >
      <Logo />
      <Nav />
      <Button
        height={"32px"}
        display={{lg : "block",md : "block", sm : "none", base : "none"}}
        fontSize={12}
        px={5}
        _hover={"none"}
        border={"1.3px solid #fff"}
        bg={"none"}
        borderRadius={0}
        color={"#fff"}
      >
        Login
      </Button>
      <Box cursor={"pointer"} onClick={onClick} display={{lg : "none", md : "none", sm : "block",base : "block"}}><HambergerMenu size={40} /></Box>
    </Flex>
  );
};

export default Header;
