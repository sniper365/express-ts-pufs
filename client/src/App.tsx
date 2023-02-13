import * as React from "react"
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import merge from 'lodash.merge';
import {
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
  lightTheme,
  RainbowKitProvider,
  Theme
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum, goerli, localhost } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { Router } from './Router'
import theme from './theme'

const ALCHEMY_API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY || ''

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#07296d',
    connectButtonBackground: '#00204c',
    modalBackground: '#00204c'
  },
} as Theme);

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    arbitrum,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true'
      ? [goerli, localhost]
      : []),
  ],
  [
    alchemyProvider({
      apiKey: ALCHEMY_API_KEY,
    }),
    publicProvider(),
  ]
)

const { wallets } = getDefaultWallets({
  appName: 'RainbowKit demo',
  chains,
})

const demoAppInfo = {
  appName: 'Rainbowkit Demo',
}

const connectors = connectorsForWallets(wallets)

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

export const App = () => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        theme={myTheme}
        // theme={lightTheme({
        //   borderRadius: 'medium',
        //   accentColor: 'bitoro.1000',
        // })}
      >
        <ChakraProvider theme={theme}>
          <Router />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
