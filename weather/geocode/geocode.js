const request = require('request');

var geocodeAddress = (address,callback) => {
request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+ address
    +'&key='+'AIzaSyCJ3EmaWhdblW75Nflr5A85DJDvqTTSWCk',
    json: true
},(error,response,body)=>{
    if(error){
       callback('Unable to connect to google servers');
    }
    else if(body.status === 'ZERO_RESULTS'){
       callback('Unable to find the address');
    }
    else if(body.status === 'OK'){
         callback(undefined,{
            address: body.results[0].formatted_address,
            lat: body.results[0].geometry.location.lat,
            lng:body.results[0].geometry.location.lng
        })
    }
});};

module.exports = {
    geocodeAddress
};
