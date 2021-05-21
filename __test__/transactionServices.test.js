import { buildTransaction } from '../src/services/transactionServices';
import BigNumber from "bignumber.js";
import common from './../src/common/common';

const legacyBtcInputPartialFunds={
    amount: "0.001",
    feeParams: {fees: "0x25b7"},
    isRequestSendAll: false,
    memo: null,
    toAddress: "mtSwjbJh1S6tih3L4PhC5JRzQ1mGd2mqx8",
    coin:{
        account: "0",
        address: "myD8QmHBNa4zugWqEvY118XSciNvsdpkrU",
        addressType: "legacy",
        chain: "Bitcoin",
        coinType: 1,
        id: "BTCTestnet",
        networkId: 1,
        objectId: "Q4dJZA9EVX",
        path: "m/44'/1'/0'/0/0",
        precision: 18,
        privateKey: "707dd7a0645d37725f28a63d764bc91a34ca263a077230ba56209dddd3bc881f",
        symbol: "BTC",
        type: "Testnet"
    }
}

const segwitBtcInputPartialFunds = {
    amount: "0.001",
    coin:{account: "0",
        address: "tb1qxf7cxkd3rassty6ns8ulnpu7tgyspvwvgvpkxy",
        addressType: "segwit",
        chain: "Bitcoin",
        coinType: 1,
        id: "BTCTestnet",
        networkId: 1,
        objectId: "Rek5KfdS24",
        path: "m/84'/1'/0'/0/0",
        precision: 18,
        privateKey: "0ba16a1a273aaf1fc0848ccf9174b98f510eae73b6300a5b75560ad508ef09bb",
        symbol: "BTC",
        type: "Testnet",
    },
    feeParams: {
        fees: "0x25a9"
    },
    isRequestSendAll: false,
    memo: null,
    toAddress: "tb1qrf875ys8lxevj03s769jlseetkeh35dv9dn2t8",
}
const balanceA = new BigNumber(2300);
const segwitBtcInputAllFunds = {
    amount: "0.014895",
    coin:  {
        account: "0",
        address: "tb1qrf875ys8lxevj03s769jlseetkeh35dv9dn2t8",
        balance:balanceA,
        addressType: "segwit",
        chain: "Bitcoin",
        coinType: 1,
        id: "BTCTestnet",
        networkId: 1,
        objectId: "dSbEQtEJnL",
        path: "m/84'/1'/0'/0/0",
        privateKey: "3152ba96abc662be3ada07a31e230a9857843e431824a245643d52e79089157d",
        symbol: "BTC",
        precision: 18,
        type: "Testnet"
    },
    feeParams: {fees: "0x27fe"},
    isRequestSendAll: true,
    memo: null,
    toAddress: "tb1qxf7cxkd3rassty6ns8ulnpu7tgyspvwvgvpkxy",
}

const balanceB = new BigNumber(2300);
const gas = new BigNumber(2300);
const segwitRbtcInputAllFunds={
    amount: "0.046984",
    feeParams: { gasPrice: "118480000", gas},
    isRequestSendAll: true,
    memo: null,
    toAddress: "0xe4CAE969f26E093874728272dcFED1074f4778F5",
    coin:{
        account: "0",
        address: "0x2FA4a8A4cFF02Efa4368a1e8c3301C5342D3b879",
        balance:balanceB,
        chain: "Rootstock",
        coinType: 37310,
        contractAddress: undefined,
        id: "RBTCTestnet",
        metadata: {networkId: 31, coinType: 37310, icon: 10, defaultName: "Smart Bitcoin", chain: "Rootstock"},
        name: "Smart Bitcoin",
        networkId: 31,
        objectId: "gOrOxEcFeQ",
        path: "m/44'/37310'/0'/0/0",
        precision: 18,
        privateKey: "b265c01217804948d490d17b7383d61daf1991f87f1f5ae87b3ad0f84bf967e0",
        symbol: "RBTC",
        type: "Testnet"
    }
}

const segwitRbtcInputPartialFunds ={
    amount: "0.001",
    coin: {
        account: "0",
        address: "0x2FA4a8A4cFF02Efa4368a1e8c3301C5342D3b879",
        chain: "Rootstock",
        coinType: 37310,
        contractAddress: undefined,
        id: "RBTCTestnet",
        metadata: {networkId: 31, coinType: 37310, icon: 10, defaultName: "Smart Bitcoin", chain: "Rootstock"},
        name: "Smart Bitcoin",
        networkId: 31,
        objectId: "gOrOxEcFeQ",
        path: "m/44'/37310'/0'/0/0",
        precision: 18,
        privateKey: "b265c01217804948d490d17b7383d61daf1991f87f1f5ae87b3ad0f84bf967e0",
        symbol: "RBTC",
        type: "Testnet"
    },
    feeParams: {gas: BigNumber, gasPrice: "117295200"},
    isRequestSendAll: false,
    memo: null,
    toAddress: "0xe4CAE969f26E093874728272dcFED1074f4778F5"
}


