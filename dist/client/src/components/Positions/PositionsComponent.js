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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
function PositionsComponent() {
    const [switchLabel, setSwitchLabel] = (0, react_1.useState)('Label Positions');
    return (<react_2.TabPanel>
      <react_2.TableContainer>
        <react_2.Table size='sm' color='gray.400' variant='unstyled' w='full'>
          <react_2.Thead>
            <react_2.Tr>
              <react_2.Th textTransform='none' fontWeight='light'>Market</react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>Size</react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>
                <react_2.Text as='text' borderBottomStyle='dotted' borderBottomWidth='1px' borderBottomColor='gray.500'>
                  <react_2.Tooltip label="Net Value = Collateral + Unrealized PNL" fontSize='xs' fontWeight='light' p='2' aria-label='A tooltip' hasArrow arrowSize={10} placement='top' borderColor='bitoro.600' borderWidth='1px' colorScheme='bitoro' bg='bitoro.700' borderRadius='md'>
                    Net Value
                  </react_2.Tooltip>
                </react_2.Text>
              </react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>Collateral</react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>Entry Price</react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>Mark Price</react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>Liq. Price</react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>PNL & ROE</react_2.Th>
              <react_2.Th textTransform='none' fontWeight='light'>Actions</react_2.Th>
            </react_2.Tr>
          </react_2.Thead>
          <react_2.Tbody>
          </react_2.Tbody>
        </react_2.Table>
      </react_2.TableContainer>
    </react_2.TabPanel>);
}
exports.default = PositionsComponent;
//# sourceMappingURL=PositionsComponent.js.map