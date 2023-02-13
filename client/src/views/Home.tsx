import * as React from 'react'

import {
  Grid,
  GridItem,
  Box,
  Text,
  Link,
  useToast,
  Flex,
} from '@chakra-ui/react'
import { ethers, providers } from 'ethers'
import { useReducer } from 'react'
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useProvider,
  useWaitForTransaction,
} from 'wagmi'
import { YourContract as LOCAL_CONTRACT_ADDRESS } from '../artifacts/contracts/contractAddress'
import YourContract from '../artifacts/contracts/YourContract.sol/YourContract.json'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useCheckLocalChain } from '../hooks/useCheckLocalChain'
import { useIsMounted } from '../hooks/useIsMounted'
import { YourContract as YourContractType } from '../types/typechain'

import Orders from '../components/Orders'
import Positions from '../components/Positions'
import TradingView from '../components/TradingView'

/**
 * Constants & Helpers
 */

const localProvider = new providers.StaticJsonRpcProvider(
  'http://localhost:8545'
)
const GOERLI_CONTRACT_ADDRESS = '0x3B73833638556f10ceB1b49A18a27154e3828303'

/**
 * Prop Types
 */
type StateType = {
  greeting: string
  inputValue: string
}
type ActionType =
  | {
    type: 'SET_GREETING'
    greeting: StateType['greeting']
  }
  | {
    type: 'SET_INPUT_VALUE'
    inputValue: StateType['inputValue']
  }

/**
 * Component
 */
const initialState: StateType = {
  greeting: '',
  inputValue: '',
}

function reducer(state: StateType, action: ActionType): StateType {
  switch (action.type) {
    // Track the greeting from the blockchain
    case 'SET_GREETING':
      return {
        ...state,
        greeting: action.greeting,
      }
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.inputValue,
      }
    default:
      throw new Error()
  }
}

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isLocalChain } = useCheckLocalChain()
  const { isMounted } = useIsMounted()
  const CONTRACT_ADDRESS = isLocalChain
    ? LOCAL_CONTRACT_ADDRESS
    : GOERLI_CONTRACT_ADDRESS
  const { address } = useAccount()
  const provider = useProvider()
  const toast = useToast()
  const { config } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: YourContract.abi,
    functionName: 'setGreeting',
    args: [state.inputValue],
    enabled: Boolean(state.inputValue),
  })
  const { data, write } = useContractWrite(config)
  const { isLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess(data: { blockHash: any }) {
      console.log('success data', data)
      toast({
        title: 'Transaction Successful',
        description: (
          <>
            <Text>Successfully updated the Greeting!</Text>
            <Text>
              <Link
                href={`https://goerli.etherscan.io/tx/${data?.blockHash}`}
                isExternal
              >
                View on Etherscan
              </Link>
            </Text>
          </>
        ),
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
    },
  })

  // call the smart contract, read the current greeting value
  async function fetchContractGreeting() {
    if (provider) {
      const contract = new ethers.Contract(
        CONTRACT_ADDRESS,
        YourContract.abi,
        provider
      ) as YourContractType
      try {
        const data = await contract.greeting()
        dispatch({ type: 'SET_GREETING', greeting: data })
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Error: ', err)
      }
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <Flex justifyContent='right' textAlign='right' className='yyy' pt={[28, 28, 28, 28]} pb={[2, 4]}>
        <ConnectButton />
      </Flex>
      <Grid
        h='200px'
        templateRows={{ base: '1fr)', lg: 'repeat(8, 1fr)' }}
        templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }}
        gap={4}
      >
        <GridItem rowSpan={1} colSpan={{ base: 4, lg: 3 }} bg='bitoro.1100' borderRadius='md'>
          <Box maxWidth="container.sm" p='4'>
            <Text fontSize="xl">ETH:USDT</Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={4} colSpan={{ base: 4, lg: 3 }} height='360px' borderRadius='md' mb='2'>
          <TradingView />
        </GridItem>
        <GridItem rowSpan={3} rowStart={{ base: 14, lg: 6 }} colSpan={{ base: 4, lg: 3 }} bg='bitoro.1100' h='160px' borderRadius='md'>
          <Positions />
        </GridItem>
        <GridItem colStart={{ base: 1, lg: 4 }} rowStart={{ base: 6, lg: 1 }} rowSpan={8} colSpan={{ base: 4, lg: 1 }} bg='bitoro.1100' borderRadius='md'>
          <Orders />
        </GridItem>
      </Grid>
    </div>
  )
}

export default Home
