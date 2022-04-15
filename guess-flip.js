import * as coin from './modules/coin.mjs';
import minimist from "minimist";
var arg = minimist(process.argv.slice(2));

const calls = args.call
console.log(coin.flipACoin(calls))

