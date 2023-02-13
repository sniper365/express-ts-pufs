import * as React from "react"
import { Text } from "@chakra-ui/react"
export const Availability = () => {
  return (
    <Text>
      Traders can long up to 117.88794 BTC at this moment.<br />
      The available liquidity will change as the long positions open interest change.<br /><br />

      BTC Long Available Liquidity / Open Interest Cap:<br />
      MUX - $1,952,932 / $2,013,469<br />
      GMX - N/A / $18,000,000<br />
      GMX (Boosted) - N/A / N/A<br /><br />

      You can customize your preferred liquidity sources under Trading Settings if needed.
    </Text>
  )
}