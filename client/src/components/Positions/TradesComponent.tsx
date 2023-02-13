import * as React from 'react'
import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Stack, Switch, TableContainer, Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react'

export default function TradesComponent() {
  return (
    <TabPanel>
      <TableContainer>
        <Table size='sm' color='gray.400' variant='unstyled' w='full'>
          <Thead>
            <Tr>
              <Th textTransform='none' fontWeight='light'>Time</Th>
              <Th textTransform='none' fontWeight='light'>Market</Th>
              <Th textTransform='none' fontWeight='light'>Operation</Th>
              <Th textTransform='none' fontWeight='light'>Side</Th>
              <Th textTransform='none' fontWeight='light'>Price</Th>
              <Th textTransform='none' fontWeight='light'>Amount</Th>
              <Th textTransform='none' fontWeight='light'>Fee</Th>
              <Th textTransform='none' fontWeight='light'>Realized PNL & ROE</Th>
            </Tr>
          </Thead>
          <Tbody>
          </Tbody>
        </Table>
      </TableContainer>
    </TabPanel>
  )
}