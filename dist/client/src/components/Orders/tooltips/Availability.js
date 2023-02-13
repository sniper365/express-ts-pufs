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
exports.Availability = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const Availability = () => {
    return (<react_1.Text>
      Traders can long up to 117.88794 BTC at this moment.<br />
      The available liquidity will change as the long positions open interest change.<br /><br />

      BTC Long Available Liquidity / Open Interest Cap:<br />
      MUX - $1,952,932 / $2,013,469<br />
      GMX - N/A / $18,000,000<br />
      GMX (Boosted) - N/A / N/A<br /><br />

      You can customize your preferred liquidity sources under Trading Settings if needed.
    </react_1.Text>);
};
exports.Availability = Availability;
//# sourceMappingURL=Availability.js.map