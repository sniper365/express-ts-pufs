import * as React from "react";
import { Fragment, useState, useEffect } from "react";
import { Box, Button, Flex, Text, Image, Input } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
import { Dialog, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  QuestionMarkCircleIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";

import coinchiliCurrencies from "../../constants/tokens.json";
import Token from "../../types/Token";

type TokensListModalProps = {
  token: Token;
  onChangeToken: (token: Token) => void;
  balance: string;
  isTokenA?: boolean;
  minimumTranslation?: string;
};

const TokensListModal = ({
  token,
  onChangeToken,
  isTokenA,
  balance,
  minimumTranslation
}: TokensListModalProps) => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  // const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("")
  const [currencies, setCurrencies] = useState(coinchiliCurrencies)

  const selectToken = (token: Token) => {
    onChangeToken(token);
    // setIsOpen(false);
  };

  const searchToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    let filter = coinchiliCurrencies.filter(currency => currency?.ticker.includes(searchTerm))
    setCurrencies(filter)
  }, [searchTerm])

  return (
    <>
      <Flex>
        <Button
          // onClick={() => setIsOpen(true)}
          onClick={onOpen}
          p='2' bg='inherit' flex={[1]} alignItems='center' gap='1' _hover={{ background: 'none' }} _focus={{ background: 'none' }}
        >
          {token?.image ? (
            <Image
              h={5}
              w={5}
              rounded={'full'}
              src={token?.image}
              alt=""
            />
          ) : (
            <QuestionMarkCircleIcon className="h-5 inline" />
          )}
          <Text className="font-bold mx-2">
            {token.ticker ? token.ticker.toUpperCase() : "Select token"}
          </Text>
          <Box w='10' h='5'>
            <ChevronDownIcon />
          </Box>
        </Button>
        {/* {isTokenA &&
          <p className="text-gray-600  text-sm font-medium">
            {minimumTranslation} : {balance}
          </p>
        } */}
      </Flex>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        {/* <ModalOverlay /> */}
        <ModalContent bg='bitoro.900'>
          <ModalHeader>
            <Text as='h3'>
              Select a Token
            </Text>
            <Flex className="relative">
              <Flex position='absolute' left={0} alignItems='center' pl='3' pointerEvents='none' insetY={0} >
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </Flex>
              <Input onChange={searchToken} type="search" id="default-search" className="block p-1 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search tokens..." required />
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody p='6'>
            <Flex overflowY='auto' scrollBehavior='smooth' flexDir='column' gap='2'>
              {currencies.map((token, index) => (
                <Button
                  key={index}
                  w='full'
                  h='full'
                  borderColor={'whiteAlpha.200'}
                  _hover={{ background: 'none' }}
                  _focus={{ background: 'none' }}
                  onClick={() => {selectToken(token); onClose()}}
                >
                  <Flex justify='space-between' w='full'>
                    <Flex justify='start' w='full'>
                      {token?.image ?
                        <Image
                          src={token?.image}
                          alt="token_logo"
                          bg='inherit'
                        /> : (
                          <Box h='5'>
                            <QuestionMarkCircleIcon />
                          </Box>
                        )
                      }
                      <Text ml='3' color='inherit' fontWeight='normal'>
                        {token.ticker.toUpperCase()}
                      </Text>
                    </Flex>
                    <Text color='inherit' fontWeight='normal' fontSize='xs' >
                      {'Balance: '}
                    </Text>
                  </Flex>
                </Button>
              ))}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TokensListModal;
