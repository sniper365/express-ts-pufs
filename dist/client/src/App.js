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
exports.App = void 0;
const React = __importStar(require("react"));
const react_1 = require("@chakra-ui/react");
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const rainbowkit_1 = require("@rainbow-me/rainbowkit");
require("@rainbow-me/rainbowkit/styles.css");
const wagmi_1 = require("wagmi");
const chains_1 = require("wagmi/chains");
const alchemy_1 = require("wagmi/providers/alchemy");
const public_1 = require("wagmi/providers/public");
const Router_1 = require("./Router");
const theme_1 = __importDefault(require("./theme"));
const ALCHEMY_API_KEY = process.env.REACT_APP_ALCHEMY_API_KEY || '';
const myTheme = (0, lodash_merge_1.default)((0, rainbowkit_1.darkTheme)(), {
    colors: {
        accentColor: '#07296d',
        connectButtonBackground: '#00204c',
        modalBackground: '#00204c'
    },
});
const { chains, provider, webSocketProvider } = (0, wagmi_1.configureChains)([
    chains_1.mainnet,
    chains_1.polygon,
    chains_1.arbitrum,
    ...(process.env.REACT_APP_ENABLE_TESTNETS === 'true'
        ? [chains_1.goerli, chains_1.localhost]
        : []),
], [
    (0, alchemy_1.alchemyProvider)({
        apiKey: ALCHEMY_API_KEY,
    }),
    (0, public_1.publicProvider)(),
]);
const { wallets } = (0, rainbowkit_1.getDefaultWallets)({
    appName: 'RainbowKit demo',
    chains,
});
const demoAppInfo = {
    appName: 'Rainbowkit Demo',
};
const connectors = (0, rainbowkit_1.connectorsForWallets)(wallets);
const wagmiClient = (0, wagmi_1.createClient)({
    autoConnect: true,
    connectors,
    provider,
    webSocketProvider,
});
const App = () => {
    return (<wagmi_1.WagmiConfig client={wagmiClient}>
      <rainbowkit_1.RainbowKitProvider appInfo={demoAppInfo} chains={chains} theme={myTheme}>
        <react_1.ChakraProvider theme={theme_1.default}>
          <Router_1.Router />
        </react_1.ChakraProvider>
      </rainbowkit_1.RainbowKitProvider>
    </wagmi_1.WagmiConfig>);
};
exports.App = App;
//# sourceMappingURL=App.js.map