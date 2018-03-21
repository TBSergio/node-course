
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');

var argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help().alias('help','h').argv;

var address=encodeURIComponent(argv.a);
geocode.geocodeAddress(address,(errorMsg,results)=>{
    if(errorMsg)
        console.log(errorMsg);
    else
        console.log(JSON.stringify(results,undefined,2));
});
