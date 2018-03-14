const request = require('request');

request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombart%20street%20pheladelphia'
    +'&key='+ process.env.GOOGLE_API_KEY,
    json: true
},(error,response,body)=>{
    console.log(body);
});