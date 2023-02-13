"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMounted = void 0;
const react_1 = require("react");
const useIsMounted = () => {
    const [isMounted, setIsMounted] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setIsMounted(true);
    }, []);
    return {
        isMounted,
    };
};
exports.useIsMounted = useIsMounted;
//# sourceMappingURL=useIsMounted.js.map