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
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const TokenListModal_1 = __importDefault(require("./TokenListModal"));
const TokenInput = ({ input, onChangeInput, token, onChangeToken, balance, isTokenA, isLong, minimumTranslation, headline }) => {
    return (<react_1.Box>
      <react_1.Flex bg='bitoro.900' p='4' rounded='2xl' shadow='md' flexDir={'column'} borderColor={isLong ? 'green.200' : 'orange.300'} borderWidth='1px'>
        <react_1.Flex flexDir={'row'} justify='space-between'>
          <react_1.Text>{headline}</react_1.Text>
          <react_1.Text>Balance: </react_1.Text>
        </react_1.Flex>
        <react_1.Flex flexDir={'row'} justify='space-between'>
          <react_1.Input type="text" minLength={1} inputMode="decimal" name="amount" id="amount" value={input} onFocus={(e) => e.target.select()} onChange={(e) => onChangeInput(e.target.value)} w='full' p='0' textAlign='left' color='gray.500' bg='inherit' border='none' focusBorderColor="bitoro.700" 
    // disabled={token?.address ? false : true}
    placeholder="0.0"/>
          <TokenListModal_1.default token={token} onChangeToken={onChangeToken} isTokenA={isTokenA} balance={balance} minimumTranslation={minimumTranslation}/>
        </react_1.Flex>
      </react_1.Flex>
    </react_1.Box>);
};
exports.default = TokenInput;
//# sourceMappingURL=TokenInput.js.map