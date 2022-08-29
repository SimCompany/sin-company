import { Text, TextProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface H1Props extends TextProps {
  children: ReactNode
}



export default function H2({ children, ...rest }: H1Props) {

  return (
    <Text as='h2' lineHeight='1.25' fontSize='4xl' fontWeight='bold' color='Green.300' {...rest}>
      {children}
    </Text>
  )
}