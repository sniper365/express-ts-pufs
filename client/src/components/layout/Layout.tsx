import * as React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Flex, Link, SimpleGrid, Text, Image, Box, Show } from '@chakra-ui/react'
import { Disclosure } from "@headlessui/react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Head, MetaProps } from './Head'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
  customMeta?: MetaProps
}

const navigation = [
  { name: "Docs", to: "/docs" },
  { name: "Community", to: "/aboutus" }
];

export const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  const history = useHistory()
  return (
    <>
      {/* <Head customMeta={customMeta} /> */}
      <Flex as="header" w='100%' left="50%" transform="translateX(-50%)" maxWidth="container.xl" backdropFilter='auto' backdropBlur='8px' position='fixed' zIndex='20' alignItems={'center'} justifyContent='space-between'>
        <Disclosure as="nav" style={{ width: '100%' }}>
          {({ open }) => (
            <>
              <Show breakpoint='(max-width: 426px)' >
                {/* Mobile menu button*/}
                <Flex alignItems={'center'} justifyContent='space-between' p='2' >
                  <Link href="/">
                    <Image
                      boxSize='100px'
                      objectFit='scale-down'
                      src="/logo.png"
                      alt="" />
                  </Link>
                  <Flex alignItems={'baseline'} gap='2'>
                    {history.location.pathname !== '/trade' &&
                      <Flex py={[4, null, null, 0]} alignItems="center">
                        <Link href="/trade" px="4" py="2" rounded='md' isExternal _hover={{ textDecoration: 'none' }}>
                          Lanuch App
                        </Link>
                      </Flex>
                    }
                    <Box textAlign={'right'}>
                      <Disclosure.Button >
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" width={30} />
                        ) : (
                          <Bars3BottomRightIcon className="block h-6 w-6" aria-hidden="true" width={30} />
                        )}
                      </Disclosure.Button>
                    </Box>
                  </Flex>
                </Flex>
              </Show>

              <Container maxWidth="container.xl" backdropBlur="md">
                <Flex alignItems={'center'} justifyContent='space-between'>
                  <Show breakpoint='(min-width: 768px)'>
                    <Link href="/">
                      <Image
                        boxSize='100px'
                        objectFit='scale-down'
                        src="/logo.png"
                        alt="" />
                    </Link>
                    {history.location.pathname !== '/trade' &&
                      <Flex gap={'8'} alignItems='center'>
                        <Flex textAlign={'right'} p='4' gap='8'>
                          {navigation.map((item) => (
                            <Link href={item.to} key={item.name} role="button" _hover={{ textDecoration: 'none' }}>
                              {item.name}
                            </Link>
                          ))}
                        </Flex>
                        <Flex
                          // order={[-1, null, null, 2]}
                          alignItems={'center'}
                          justifyContent={['flex-end', null, null, 'flex-end']}
                        >
                          <Flex py={[4, null, null, 0]} alignItems="center">
                            <Link href="/trade" px="4" py="2" bg='bitoro.700' rounded='sm' isExternal _hover={{ textDecoration: 'none' }}>
                              Lanuch App
                            </Link>
                          </Flex>
                        </Flex>
                      </Flex>
                    }
                  </Show>
                </Flex>
              </Container>

              {/* Mobile */}
              <Show breakpoint='(max-width: 426px)'>
                <Disclosure.Panel>
                  <Flex textAlign={'right'} flexDir='column' px='4'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.to} role="button">
                        <Disclosure.Button className="block">
                          {item.name}
                        </Disclosure.Button>
                      </Link>
                    ))}
                  </Flex>
                </Disclosure.Panel>
              </Show>
            </>
          )}
        </Disclosure>
      </Flex>
      <main>
        <Container maxWidth="container.xl">{children}</Container>
      </main>
      <footer>
        <Container mt="8" py="8" maxWidth="container.xl">
          {history.location.pathname !== '/trade' &&
            <Footer />
          }
        </Container>
      </footer>
    </>
  )
}
