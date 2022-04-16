import * as coin from './modules/coin.mjs';
import minimist from "minimist";
var arg = minimist(process.argv.slice(2));

const num = arg["number"] || 1;
const array = coin.coinFlips(num);
console.log(array)
if(num == 1){
    console.log({[array] : 1})
}
else{
    console.log(coin.countFlips(array));
}
