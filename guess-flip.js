import * as coin from './modules/coin.mjs';
const args = require('minimist')(process.argv.slice(2))
const calls = args.call
console.log(coin.flipACoin(calls))

