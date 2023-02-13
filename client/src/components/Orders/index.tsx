import * as React from "react";
import { useState } from 'react'
import { ArrowDownIcon } from "@heroicons/react/24/solid";
import TokenInput from "./TokenInput";
import Slider from "./Slider";
import { Box, Button, TableContainer, Table, Tbody, Tr, Td, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Stack, Tooltip } from '@chakra-ui/react'
import type Token from "../../types/Token";
import tokens from '../../constants/tokens.json'
import { Availability } from "./tooltips/Availability";
import { Collateral } from "./tooltips/Collateral";
import { Fees } from "./tooltips/Fees";
import { LiqPrice } from "./tooltips/LiqPrice";
import { Liquidity } from "./tooltips/Liquidity";
import { Profits } from "./tooltips/Profits";
import { Spread } from "./tooltips/Spread";

export default function Orders() {
  const [tokenA, setTokenA] = useState<Token>(tokens[1] as Token);
  const [tokenB, setTokenB] = useState<Token>(tokens[1] as Token);
  const [inputA, setInputA] = useState('')
  const [inputB, setInputB] = useState('')
  const [isLong, setIsLong] = useState(true)
  const [orderColor, setOrderColor] = useState('blue')
  const [typingTimeout, setTypingTimeout] =
    useState<ReturnType<typeof setTimeout>>();

  const onChangeTokenA = async (token: Token) => {
    setTokenA(token);
  };

  const onChangeTokenB = async (token: Token) => {
    setTokenB(token);
  };

  const onChangeInputA = async (input: string) => {
    if (input.match(/^[0-9]*[.,]?[0-9]*$/)) {
      setInputA(input)
      if (typingTimeout) clearTimeout(typingTimeout);
    }
  };
  const onChangeInputB = async (input: string) => {
    if (input.match(/^[0-9]*[.,]?[0-9]*$/)) {
      setInputB(input)
      if (typingTimeout) clearTimeout(typingTimeout);
    }
  };

  const onChangeOrder = (isLong: boolean) => {
    setIsLong(isLong)
    if (isLong) {
      setOrderColor('green')
    } else {
      setOrderColor('orange')
    }
  }

  const onChangeSliderValue = (v: any) => {
    setInputB((Number(inputA) * v).toString())
  }

  return (
    <Box p='2' rounded='md'>
      <Tabs variant='solid-rounded' rounded='lg' colorScheme='bitoro' bg='bitoro.900' mb='2'>
        <TabList>
          <Tab w='50%' rounded='lg' onClick={() => onChangeOrder(true)}>Long/Buy</Tab>
          <Tab w='50%' rounded='lg' onClick={() => onChangeOrder(false)}>Short/Sell</Tab>
        </TabList>
      </Tabs>
      <Stack position='relative'>
        <TokenInput
          balance={'--'}
          onChangeToken={onChangeTokenA}
          input={inputA}
          isTokenA
          isLong={isLong}
          token={tokenA}
          onChangeInput={onChangeInputA}
          minimumTranslation={'MiniAmount'}
          headline={'Pay'}
        />
        <Flex mt='0!important' position='absolute' zIndex='3' top='50%' left='50%' transform='translate(-50%, -50%)' width='28px' height='28px' lineHeight='38px' justifyContent='center' textAlign='center' bg='bitoro.700' borderRadius='md' alignItems='center'>
          <ArrowDownIcon width={20} />
        </Flex>
        <TokenInput
          balance={'--'}
          onChangeToken={onChangeTokenB}
          isLong={isLong}
          input={inputB}
          token={tokenB}
          onChangeInput={onChangeInputB}
          minimumTranslation={'MiniAmount'}
          headline={'Receive'}
        />
      </Stack>
      <Slider colorScheme={orderColor} onChangeSliderValue={onChangeSliderValue} />
      <Button mt='6' w='full' bg='bitoro.800' colorScheme='bitoro'>Enter an amount</Button>
      <TableContainer mt='4'>
        <Table size='sm' color='gray.400' variant='unstyled' w='full'>
          <Tbody>
            <Tr>
              <Td px='0'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label={Availability()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Available Liquidity
                  </Tooltip>
                </Text>
              </Td>
              <Td px='0' isNumeric textAlign='right'>25,232.23</Td>
            </Tr>
            <Tr>
              <Td px='0'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label={Liquidity()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Liquidity Source
                  </Tooltip>
                </Text>
              </Td>
              <Td px='0' isNumeric textAlign='right'>Bitoro</Td>
            </Tr>
            <Tr>
              <Td px='0'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label={Profits()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Profits In
                  </Tooltip>
                </Text>
              </Td>
              <Td px='0' isNumeric textAlign='right'></Td>
            </Tr>
            <Tr>
              <Td px='0'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label={LiqPrice()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Liq. Price
                  </Tooltip>
                </Text>
              </Td>
              <Td px='0' isNumeric textAlign='right'>--</Td>
            </Tr>
            <Tr>
              <Td px='0'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label={Collateral()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Collateral
                  </Tooltip>
                </Text>
              </Td>
              <Td px='0' isNumeric textAlign='right'>--</Td>
            </Tr>
            <Tr>
              <Td px='0'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label={Fees()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Fees
                  </Tooltip>
                </Text>
              </Td>
              <Td px='0' isNumeric textAlign='right'>--</Td>
            </Tr>
            <Tr>
              <Td px='0'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label={Spread()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Spread
                  </Tooltip>
                </Text>
              </Td>
              <Td px='0' isNumeric textAlign='right'>--</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}