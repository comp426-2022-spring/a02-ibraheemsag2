import * as coin from './modules/coin.mjs';
import minimist from "minimist";
var arg = minimist(process.argv.slice(2));
if(arg["call"] == "heads" || arg["call"] == "tails"){
    console.log(coin.flipACoin(arg["call"]))}
else if(arg["call"] == null){
    console.error("Error: no input.")
    console.error("Usage: node guess-flip --call=[heads|tails]")
    process.exit();
}
else{
    console.error("Usage: node guess-flip --call=[heads|tails]")
    process.exit();
}


