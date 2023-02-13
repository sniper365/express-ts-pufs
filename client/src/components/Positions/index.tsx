import * as React from 'react'
import { useState } from 'react'
import { Box, Button, Text, Tabs, TabList, Tab, TabPanels, Flex, Stack, HStack, Switch, Select, Menu, MenuButton, MenuList, MenuItem, MenuItemOption } from '@chakra-ui/react'
import { ChevronDownIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'
// import {
//   AsyncCreatableSelect,
//   AsyncSelect,
//   CreatableSelect,
//   Select,
// } from "chakra-react-select";
import PositionsComponent from './PositionsComponent'
import OpenOrdersComponent from './OpenOrdersComponent'
import TradesComponent from './TradesComponent'


export const colorOptions = [
  { value: "blue", label: "Blue" },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red" },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" },
  { value: "green", label: "Green" }
];

export default function Positions() {
  const [switchLabel, setSwitchLabel] = useState('Label Positions')
  return (
    <Box w='full' h='300px'>
      <Tabs variant='unstyled'>
        <Flex justify='space-between' color='gray.500'>
          <TabList>
            <Tab _hover={{ color: 'white' }} _selected={{ color: 'white' }} fontSize={['xs', 'sm']} onClick={() => setSwitchLabel('Label Positions')}>Positions</Tab>
            <Tab _hover={{ color: 'white' }} _selected={{ color: 'white' }} fontSize={['xs', 'sm']} onClick={() => setSwitchLabel('Label Orders')}>Open Orders</Tab>
            <Tab _hover={{ color: 'white' }} _selected={{ color: 'white' }} fontSize={['xs', 'sm']} onClick={() => setSwitchLabel('Label History')}>Trades</Tab>
          </TabList>
          <Stack p='2' align='center' direction='row' gap='1'>
            {switchLabel == 'Label History' ?
              <Flex justify='start' gap='2'>
                <HStack _hover={{ color: 'white' }} cursor='pointer'>
                  <ArrowDownTrayIcon width={20} />
                  <Text textAlign='right' color='inherit' fontSize={['xs', 'sm']} _hover={{ color: 'white' }}>{'Save as CSV'}</Text> |
                </HStack>
                <Text textAlign='right' color='inherit' fontSize={['xs', 'sm']} >{switchLabel}</Text>
              </Flex>
              :
              <Text textAlign='right' color='inherit' fontSize={['xs', 'sm']}>{switchLabel}</Text>
            }
            <Switch size='sm' defaultChecked={true} />
          </Stack>
        </Flex>
        {switchLabel == 'Label History' &&
          <HStack pl='4' gap='4'>
            <Select placeholder='Period: 1 week' w='160px' size='sm' rounded='md'>
              <option value='1d'>1 day</option>
              <option value='1m'>1 month</option>
              <option value='3m'>3 months</option>
            </Select>
            <Select placeholder='Market: All' w='160px' size='sm' rounded='md'>
              <option value='eth'>ETH</option>
              <option value='btc'>BTC</option>
              <option value='matic'>MATIC</option>
              <option value='bnb'>BNB</option>
              <option value='uni'>UNI</option>
            </Select>
            <Select placeholder='Type: All' w='160px' size='sm' rounded='md'>
              <option value='pnl'>PNL</option>
            </Select>
          </HStack>
        }
        <TabPanels >
          <PositionsComponent />
          <OpenOrdersComponent />
          <TradesComponent />
        </TabPanels>
      </Tabs>
    </Box>
  )
}