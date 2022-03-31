import * as coin from './modules/coin.mjs';
import {createRequire} from "module";
const args = require('minimist')(process.argv.slice(2))
const num = args.number || 1;
const array = coin.coinFlips(num);
console.log(array);
console.log(coin.countFlips(array));
