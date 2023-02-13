"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const react_1 = require("@chakra-ui/react");
exports.Tooltip = (0, react_1.defineStyleConfig)({
    // The styles all button have in common
    baseStyle: {
        borderRadius: 'md',
        placement: 'top',
        bg: 'bitoro.700',
        fontSize: 'xs',
        fontWeight: 'light',
        hasArrow: true,
        arrowSize: '15'
    },
    // Two sizes: sm and md
    sizes: {
        sm: {
            fontSize: 'xs',
            px: 4,
            py: 3, // <-- py is short for paddingTop and paddingBottom
        },
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '1px solid',
            borderColor: 'bitoro.600',
        },
        solid: {
            bg: 'bitoro.700',
            color: 'white',
            placement: 'top',
            fontSize: 'xs',
            fontWeight: 'light',
            hasArrow: true,
            arrowSize: '15'
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'sm',
        // variant: 'outline',
    },
});
//# sourceMappingURL=Tooltip.js.map