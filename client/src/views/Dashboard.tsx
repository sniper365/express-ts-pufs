import * as React from 'react'
import { useEffect } from 'react';
import { Box, Button, Grid, Heading, SimpleGrid, Stack, Text, Card, CardBody, Divider, CardFooter, Image, ButtonGroup, Link } from '@chakra-ui/react'
import { Slide, Fade, Zoom } from "react-awesome-reveal";
import boxes from '../constants/home_boxes.json'
import boxes2 from '../constants/home_boxes2.json'
import boxes3 from '../constants/home_boxes3.json'

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://bitoro-perpetual-react.vercel.app'
console.log('url is prod or dev', url)

const Dashboard = () => {
  console.log('url of env::')
  const name = 'Hello Bitoro'
  useEffect(() => {
    const fetchValue = async () => {
      const data = await fetch(`${url}/home`)
      console.log(':::res', data)
    }
    const fetchGreetings = async () => {
      const greetings = await fetch(`${url}/greetings`)
      const json = await greetings.json();
      console.log('return json value::', json)
      return json;
    }
    fetchValue()
      .catch(console.error)
    fetchGreetings()
      .catch(console.error)
  }, [])


  return (
    <Stack gap='16'>
      <SimpleGrid columns={[1, 2, 2, 2]} pt={[32, 40, 40, 40]}>
        <Fade direction="up">
          <Box p='2'>
            <Text pb={[4, 8, 8, 8]}>
              DECENTRALIZED SELF-CUSTODIAL LEVERAGED TRADING
            </Text>
            <Heading as='h2' pb={[4, 8, 8, 8]}>
              Built with the institutional trader in mind
            </Heading>
            <Text pb={[4, 8, 8, 8]}>
              The world's most powerful and cost-efficient platform for trading perpetuals. Trade directly from your wallet or custodian in a secure, private and decentralized environment.
            </Text>
            <Button>
              <Link href="/trade" _hover={{ textDecoration: 'none' }}>
                Start Trading
              </Link>
            </Button>
          </Box>
        </Fade>
      </SimpleGrid>
      <Slide direction="up">
        <Heading as='h3' textAlign='center'>
          Fully Optimized Trading
        </Heading>
      </Slide>
      <SimpleGrid columns={[1, 2, 2, 3]}>
        <Fade direction="up" cascade damping={0.3} triggerOnce>
          {boxes.map(({ id, icon, title, description }) =>
            <Card key={id} maxW='sm' m='4' bg='bitoro.900' bgGradient="inherit">
              <CardBody>
                <Image
                  src={`/${icon}`}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='4' color='bitoro.100'>
                  <Heading size='md'>{title}</Heading>
                  <Text>
                    {description}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          )}
        </Fade>
      </SimpleGrid>
      <Slide direction="up">
        <Heading as='h3' textAlign='center'>
          Cutting-edge technology
        </Heading>
      </Slide>
      <SimpleGrid columns={[1, 2, 2, 2]} alignItems='center' gap='4'>
        <Slide direction="left">
          <Stack textAlign='center' alignItems='center'>
            <Heading as='h4'>Optimized Trading Cost</Heading>
            <Text textAlign='center' maxW='sm' alignItems='center'>
              MUX selects the most suitable liquidity route and minimizes the composite cost for traders while meeting the needs of opening positions.
            </Text>
          </Stack>
          <Stack alignItems='center'>
            <Image
              src={`/brandmark-design5.svg`}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              width={300}
            />
          </Stack>
        </Slide>
      </SimpleGrid>
      <SimpleGrid columns={[1, 2, 2, 2]} alignItems='center'  gap='4'>
        <Slide direction="right">
          <Stack textAlign='center' alignItems='center'>
            <Heading as='h4'>Smart position routing</Heading>
            <Text textAlign='center' maxW='sm' alignItems='center'>
              MUX selects the most suitable liquidity route and minimizes the composite cost for traders while meeting the needs of opening positions.
            </Text>
          </Stack>
          <Stack alignItems='center'>
            <Image
              src={`/brandmark-design4.svg`}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              width={300}
            />
          </Stack>
        </Slide>
      </SimpleGrid>
      <SimpleGrid columns={[1, 2, 2, 2]} alignItems='center' gap='4'>
        <Slide direction="left">
          <Stack textAlign='center' alignItems='center'>
            <Heading as='h4'>Levarge Boosting</Heading>
            <Text textAlign='center' maxW='sm' alignItems='center'>
              MUX selects the most suitable liquidity route and minimizes the composite cost for traders while meeting the needs of opening positions.
            </Text>
          </Stack>
          <Stack alignItems='center'>
            <Image
              src={`/brandmark-design3.svg`}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
              width={300}
            />
          </Stack>
        </Slide>
      </SimpleGrid>
      <SimpleGrid columns={[1, 2, 2, 3]} gap='16'>
        <Zoom direction="up" cascade damping={0.3} triggerOnce>
          {boxes3.map(({ id, icon, title, description }) =>
            <Card key={id} maxW='xs' rounded='2xl' margin='auto' borderColor='bitoro.500' borderWidth='1px' _hover={{ borderColor: 'bitoro.300' }}>
              <CardBody>
                <Image
                  src={`/${icon}`}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  height={300}
                />
                <Stack mt='6' spacing='4' color='bitoro.100' textAlign='center'>
                  <Heading size='md'>{title}</Heading>
                  <Text>
                    {description}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          )}
        </Zoom>
      </SimpleGrid>
    </Stack>
  )
}

export default Dashboard