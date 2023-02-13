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
exports.Fees = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Fees = () => {
    return (<react_1.Text>
      The position fee will be collected when you open and close a position; it will be deducted from your collateral when opening the position and will be preferentially deducted from the profits when closing the position.<br /><br />

      Position Fee = Asset Price * Amount * Position Fee Rate<br />
      The position fee is fixed at 0.1%.<br /><br />

      The MUX funding fee for each position will be tracked every 8 hours and settled as funding fees when you add changes to your positions.
    </react_1.Text>);
};
exports.Fees = Fees;
//# sourceMappingURL=Fees.js.map