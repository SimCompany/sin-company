import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";




export default function Menu() {


  return (
    <Flex justifyContent='space-between' w='100%' maxW='80%' mx='10%'>
      <Box>
        LOGO
      </Box>
      <HStack spacing='8'>
        <Link>
          primeiro
        </Link>
        <Link>
          segundo
        </Link>
        <Link>
          terceiro
        </Link>
      </HStack>
    </Flex>
  )
}