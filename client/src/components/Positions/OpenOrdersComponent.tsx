import * as React from 'react'
import { useState } from 'react'
import { Box, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Stack, Switch, TableContainer, Table, Thead, Tr, Th, Tbody } from '@chakra-ui/react'

export default function OpenOrdersComponent() {
  return (
    <TabPanel>
      <TableContainer>
        <Table size='sm' color='gray.400' variant='unstyled' w='full'>
          <Thead>
            <Tr>
              <Th textTransform='none' fontWeight='light'>Time</Th>
              <Th textTransform='none' fontWeight='light'>Market & Side</Th>
              <Th textTransform='none' fontWeight='light'>Operation & Type</Th>
              <Th textTransform='none' fontWeight='light'>Price</Th>
              <Th textTransform='none' fontWeight='light'>Amount</Th>
              <Th textTransform='none' fontWeight='light'>Collateral</Th>
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