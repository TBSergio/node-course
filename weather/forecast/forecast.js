const request = require('request');

var getWeather = (lng,lat,callback) => {
request({
    url: `https://api.darksky.net/forecast/f1f704bc884486b82ab95f6b0afa628c/${lat},${lng}`,
    json: true
},(error,response,body)=>{
    if(error)
        callback('Can not connect to server');
    else if(body.code === 400)
        callback(body.error);
    else{
       callback(undefined,body.currently.temperature);
    }
});};

module.exports = {
    getWeather
};