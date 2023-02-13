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
const react_1 = require("@chakra-ui/react");
function OpenOrdersComponent() {
    return (<react_1.TabPanel>
      <react_1.TableContainer>
        <react_1.Table size='sm' color='gray.400' variant='unstyled' w='full'>
          <react_1.Thead>
            <react_1.Tr>
              <react_1.Th textTransform='none' fontWeight='light'>Time</react_1.Th>
              <react_1.Th textTransform='none' fontWeight='light'>Market & Side</react_1.Th>
              <react_1.Th textTransform='none' fontWeight='light'>Operation & Type</react_1.Th>
              <react_1.Th textTransform='none' fontWeight='light'>Price</react_1.Th>
              <react_1.Th textTransform='none' fontWeight='light'>Amount</react_1.Th>
              <react_1.Th textTransform='none' fontWeight='light'>Collateral</react_1.Th>
              <react_1.Th textTransform='none' fontWeight='light'>Actions</react_1.Th>
            </react_1.Tr>
          </react_1.Thead>
          <react_1.Tbody>
          </react_1.Tbody>
        </react_1.Table>
      </react_1.TableContainer>
    </react_1.TabPanel>);
}
exports.default = OpenOrdersComponent;
//# sourceMappingURL=OpenOrdersComponent.js.map