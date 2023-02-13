import * as React from "react"
import { Text } from "@chakra-ui/react"
export const Profits = () => {
  return (
    <Text>
      If this position is closed, your realized profits will be settled in BTC.<br /><br />
      Under the circumstance when Arbitrum has insufficient BTC reserves, some of your profits might be settled in muxBTC. You can redeem muxBTC into BTC on a different network that has sufficient reserves, or wait for the reserves on Arbitrum to refill and then redeem.
    </Text>
  )
}
