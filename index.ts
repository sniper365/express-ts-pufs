// import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
// import cors from "cors";
// import { DydxClient } from "@dydxprotocol/v3-client";
// import Web3 from 'web3'
// import WebSocket from 'ws'

// import {
//   OrderResponseObject,
//   OrderSide,
//   OrderType,
//   TimeInForce,
//   Market,
//   RequestMethod,
//   KeyPairWithYCoordinate,
//   ApiKeyCredentials,
//   UserResponseObject
// } from './types';

// dotenv.config();

const app: Express = express();

app.use(express.json());
// app.use(cors());

const HTTP_HOST = 'https://api.dydx.exchange'
const WS_HOST = 'wss://api.dydx.exchange/v3/ws'

// const web3 = new Web3()
const bitoro_address = '0x5B2ED34223Af1E626f66C4Ea520B98C238Cb5e44'
const private_key = '70b29a4be6bf3f01047245a380ce05d11b66e7011847b0a9cff2907936741889'
// web3.eth.accounts.wallet.add(private_key)

//   ; ((async () => {
//     const client = new DydxClient(HTTP_HOST, { web3 })

//     const apiCreds = await client.onboarding.recoverDefaultApiCredentials(bitoro_address)
//     console.log('apiCreds:::', apiCreds)

//     client.apiKeyCredentials = apiCreds

//     const timestamp = new Date().toISOString()

//     const signature = client.private.sign({
//       requestPath: '/ws/accounts',
//       method: RequestMethod.GET,
//       isoTimestamp: timestamp,
//     })
//     console.log('signature:::', signature)

//     const keyPairWithYCoordinate: KeyPairWithYCoordinate = await client.onboarding.deriveStarkKey(bitoro_address);
//     console.log('keypairWithcoordiante:::', keyPairWithYCoordinate)

//     const signature_registration: { signature: string } = await client.private.getRegistration();
//     console.log('signature_registratioin:::', signature_registration)

//     const apiKey: { apiKey: ApiKeyCredentials } = await client.ethPrivate.createApiKey(bitoro_address);
//     console.log('apiKey:::', apiKey) 

//     const apiKeys = await client.private.getApiKeys();
//     console.log('apiKeys:::', apiKeys)

//     const user: { user: UserResponseObject } = await client.private.getUser();
//     console.log('user:::', user)

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

    // const msg = {
    //   type: 'subscribe',
    //   channel: 'v3_accounts',
    //   accountNumber: '0',
    //   apiKey: apiCreds.key,
    //   signature,
    //   timestamp,
    //   passphrase: apiCreds.passphrase
    // }

    // console.log('msg,,,', msg)
    
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

//   })()).then(() => console.log('Done')).catch(console.error)



app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/build')));

//     app.get('/*', function (req: Request, res: Response) {
//         res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
//     });
// }

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
