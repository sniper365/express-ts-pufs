"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const ethers_1 = require("ethers");
const react_2 = require("react");
const wagmi_1 = require("wagmi");
const contractAddress_1 = require("../artifacts/contracts/contractAddress");
const YourContract_json_1 = __importDefault(require("../artifacts/contracts/YourContract.sol/YourContract.json"));
const rainbowkit_1 = require("@rainbow-me/rainbowkit");
const useCheckLocalChain_1 = require("../hooks/useCheckLocalChain");
const useIsMounted_1 = require("../hooks/useIsMounted");
const Orders_1 = __importDefault(require("../components/Orders"));
const Positions_1 = __importDefault(require("../components/Positions"));
const TradingView_1 = __importDefault(require("../components/TradingView"));
/**
 * Constants & Helpers
 */
const localProvider = new ethers_1.providers.StaticJsonRpcProvider('http://localhost:8545');
const GOERLI_CONTRACT_ADDRESS = '0x3B73833638556f10ceB1b49A18a27154e3828303';
/**
 * Component
 */
const initialState = {
    greeting: '',
    inputValue: '',
};
function reducer(state, action) {
    switch (action.type) {
        // Track the greeting from the blockchain
        case 'SET_GREETING':
            return Object.assign(Object.assign({}, state), { greeting: action.greeting });
        case 'SET_INPUT_VALUE':
            return Object.assign(Object.assign({}, state), { inputValue: action.inputValue });
        default:
            throw new Error();
    }
}
const Home = () => {
    const [state, dispatch] = (0, react_2.useReducer)(reducer, initialState);
    const { isLocalChain } = (0, useCheckLocalChain_1.useCheckLocalChain)();
    const { isMounted } = (0, useIsMounted_1.useIsMounted)();
    const CONTRACT_ADDRESS = isLocalChain
        ? contractAddress_1.YourContract
        : GOERLI_CONTRACT_ADDRESS;
    const { address } = (0, wagmi_1.useAccount)();
    const provider = (0, wagmi_1.useProvider)();
    const toast = (0, react_1.useToast)();
    const { config } = (0, wagmi_1.usePrepareContractWrite)({
        address: CONTRACT_ADDRESS,
        abi: YourContract_json_1.default.abi,
        functionName: 'setGreeting',
        args: [state.inputValue],
        enabled: Boolean(state.inputValue),
    });
    const { data, write } = (0, wagmi_1.useContractWrite)(config);
    const { isLoading } = (0, wagmi_1.useWaitForTransaction)({
        hash: data === null || data === void 0 ? void 0 : data.hash,
        onSuccess(data) {
            console.log('success data', data);
            toast({
                title: 'Transaction Successful',
                description: (<>
            <react_1.Text>Successfully updated the Greeting!</react_1.Text>
            <react_1.Text>
              <react_1.Link href={`https://goerli.etherscan.io/tx/${data === null || data === void 0 ? void 0 : data.blockHash}`} isExternal>
                View on Etherscan
              </react_1.Link>
            </react_1.Text>
          </>),
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
        },
    });
    // call the smart contract, read the current greeting value
    function fetchContractGreeting() {
        return __awaiter(this, void 0, void 0, function* () {
            if (provider) {
                const contract = new ethers_1.ethers.Contract(CONTRACT_ADDRESS, YourContract_json_1.default.abi, provider);
                try {
                    const data = yield contract.greeting();
                    dispatch({ type: 'SET_GREETING', greeting: data });
                }
                catch (err) {
                    // eslint-disable-next-line no-console
                    console.log('Error: ', err);
                }
            }
        });
    }
    if (!isMounted) {
        return null;
    }
    return (<div>
      <react_1.Flex justifyContent='right' textAlign='right' className='yyy' pt={[28, 28, 28, 28]} pb={[2, 4]}>
        <rainbowkit_1.ConnectButton />
      </react_1.Flex>
      <react_1.Grid h='200px' templateRows={{ base: '1fr)', lg: 'repeat(8, 1fr)' }} templateColumns={{ base: '1fr', lg: 'repeat(4, 1fr)' }} gap={4}>
        <react_1.GridItem rowSpan={1} colSpan={{ base: 4, lg: 3 }} bg='bitoro.1100' borderRadius='md'>
          <react_1.Box maxWidth="container.sm" p='4'>
            <react_1.Text fontSize="xl">ETH:USDT</react_1.Text>
          </react_1.Box>
        </react_1.GridItem>
        <react_1.GridItem rowSpan={4} colSpan={{ base: 4, lg: 3 }} height='360px' borderRadius='md' mb='2'>
          <TradingView_1.default />
        </react_1.GridItem>
        <react_1.GridItem rowSpan={3} rowStart={{ base: 14, lg: 6 }} colSpan={{ base: 4, lg: 3 }} bg='bitoro.1100' h='160px' borderRadius='md'>
          <Positions_1.default />
        </react_1.GridItem>
        <react_1.GridItem colStart={{ base: 1, lg: 4 }} rowStart={{ base: 6, lg: 1 }} rowSpan={8} colSpan={{ base: 4, lg: 1 }} bg='bitoro.1100' borderRadius='md'>
          <Orders_1.default />
        </react_1.GridItem>
      </react_1.Grid>
    </div>);
};
exports.default = Home;
//# sourceMappingURL=Home.js.map