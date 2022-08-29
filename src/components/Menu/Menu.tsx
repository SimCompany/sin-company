import { Box, Flex, HStack, Text } from "@chakra-ui/react";




export default function Menu() {


  return (
    <Flex justifyContent='space-between' w='100%' maxW='80%' mx='10%'>
      <Box>
        LOGO
      </Box>
      <HStack spacing='8'>
        <Text>
          primeiro
        </Text>
        <Text>
          segundo
        </Text>
        <Text>
          terceiro
        </Text>
      </HStack>
    </Flex>
  )
}