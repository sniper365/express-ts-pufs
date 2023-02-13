import * as React from 'react'
import { useState } from 'react'
import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Stack, Switch, TableContainer, Table, Thead, Tr, Th, Tbody, Tooltip } from '@chakra-ui/react'

export default function PositionsComponent() {
  const [switchLabel, setSwitchLabel] = useState('Label Positions')
  return (
    <TabPanel>
      <TableContainer>
        <Table size='sm' color='gray.400' variant='unstyled' w='full'>
          <Thead>
            <Tr>
              <Th textTransform='none' fontWeight='light'>Market</Th>
              <Th textTransform='none' fontWeight='light'>Size</Th>
              <Th textTransform='none' fontWeight='light'>
                <Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <Tooltip label="Net Value = Collateral + Unrealized PNL" fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Net Value
                  </Tooltip>
                </Text>
              </Th>
              <Th textTransform='none' fontWeight='light'>Collateral</Th>
              <Th textTransform='none' fontWeight='light'>Entry Price</Th>
              <Th textTransform='none' fontWeight='light'>Mark Price</Th>
              <Th textTransform='none' fontWeight='light'>Liq. Price</Th>
              <Th textTransform='none' fontWeight='light'>PNL & ROE</Th>
              <Th textTransform='none' fontWeight='light'>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  )
}