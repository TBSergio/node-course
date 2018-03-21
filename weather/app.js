
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const request = require('request');
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
// geocode.geocodeAddress(address,(errorMsg,results)=>{
//     if(errorMsg)
//         console.log(errorMsg);
//     else
//         console.log(JSON.stringify(results,undefined,2));
// });

request({
    url: 'https://api.darksky.net/forecast/f1f704bc884486b82ab95f6b0afa628c/37.8267,-122.4233',
    json: true
},(error,response,body)=>{
    if(error)
        console.log("Can not connect to servers");
    else if(response.code === 400)
        console.log("Bad Request");
    else{
        console.log(body.currently.temperature);
    }
});