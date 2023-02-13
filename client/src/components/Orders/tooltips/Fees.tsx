import * as React from "react"
import { Text } from "@chakra-ui/react"
export const Fees = () => {
  return (
    <Text>
      The position fee will be collected when you open and close a position; it will be deducted from your collateral when opening the position and will be preferentially deducted from the profits when closing the position.<br/><br/>

      Position Fee = Asset Price * Amount * Position Fee Rate<br/>
      The position fee is fixed at 0.1%.<br/><br/>

      The MUX funding fee for each position will be tracked every 8 hours and settled as funding fees when you add changes to your positions.
    </Text>
  )
}
