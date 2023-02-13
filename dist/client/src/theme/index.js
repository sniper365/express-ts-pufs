"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const Button_1 = require("./components/Button");
const Box_1 = require("./components/Box");
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
        Button: Button_1.Button,
        Box: Box_1.Box
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
            800: "#003073",
            900: "#002b66",
            1000: "#002559",
            1100: "#00204c",
            1200: "#001b40", // launchApp button bg
        },
    },
};
exports.default = (0, react_1.extendTheme)(overrides);
//# sourceMappingURL=index.js.map