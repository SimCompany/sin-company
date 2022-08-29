import { Box, Button, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import Image from 'next/image'
import FormElement from "../components/Form/Form";
import Background from './../img/index/fundo01.jpg'
import Atendente from './../img/index/sistema-atendentes-call-center.png'

import H2 from "../components/Texts/H2";
import ButtonChakra from "../components/Button/Button";

import Phone from './../img/index/aparelho-ip.jpg'
import Modelo from './../img/index/pabx-nuvem.jpg'
import H3 from "../components/Texts/H3";

import { RiInstagramLine } from 'react-icons/ri'
import { TiSocialLinkedinCircular, TiSocialFacebookCircular } from 'react-icons/ti'
import { Icon } from "@chakra-ui/react";


export default function Home() {

  return (
    <main style={{ maxWidth: '1950px', margin: '0 auto' }}>
      <Box
        position='relative'
        zIndex={-1}
      >
        <Image src={Background} />

        <Grid
          gridTemplateColumns='55% 45%'
          w='100%'
          maxW='80%'
          mx='10%'
          position='absolute'
          bottom='0'>
          <Box pt='20'>
            <Text
              fontSize='45'
              color='white'
              lineHeight={1}
              fontWeight='semibold'
            >CONHEÇA O DIFERENCIAL DO</Text>
            <Text
              fontSize='80'
              lineHeight={1}
              color='Green.500'
              my='1'
              fontWeight='semibold'
            >
              PABX EM NUVEM
            </Text>
            <Text
              backgroundColor='Green.500'
              px='2'
              color='white'
              fontWeight='semibold'
              fontSize='28'
            >
              CENTRAL TELEFÔNICA | VÍDEO | CHAT AO VIVO
            </Text>
            <Text color='white' lineHeight={1.5} mt='4'>
              Uma tecnologia de computação onde utiliza a internet
              para armazenar e gerenciar a solução de PABX.
              A tecnologia em nuvem elimina equipamentos e estrutura
              física no local, proporcionando atualizações sem custo e
              funções de PABX de última geração.
            </Text>
          </Box>
          <Box>
            <Image src={Atendente} />
          </Box>
        </Grid>
      </Box>


      <Grid mt='-100' gridTemplateColumns='1fr 1fr' w='100%' maxW='80%' mx='10%' gridColumnGap='5%'>
        <Box>
          <FormElement />
        </Box>
        <Box mt='40'>
          <Text fontSize='4xl' fontWeight='bold' my='10' color='Green.300'>3 motivos para mudar agora para o PABX em nuvem</Text>
          <Box my='2'>
            <Text color='Green.300' fontSize='2xl' fontWeight='bold' my='1' >INVISTA</Text>
            <Text>
              Precisa do novo para a sua empresa, o melhor jeito é investir em
              quem oferece qualidade de verdade ao seu atendimento.
              A SIM Company possui tráfego próprio de terminação de chamadas
              garantindo mais qualidade nas suas ligações.
            </Text>
          </Box>
          <Box my='2'>
            <Text color='Green.300' fontSize='2xl' fontWeight='bold' my='1'>TRANSFORME</Text>
            <Text>
              Potencializa a comunicação da sua empresa com as tecnologias
              VoIP e PABX em nuvem. Com a telefonia em nuvem, o seu negócio
              terá mais do que uma telefonia convencional, um sistema em
              nuvem, que proporcionará inovação, facilidades e mobilidade para
              o seu dia a dia.
            </Text>
          </Box>
          <Box my='2'>
            <Text color='Green.300' fontSize='2xl' fontWeight='bold' my='1'>COMUNIQUE-SE</Text>
            <Text>
              Precisa do novo para a sua empresa, o melhor jeito é investir em
              quem oferece qualidade de verdade ao seu atendimento.
              A SIM Company possui tráfego próprio de terminação de chamadas
              garantindo mais qualidade nas suas ligações.
            </Text>
          </Box>
        </Box>
      </Grid>


      <Grid gridTemplateColumns='1fr 1fr' gridColumnGap='5%' mx='10%' my='15%'>
        <Box alignSelf='center'>
          <H2 my='2'>GANHE APARELHO DE IP + RAMAL</H2>
          <Text>
            Transforma a velha tefonia fixa em uma moderna ferramenta
            de comunicação para sua empresa, transferindo todo o serviço
            de voz para a NUVEM. Customizamos um plano de voz adequado
            a realidade da sua empresa e seu PABX VIRTUAL será GRATUITO!
          </Text>
          <ButtonChakra my='6' w='80%' p='8'>GARANTIR PROMOÇÃO</ButtonChakra>
        </Box>
        <Box>
          <Image src={Phone} />
        </Box>
      </Grid>


      <Box>
        <Grid gridTemplateColumns='1fr 1fr' gridColumnGap='5%' bgColor='Green.300' py='5%'>
          <Box ml='10%'>
            <H2 color='white'>
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


        <Grid gridTemplateColumns='1fr 1fr' gridColumnGap='5%' mt='-13%'>
          <Box ml='10%' mt='15%' alignSelf='center'>
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
          <Box>
            <Image src={Modelo} />
          </Box>
        </Grid>
      </Box>

      <Flex my='10%' mx='10%' flexDir='column' alignItems='center'>
        <H3>CONHEÇA AS 12 VANTAGENS</H3>
        <H3>DOS NOSSOS PLANOS DE PABX EM NUVEM</H3>
        <ButtonChakra mt='6' p='8'>GARANTIR PROMOÇÃO</ButtonChakra>
      </Flex>

      <Grid gridTemplateColumns='1fr 1fr' mx='10%' gridColumnGap='5%'>
        <Box h='350px'>
          <iframe style={{ width: '100%', height: '100%' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7309.026665820644!2d-46.75947564816283!3d-23.657593744676134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce53c6a003d321%3A0xab6c3d1dba73f4ec!2sCondom%C3%ADnio%20Conjunto%20Residencial%20Buena%20Vista!5e0!3m2!1spt-BR!2sbr!4v1661659201239!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
        </Box>
        <Box alignSelf='center'>
          <H3>SOBRE NÓS</H3>
          <Text>Comece a cortar custos desnecessários em sua empresa,
            atualize a maneira que sua empresa se comunica!
            Gerenciamento de ramais com apenas 1 número, gravação
            em nuvem e suporte para videoconferência integrada aos
            melhores apps de chamada.</Text>
        </Box>
      </Grid>

      <Grid bgColor='Blue.800' gridTemplateColumns='1fr 1fr' p='5% 10%' mt='10%'>
        <GridItem>
          <Text color='white'>email@sincompany.com</Text>
          <Text color='white'>(11) 99999-9999</Text>
          <Text color='white'>(11) 99999-9999</Text>

          <Flex>
            <Icon as={TiSocialFacebookCircular} color='white' fontSize='30' />
            <Icon as={RiInstagramLine} mt='0.5' color='white' fontSize='26'/>
            <Icon as={TiSocialLinkedinCircular} color='white' fontSize='30'/>
          </Flex>
        </GridItem>
      </Grid>

    </main >
  )
}


