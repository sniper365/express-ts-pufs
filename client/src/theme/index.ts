import { extendTheme } from '@chakra-ui/react'

import { Button } from './components/Button'
import { Box } from './components/Box'
import { Tooltip } from './components/Tooltip'

const overrides = {
  styles: {
    global: {
      body: {
        bg: 'bitoro.1000',
        color: 'white'
      },
      a: {
        color: 'teal.500',
        _hover: {
          textDecoration: 'underline',
        },
      },
      fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Rubik', sans-serif`,
      },
    },
  },
  components: {
    Button,
    Box
  },
  fonts: {
    heading: `Rubik`,
    body: `Rubik`
  },
  colors: {
    bitoro: {
      50: "#b2c2d8",
      100: "#99aecc",
      200: "#7f9abf",
      300: "#6686b2",
      400: "#4c72a6",
      500: "#325e99",
      600: "#194a8c",
      700: "#003680",
      800: "#003073", // enter an amount bg
      900: "#002b66",// input, modal, hover bg
      1000: "#002559",// global bg
      1100: "#00204c",// gridItem bg
      1200: "#001b40",// launchApp button bg
    },
  },
}

export default extendTheme(overrides)