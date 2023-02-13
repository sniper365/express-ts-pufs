"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = require("@chakra-ui/react");
exports.Button = (0, react_1.defineStyleConfig)({
    // The styles all button have in common
    baseStyle: {
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        borderRadius: 'base', // <-- border radius is same for all variants and sizes
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
        md: {
            fontSize: 'md',
            px: 6,
            py: 4, // <-- these values are tokens from the design system
        },
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'purple.500',
            color: 'purple.500',
        },
        solid: {
            bg: 'bitoro.800',
            color: 'white',
            _hover: { bg: 'bitoro.900' }
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        // variant: 'outline',
    },
});
//# sourceMappingURL=Button.js.map