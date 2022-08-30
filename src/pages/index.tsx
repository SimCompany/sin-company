import { Box, Button, Flex, Grid, GridItem, Text, useMediaQuery } from "@chakra-ui/react";
import Image from 'next/image'
import FormElement from "../components/Form/Form";
import Background from './../img/index/fundo01.jpg'
import Mobile from './../img/index/fundo-mobile.jpg'
import Atendente from './../img/index/sistema-atendentes-call-center.png'

import H2 from "../components/Texts/H2";
import ButtonChakra from "../components/Button/Button";

import Phone from './../img/index/aparelho-ip.jpg'
import Modelo from './../img/index/pabx-nuvem.jpg'
import H3 from "../components/Texts/H3";

import { RiInstagramLine } from 'react-icons/ri'
import { TiSocialLinkedinCircular, TiSocialFacebookCircular } from 'react-icons/ti'
import { Icon } from "@chakra-ui/react";
import H4 from "../components/Texts/H4";
import { useEffect } from "react";


export default function Home() {
  const [isLargerThan30Em] = useMediaQuery('(max-width:765px)')

  useEffect(() => {
    console.log(isLargerThan30Em)
  }, [isLargerThan30Em])

  return (
    <main style={{ maxWidth: '1920px', margin: '0 auto' }}>
      <Box
        position='relative'
        zIndex={-1}
      >
        {
          isLargerThan30Em ? <Image src={Mobile} alt='background azul' /> : <Image src={Background} alt='background blue mobile' />
        }


        <Grid
          gridTemplateColumns={{ sm: '1fr', md: '60% 40%', lg: '55% 45%' }}
          w='100%'
          maxW={{ sm: '90%', lg: '80%', xl: '80%', '2xl': '70%' }}
          mx={{ sm: '5%', lg: '10%', xl: '10%', '2xl': '15%', '3xl': '50%' }}
          position='absolute'
          bottom='0'>

          <Box
            pt={{ md: '8', lg: '0%', xl: '4%', '2xl': '0px' }}
            mt={{ base: '0px', '2xl': '40px' }}
            m='auto'
            maxW='93%'>
            <Text
              fontSize={{ base: '5.25vw', sm: '5.25vw', md: '2.5vw', xl: '2.25vw', '2xl': '35px' }}
              color='white'
              lineHeight={1}
              fontWeight='semibold'
              textAlign={{ base: 'center', md: 'start' }}
            >CONHEÇA O DIFERENCIAL DO</Text>
            <Text
              fontSize={{ base: '9vw', sm: '9vw', md: '4.4vw', xl: '4vw', '2xl': '60px' }}
              lineHeight={1}
              color='Green.500'
              my='1'
              fontWeight='semibold'
              textAlign={{ base: 'center', md: 'start' }}
            >
              PABX EM NUVEM
            </Text>
            <Text
              backgroundColor='Green.500'
              px='2'
              color='white'
              fontWeight='semibold'
              fontSize={{ md: '1.5vw', xl: '1.22vw', '2xl': '21.5px' }}
              width={{ md: '98%', xl: '88%', '2xl': '550px' }}
              textAlign='center'
            >
              CENTRAL TELEFÔNICA | VÍDEO | CHAT AO VIVO
            </Text>
            <Text color='white' lineHeight={1.5} mt='4'
              textAlign={{ base: 'center', md: 'start' }}
            >
              Uma tecnologia de computação onde utiliza a internet
              para armazenar e gerenciar a solução de PABX.
              A tecnologia em nuvem elimina equipamentos e estrutura
              física no local, proporcionando atualizações sem custo e
              funções de PABX de última geração.
            </Text>
          </Box>
          <Box
            maxW={{ sm: '80%', md: '100%' }}
            mt={{ base: '0%', sm: '15%', md: '0px' }}
            m='0 auto'
          >
            <Image alt='atendente' src={Atendente} />
          </Box>
        </Grid>
      </Box>


      <Grid
        mt={{ base: '50px', md: '50px', lg: '50px', xl: '-50px', '2xl': '-100px' }}
        gridTemplateColumns={{ sm: '1fr', md: '1fr', lg: '1fr 1fr', xl: '1fr 1fr' }}
        maxW={{ base: '90%', sm: '90%', md: '85%', lg: '80%', xl: '80%', '2xl': '70%' }}
        mx={{ base: '5%', sm: '5%', md: '7.5%', lg: '10%', xl: '11%', '2xl': '16%' }}
        gridColumnGap='10%'>
        <Box>
          <FormElement />
        </Box>
        <Box mt={{ base: '50px', md: '40px', lg: '0', xl: '40' }}>
          <H2 mb='10'>3 motivos para mudar agora para o PABX em nuvem</H2>
          <Box my='2'>
            <H4 >INVISTA</H4>
            <Text>
              Precisa do novo para a sua empresa, o melhor jeito é investir em
              quem oferece qualidade de verdade ao seu atendimento.
              A SIM Company possui tráfego próprio de terminação de chamadas
              garantindo mais qualidade nas suas ligações.
            </Text>
          </Box>
          <Box my='2'>
            <H4 my='1'>TRANSFORME</H4>
            <Text>
              Potencializa a comunicação da sua empresa com as tecnologias
              VoIP e PABX em nuvem. Com a telefonia em nuvem, o seu negócio
              terá mais do que uma telefonia convencional, um sistema em
              nuvem, que proporcionará inovação, facilidades e mobilidade para
              o seu dia a dia.
            </Text>
          </Box>
          <Box my='2'>
            <H4 my='1'>COMUNIQUE-SE</H4>
            <Text>
              Precisa do novo para a sua empresa, o melhor jeito é investir em
              quem oferece qualidade de verdade ao seu atendimento.
              A SIM Company possui tráfego próprio de terminação de chamadas
              garantindo mais qualidade nas suas ligações.
            </Text>
          </Box>
        </Box>
      </Grid>


      <Grid
        templateAreas={{
          base: `
        "foto"
        "text"
        `,
          md: `"text foto"`
        }}
        gridTemplateColumns={{ md: '1fr', lg: '1fr 1fr' }}
        gridColumnGap='5%'
        mx={{ base: '5%', sm: '5%', md: '7%', lg: '10%', '2xl': '15%' }}
        maxW={{ base: '90%', sm: '90%', md: '86%', lg: '80%', '2xl': '70%' }}
        m='auto'
        my='10%'>
        <GridItem alignSelf='center' area='text' mt={{ base: '40px', md: '0px' }}>
          <H2 my='2'>GANHE APARELHO DE IP + RAMAL</H2>
          <Text>
            Transforma a velha tefonia fixa em uma moderna ferramenta
            de comunicação para sua empresa, transferindo todo o serviço
            de voz para a NUVEM. Customizamos um plano de voz adequado
            a realidade da sua empresa e seu PABX VIRTUAL será GRATUITO!
          </Text>
          <ButtonChakra my='6' w={{ base: '100%', lg: '80%' }} p='8'>GARANTIR PROMOÇÃO</ButtonChakra>
        </GridItem>
        <GridItem area='foto'>
          <Image src={Phone} />
        </GridItem>
      </Grid>


      <Box>
        <Grid
          gridTemplateColumns={{ base: '1fr', lg: '1fr 40%' }}
          gridColumnGap='5%'
          bgColor='Green.300'
          py={{ base: '7.5%', md: '5%' }}>
          <Box
            ml={{ base: '5%', md: '7%', lg: '20%', '2xl': '27%' }}
            mr={{ base: '5%', md: '7%', lg: '0%', '2xl': '0%' }}
          >
            <H2 color='white' py={{ base: '3%', md: '2.5%' }}>
              Grave todas as ligações da sua empresa
            </H2>
            <Text color='white'>
              Mais segurança e qualidade de atendimento.<br />
              Saiba o que foi falado ao seu cliente e monitore o
              desenvolvimento de sua equipe. A gravação da ligação
              é um dos recurso presente em todos os planos que você
              ganha sem ter que pagar nada a mais por isso!
            </Text>
          </Box>
        </Grid>


        <Grid
          gridTemplateColumns={{ base: '1fr', lg: '1fr 40%' }}
          gridColumnGap='5%' mt={{ base: '0%', md: '-8%', lg: '-10%' }}>
          <Box
            ml={{ base: '5%', md: '7%', lg: '20%', '2xl': '27%' }}
            mr={{ base: '5%', md: '7%', lg: '0%', '2xl': '0%' }}
            mt={{ base: '8%', md: '10%', lg: '15%' }}
            alignSelf='center'>
            <H2>
              Acesso Remoto
            </H2>
            <Text>
              Comece a cortar custos desnecessários em sua empresa,
              atualize a maneira que sua empresa se comunica!
              Gerenciamento de ramais com apenas 1 número, gravação
              em nuvem e suporte para videoconferência integrada aos
              melhores apps de chamada.
            </Text>
          </Box>
          <Box mt={{ base: '40px', lg: '0' }} mx={{ base: '5%', md: '7%', lg: '0%' }}>
            <Image src={Modelo} />
          </Box>
        </Grid>
      </Box>


      <Flex my='10%' mx='10%' flexDir='column' alignItems='center'>
        <H3 textAlign='center'>CONHEÇA AS 12 VANTAGENS</H3>
        <H3 textAlign='center'>DOS NOSSOS PLANOS DE PABX EM NUVEM</H3>
        <ButtonChakra mt='6' p='8'>GARANTIR PROMOÇÃO</ButtonChakra>
      </Flex>


      <Grid
        gridTemplateColumns={{ md: '1fr', lg: '1fr 1fr' }}
        mx={{ base: '5%', md: '7%', lg: '10%', '2xl': '15%' }}
        gridColumnGap='5%'>
        <Box h='350px'>
          <iframe style={{ width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7309.026665820644!2d-46.75947564816283!3d-23.657593744676134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53c6a003d321%3A0xab6c3d1dba73f4ec!2sCondom%C3%ADnio%20Conjunto%20Residencial%20Buena%20Vista!5e0!3m2!1spt-BR!2sbr!4v1661659201239!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </Box>
        <Box alignSelf='center' mt={{ base: '50px', lg: '0px' }}>
          <H3>SOBRE NÓS</H3>
          <Text>Comece a cortar custos desnecessários em sua empresa,
            atualize a maneira que sua empresa se comunica!
            Gerenciamento de ramais com apenas 1 número, gravação
            em nuvem e suporte para videoconferência integrada aos
            melhores apps de chamada.</Text>
        </Box>
      </Grid>


      <Grid bgColor='Blue.800' gridTemplateColumns='1fr 1fr' p='5% 15%' mt='10%'>
        <GridItem>
          <Text color='white'>email@sincompany.com</Text>
          <Text color='white'>(11) 99999-9999</Text>
          <Text color='white'>(11) 99999-9999</Text>

          <Flex>
            <Icon as={TiSocialFacebookCircular} color='white' fontSize='30' />
            <Icon as={RiInstagramLine} mt='0.5' color='white' fontSize='26' />
            <Icon as={TiSocialLinkedinCircular} color='white' fontSize='30' />
          </Flex>
        </GridItem>
      </Grid>

    </main >
  )
}


