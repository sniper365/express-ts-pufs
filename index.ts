import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import { DydxClient } from "@dydxprotocol/v3-client";
import Web3 from 'web3'

import {
  OrderResponseObject,
  OrderSide,
  OrderType,
  TimeInForce,
  Market,
  RequestMethod,
  KeyPairWithYCoordinate,
  ApiKeyCredentials,
  UserResponseObject
} from './types';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const HTTP_HOST = 'https://api.dydx.exchange'

const web3 = new Web3()
const bitoro_address = '0x5B2ED34223Af1E626f66C4Ea520B98C238Cb5e44'
const private_key = '70b29a4be6bf3f01047245a380ce05d11b66e7011847b0a9cff2907936741889'
web3.eth.accounts.wallet.add(private_key)

  ; ((async () => {
    const client = new DydxClient(HTTP_HOST, { web3 })

    const apiCreds = await client.onboarding.recoverDefaultApiCredentials(bitoro_address)
    console.log('apiCreds:::', apiCreds)

    client.apiKeyCredentials = apiCreds

    const timestamp = new Date().toISOString()

    const signature = client.private.sign({
      requestPath: '/ws/accounts',
      method: RequestMethod.GET,
      isoTimestamp: timestamp,
    })
    console.log('signature:::', signature)

    const msg = {
      type: 'subscribe',
      channel: 'v3_accounts',
      accountNumber: '0',
      apiKey: apiCreds.key,
      signature,
      timestamp,
      passphrase: apiCreds.passphrase
    }

    console.log('msg,,,', msg)   
  })()).then(() => console.log('Done')).catch(console.error)

app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', (req: Request, res: Response) => {
	return res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
