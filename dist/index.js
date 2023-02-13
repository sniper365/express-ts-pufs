"use strict";
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
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const v3_client_1 = require("@dydxprotocol/v3-client");
const web3_1 = __importDefault(require("web3"));
const types_1 = require("./types");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const HTTP_HOST = 'https://api.dydx.exchange';
const WS_HOST = 'wss://api.dydx.exchange/v3/ws';
const web3 = new web3_1.default();
const bitoro_address = '0x5B2ED34223Af1E626f66C4Ea520B98C238Cb5e44';
const private_key = '70b29a4be6bf3f01047245a380ce05d11b66e7011847b0a9cff2907936741889';
web3.eth.accounts.wallet.add(private_key);
((() => __awaiter(void 0, void 0, void 0, function* () {
    const client = new v3_client_1.DydxClient(HTTP_HOST, { web3 });
    const apiCreds = yield client.onboarding.recoverDefaultApiCredentials(bitoro_address);
    console.log('apiCreds:::', apiCreds);
    client.apiKeyCredentials = apiCreds;
    const timestamp = new Date().toISOString();
    const signature = client.private.sign({
        requestPath: '/ws/accounts',
        method: types_1.RequestMethod.GET,
        isoTimestamp: timestamp,
    });
    console.log('signature:::', signature);
    const keyPairWithYCoordinate = yield client.onboarding.deriveStarkKey(bitoro_address);
    console.log('keypairWithcoordiante:::', keyPairWithYCoordinate);
    const signature_registration = yield client.private.getRegistration();
    console.log('signature_registratioin:::', signature_registration);
    const apiKey = yield client.ethPrivate.createApiKey(bitoro_address);
    console.log('apiKey:::', apiKey);
    const apiKeys = yield client.private.getApiKeys();
    console.log('apiKeys:::', apiKeys);
    const user = yield client.private.getUser();
    console.log('user:::', user);
    // const order: { order: OrderResponseObject } = await client.private.createOrder(
    //   {
    //     side: OrderSide.SELL,
    //     type: OrderType.LIMIT,
    //     timeInForce: TimeInForce.GTT,
    //     postOnly: false,
    //     size: '100',
    //     price: '18000',
    //     limitFee: '0.015',
    //     expiration: '2023-02-21T21:30:20.200Z',
    //     market: Market.BTC_USD
    //   },
    //   '1', // required for creating the order signature
    // );
    const msg = {
        type: 'subscribe',
        channel: 'v3_accounts',
        accountNumber: '0',
        apiKey: apiCreds.key,
        signature,
        timestamp,
        passphrase: apiCreds.passphrase
    };
    console.log('msg,,,', msg);
    // const ws = new WebSocket(WS_HOST)
    // ws.on('message', (message: any) => {
    //   console.log('<(message):::', message)
    // })
    // const order: { order: OrderResponseObject } = await client.private.createOrder(
    //   {
    //     side: OrderSide.SELL,
    //     type: OrderType.LIMIT,
    //     timeInForce: TimeInForce.GTT,
    //     postOnly: false,
    //     size: '100',
    //     price: '18000',
    //     limitFee: '0.015',
    //     expiration: '2022-12-21T21:30:20.200Z',
    //     market: Market.BTC_USD
    //   },
    //   '1', // required for creating the order signature
    // );
    // ws.on('open', () => {
    //   console.log('>(open):::', msg)
    //   ws.send(JSON.stringify(msg))
    // })
    // ws.on('error', (error: any) => {
    //   console.log('<', error)
    // })
    // ws.on('close', () => {
    //   console.log('Connection closed')
    // })
}))()).then(() => console.log('Done')).catch(console.error);
app.use(express_1.default.static(path_1.default.join(__dirname, './client/build')));
app.get('/*', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, './client/build', 'index.html'));
    // return res.send('Bitoro Network')
});
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));
//     app.get('/*', function (req: Request, res: Response) {
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     });
// }
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