describe('Transaction Services', () => {
    it('should build a transaction with a legacy BTC address', async () => {
        const builtTransaction = await buildTransaction(legacyBtcInputPartialFunds);
        expect(builtTransaction).toHaveProperty('receiver');
        expect(builtTransaction.receiver).toBe(legacyBtcInputPartialFunds.toAddress);
        expect(builtTransaction).toHaveProperty('sender');
        expect(builtTransaction.sender).toBe(legacyBtcInputPartialFunds.coin.address);
        expect(builtTransaction).toHaveProperty('symbol');
        expect(builtTransaction.symbol).toBe(legacyBtcInputPartialFunds.coin.symbol);
        expect(builtTransaction).toHaveProperty('value');
        expect(builtTransaction.value).toBe(common.convertCoinAmountToUnitHex(legacyBtcInputPartialFunds.coin.symbol,legacyBtcInputPartialFunds.amount,legacyBtcInputPartialFunds.coin.precision));
    });

    it('should build a transaction with a segwit BTC address when sending partial funds', async () => {
        const builtTransaction = await buildTransaction(segwitBtcInputPartialFunds);
        expect(builtTransaction).toHaveProperty('receiver');
        expect(builtTransaction.receiver).toBe(segwitBtcInputPartialFunds.toAddress);
        expect(builtTransaction).toHaveProperty('sender');
        expect(builtTransaction.sender).toBe(segwitBtcInputPartialFunds.coin.address);
        expect(builtTransaction).toHaveProperty('symbol');
        expect(builtTransaction.symbol).toBe(segwitBtcInputPartialFunds.coin.symbol);
        expect(builtTransaction).toHaveProperty('value');
        expect(builtTransaction.value).toBe(common.convertCoinAmountToUnitHex(segwitBtcInputPartialFunds.coin.symbol,segwitBtcInputPartialFunds.amount,segwitBtcInputPartialFunds.coin.precision));
    });

    it('should build a transaction with a segwit BTC address when sending all funds', async () => {
        const builtTransaction = await buildTransaction(segwitBtcInputAllFunds);
        expect(builtTransaction).toHaveProperty('receiver');
        expect(builtTransaction.receiver).toBe(segwitBtcInputAllFunds.toAddress);
        expect(builtTransaction).toHaveProperty('sender');
        expect(builtTransaction.sender).toBe(segwitBtcInputAllFunds.coin.address);
        expect(builtTransaction).toHaveProperty('symbol');
        expect(builtTransaction.symbol).toBe(segwitBtcInputAllFunds.coin.symbol);
        expect(builtTransaction).toHaveProperty('value');
        const value = segwitBtcInputAllFunds.coin.balance.minus(common.convertUnitToCoinAmount(segwitBtcInputAllFunds.coin.symbol, segwitBtcInputAllFunds.feeParams.fees, segwitBtcInputAllFunds.coin.precision));
        expect(builtTransaction.value).toBe(common.convertCoinAmountToUnitHex(segwitBtcInputAllFunds.coin.symbol,value,segwitBtcInputAllFunds.coin.precision));
    });

    it('should build a transaction with a segwit RBTC address when sending all funds', async () => {
        const builtTransaction = await buildTransaction(segwitRbtcInputAllFunds);
        expect(builtTransaction).toHaveProperty('receiver');
        expect(builtTransaction.receiver).toBe(segwitRbtcInputAllFunds.toAddress.toLowerCase());
        expect(builtTransaction).toHaveProperty('sender');
        expect(builtTransaction.sender).toBe(segwitRbtcInputAllFunds.coin.address);
        expect(builtTransaction).toHaveProperty('symbol');
        expect(builtTransaction.symbol).toBe(segwitRbtcInputAllFunds.coin.symbol);
        expect(builtTransaction).toHaveProperty('value');
        const value = segwitRbtcInputAllFunds.coin.balance.minus(common.convertUnitToCoinAmount(segwitRbtcInputAllFunds.coin.symbol, segwitRbtcInputAllFunds.feeParams.gas.times(segwitRbtcInputAllFunds.feeParams.gasPrice), segwitRbtcInputAllFunds.coin.precision));
        expect(builtTransaction.value).toBe(common.convertCoinAmountToUnitHex(segwitRbtcInputAllFunds.coin.symbol,value,segwitRbtcInputAllFunds.coin.precision));
    });

    it('should build a transaction with a segwit RBTC address when sending partial funds', async () => {
        const builtTransaction = await buildTransaction(segwitRbtcInputPartialFunds);
        expect(builtTransaction).toHaveProperty('receiver');
        expect(builtTransaction.receiver).toBe(segwitRbtcInputPartialFunds.toAddress);
        expect(builtTransaction).toHaveProperty('sender');
        expect(builtTransaction.sender).toBe(segwitRbtcInputPartialFunds.coin.address);
        expect(builtTransaction).toHaveProperty('symbol');
        expect(builtTransaction.symbol).toBe(segwitRbtcInputPartialFunds.coin.symbol);
        expect(builtTransaction).toHaveProperty('value');
        expect(builtTransaction.value).toBe(common.convertCoinAmountToUnitHex(segwitRbtcInputPartialFunds.coin.symbol,segwitRbtcInputPartialFunds.amount,segwitRbtcInputPartialFunds.coin.precision));
    });

});


