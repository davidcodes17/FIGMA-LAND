import { Box, Button, Flex, IconButton, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from '../components/Logo'
import { CloseCircle } from 'iconsax-react'

const NavContent = ({onClick}) => {
  return (
    <Box p={10}>
        <Flex justifyContent={'space-between'}>
            <Logo />
            <IconButton icon={<CloseCircle />} onClick={onClick}  borderRadius={40}/>
        </Flex>
        <Box lineHeight={"40px"} pt={10}>
            <Text fontSize={20}>Home</Text>
            <Text fontSize={20}>Product</Text>
            <Text fontSize={20}>About</Text>
            <Text fontSize={20}>Contact</Text>
        </Box>
        <Button
        // my={5}
        height={"32px"}
        display={{lg : "block",md : "block", sm : "none", base : "none"}}
        fontSize={12}
        px={5}
        _hover={"none"}
        border={"1.3px solid #fff"}
        bg={"none"}
        borderRadius={0}
        zIndex={999999999999}
        color={"#fff"}
      >
        Login
      </Button>
    </Box>
  )
}

export default NavContent