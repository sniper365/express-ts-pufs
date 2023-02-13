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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorOptions = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const solid_1 = require("@heroicons/react/24/solid");
// import {
//   AsyncCreatableSelect,
//   AsyncSelect,
//   CreatableSelect,
//   Select,
// } from "chakra-react-select";
const PositionsComponent_1 = __importDefault(require("./PositionsComponent"));
const OpenOrdersComponent_1 = __importDefault(require("./OpenOrdersComponent"));
const TradesComponent_1 = __importDefault(require("./TradesComponent"));
exports.colorOptions = [
    { value: "blue", label: "Blue" },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red" },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" },
    { value: "green", label: "Green" }
];
function Positions() {
    const [switchLabel, setSwitchLabel] = (0, react_1.useState)('Label Positions');
    return (<react_2.Box w='full' h='300px'>
      <react_2.Tabs variant='unstyled'>
        <react_2.Flex justify='space-between' color='gray.500'>
          <react_2.TabList>
            <react_2.Tab _hover={{ color: 'white' }} _selected={{ color: 'white' }} fontSize={['xs', 'sm']} onClick={() => setSwitchLabel('Label Positions')}>Positions</react_2.Tab>
            <react_2.Tab _hover={{ color: 'white' }} _selected={{ color: 'white' }} fontSize={['xs', 'sm']} onClick={() => setSwitchLabel('Label Orders')}>Open Orders</react_2.Tab>
            <react_2.Tab _hover={{ color: 'white' }} _selected={{ color: 'white' }} fontSize={['xs', 'sm']} onClick={() => setSwitchLabel('Label History')}>Trades</react_2.Tab>
          </react_2.TabList>
          <react_2.Stack p='2' align='center' direction='row' gap='1'>
            {switchLabel == 'Label History' ?
            <react_2.Flex justify='start' gap='2'>
                <react_2.HStack _hover={{ color: 'white' }} cursor='pointer'>
                  <solid_1.ArrowDownTrayIcon width={20}/>
                  <react_2.Text textAlign='right' color='inherit' fontSize={['xs', 'sm']} _hover={{ color: 'white' }}>{'Save as CSV'}</react_2.Text> |
                </react_2.HStack>
                <react_2.Text textAlign='right' color='inherit' fontSize={['xs', 'sm']}>{switchLabel}</react_2.Text>
              </react_2.Flex>
            :
                <react_2.Text textAlign='right' color='inherit' fontSize={['xs', 'sm']}>{switchLabel}</react_2.Text>}
            <react_2.Switch size='sm' defaultChecked={true}/>
          </react_2.Stack>
        </react_2.Flex>
        {switchLabel == 'Label History' &&
            <react_2.HStack pl='4' gap='4'>
            <react_2.Select placeholder='Period: 1 week' w='160px' size='sm' rounded='md'>
              <option value='1d'>1 day</option>
              <option value='1m'>1 month</option>
              <option value='3m'>3 months</option>
            </react_2.Select>
            <react_2.Select placeholder='Market: All' w='160px' size='sm' rounded='md'>
              <option value='eth'>ETH</option>
              <option value='btc'>BTC</option>
              <option value='matic'>MATIC</option>
              <option value='bnb'>BNB</option>
              <option value='uni'>UNI</option>
            </react_2.Select>
            <react_2.Select placeholder='Type: All' w='160px' size='sm' rounded='md'>
              <option value='pnl'>PNL</option>
            </react_2.Select>
          </react_2.HStack>}
        <react_2.TabPanels>
          <PositionsComponent_1.default />
          <OpenOrdersComponent_1.default />
          <TradesComponent_1.default />
        </react_2.TabPanels>
      </react_2.Tabs>
    </react_2.Box>);
}
exports.default = Positions;
//# sourceMappingURL=index.js.map