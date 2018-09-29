#!/usr/bin/env node

var Web3 = require('../index.js');
var web3 = new Web3();

// web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
var url = "http://47.105.142.166:8545";
web3.setProvider(new web3.providers.HttpProvider(url));

var coinbase = web3.eth.coinbase;
console.log(coinbase);

var balance = web3.eth.getBalance(coinbase);
console.log(balance.toString(10));

var level = web3.eth.getSelfLevel();
console.log(level);

var num = web3.getSignAccounts(100);
var hash = web3.getSignAccounts("0x1a752eb0138eac809244eb840c0c3c03f047377ecd5345d995d4cacfa864f514");
console.log(num)
console.log(hash)
