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
const react_1 = require("react");
const solid_1 = require("@heroicons/react/24/solid");
const TokenInput_1 = __importDefault(require("./TokenInput"));
const Slider_1 = __importDefault(require("./Slider"));
const react_2 = require("@chakra-ui/react");
const tokens_json_1 = __importDefault(require("../../constants/tokens.json"));
const Availability_1 = require("./tooltips/Availability");
const Collateral_1 = require("./tooltips/Collateral");
const Fees_1 = require("./tooltips/Fees");
const LiqPrice_1 = require("./tooltips/LiqPrice");
const Liquidity_1 = require("./tooltips/Liquidity");
const Profits_1 = require("./tooltips/Profits");
const Spread_1 = require("./tooltips/Spread");
function Orders() {
    const [tokenA, setTokenA] = (0, react_1.useState)(tokens_json_1.default[1]);
    const [tokenB, setTokenB] = (0, react_1.useState)(tokens_json_1.default[1]);
    const [inputA, setInputA] = (0, react_1.useState)('');
    const [inputB, setInputB] = (0, react_1.useState)('');
    const [isLong, setIsLong] = (0, react_1.useState)(true);
    const [orderColor, setOrderColor] = (0, react_1.useState)('blue');
    const [typingTimeout, setTypingTimeout] = (0, react_1.useState)();
    const onChangeTokenA = (token) => __awaiter(this, void 0, void 0, function* () {
        setTokenA(token);
    });
    const onChangeTokenB = (token) => __awaiter(this, void 0, void 0, function* () {
        setTokenB(token);
    });
    const onChangeInputA = (input) => __awaiter(this, void 0, void 0, function* () {
        if (input.match(/^[0-9]*[.,]?[0-9]*$/)) {
            setInputA(input);
            if (typingTimeout)
                clearTimeout(typingTimeout);
        }
    });
    const onChangeInputB = (input) => __awaiter(this, void 0, void 0, function* () {
        if (input.match(/^[0-9]*[.,]?[0-9]*$/)) {
            setInputB(input);
            if (typingTimeout)
                clearTimeout(typingTimeout);
        }
    });
    const onChangeOrder = (isLong) => {
        setIsLong(isLong);
        if (isLong) {
            setOrderColor('green');
        }
        else {
            setOrderColor('orange');
        }
    };
    const onChangeSliderValue = (v) => {
        setInputB((Number(inputA) * v).toString());
    };
    return (<react_2.Box p='2' rounded='md'>
      <react_2.Tabs variant='solid-rounded' rounded='lg' colorScheme='bitoro' bg='bitoro.900' mb='2'>
        <react_2.TabList>
          <react_2.Tab w='50%' rounded='lg' onClick={() => onChangeOrder(true)}>Long/Buy</react_2.Tab>
          <react_2.Tab w='50%' rounded='lg' onClick={() => onChangeOrder(false)}>Short/Sell</react_2.Tab>
        </react_2.TabList>
      </react_2.Tabs>
      <react_2.Stack position='relative'>
        <TokenInput_1.default balance={'--'} onChangeToken={onChangeTokenA} input={inputA} isTokenA isLong={isLong} token={tokenA} onChangeInput={onChangeInputA} minimumTranslation={'MiniAmount'} headline={'Pay'}/>
        <react_2.Flex mt='0!important' position='absolute' zIndex='3' top='50%' left='50%' transform='translate(-50%, -50%)' width='28px' height='28px' lineHeight='38px' justifyContent='center' textAlign='center' bg='bitoro.700' borderRadius='md' alignItems='center'>
          <solid_1.ArrowDownIcon width={20}/>
        </react_2.Flex>
        <TokenInput_1.default balance={'--'} onChangeToken={onChangeTokenB} isLong={isLong} input={inputB} token={tokenB} onChangeInput={onChangeInputB} minimumTranslation={'MiniAmount'} headline={'Receive'}/>
      </react_2.Stack>
      <Slider_1.default colorScheme={orderColor} onChangeSliderValue={onChangeSliderValue}/>
      <react_2.Button mt='6' w='full' bg='bitoro.800' colorScheme='bitoro'>Enter an amount</react_2.Button>
      <react_2.TableContainer mt='4'>
        <react_2.Table size='sm' color='gray.400' variant='unstyled' w='full'>
          <react_2.Tbody>
            <react_2.Tr>
              <react_2.Td px='0'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label={(0, Availability_1.Availability)()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Available Liquidity
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Td>
              <react_2.Td px='0' isNumeric textAlign='right'>25,232.23</react_2.Td>
            </react_2.Tr>
            <react_2.Tr>
              <react_2.Td px='0'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label={(0, Liquidity_1.Liquidity)()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Liquidity Source
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Td>
              <react_2.Td px='0' isNumeric textAlign='right'>Bitoro</react_2.Td>
            </react_2.Tr>
            <react_2.Tr>
              <react_2.Td px='0'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label={(0, Profits_1.Profits)()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Profits In
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Td>
              <react_2.Td px='0' isNumeric textAlign='right'></react_2.Td>
            </react_2.Tr>
            <react_2.Tr>
              <react_2.Td px='0'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label={(0, LiqPrice_1.LiqPrice)()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Liq. Price
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Td>
              <react_2.Td px='0' isNumeric textAlign='right'>--</react_2.Td>
            </react_2.Tr>
            <react_2.Tr>
              <react_2.Td px='0'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label={(0, Collateral_1.Collateral)()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Collateral
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Td>
              <react_2.Td px='0' isNumeric textAlign='right'>--</react_2.Td>
            </react_2.Tr>
            <react_2.Tr>
              <react_2.Td px='0'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label={(0, Fees_1.Fees)()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Fees
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Td>
              <react_2.Td px='0' isNumeric textAlign='right'>--</react_2.Td>
            </react_2.Tr>
            <react_2.Tr>
              <react_2.Td px='0'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label={(0, Spread_1.Spread)()} fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Spread
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Td>
              <react_2.Td px='0' isNumeric textAlign='right'>--</react_2.Td>
            </react_2.Tr>
          </react_2.Tbody>
        </react_2.Table>
      </react_2.TableContainer>
    </react_2.Box>);
}
exports.default = Orders;
//# sourceMappingURL=index.js.map