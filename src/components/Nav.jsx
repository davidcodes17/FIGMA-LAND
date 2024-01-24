import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Nav = () => {
  return (
    <Box display={{lg : "block", md : "block",sm : "none", base : 'none'}}>
        <Flex fontSize={12} gap={20}>
            <Text>Home</Text>
            <Text>Product</Text>
            <Text>About</Text>
            <Text>Contact</Text>
        </Flex>
    </Box>
  )
}

export default Nav