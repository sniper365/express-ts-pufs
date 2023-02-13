"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheckLocalChain = void 0;
const react_1 = require("react");
const wagmi_1 = require("wagmi");
const useCheckLocalChain = () => {
    const [isLocalChain, setIsLocalChain] = (0, react_1.useState)(false);
    const { chain } = (0, wagmi_1.useNetwork)();
    (0, react_1.useEffect)(() => {
        if (chain && chain.id === 1337) {
            setIsLocalChain(true);
        }
    }, [chain]);
    return {
        isLocalChain,
    };
};
exports.useCheckLocalChain = useCheckLocalChain;
//# sourceMappingURL=useCheckLocalChain.js.map