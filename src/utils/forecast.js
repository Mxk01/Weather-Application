// Goal: Create a reusable function for getting the forecast
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

let request = require('request');


let forecast = (latitude,longitude,callback) => { 
    let url = `https://api.darksky.net/forecast/b3bf363d6e8baed3d9e066cafe1aecaf/${latitude},${longitude}`;
    request({url,json:true},(error,{body})=>
    {



     if(error)
     {
      callback('Unable to connect to service',undefined); //  Undefined means we won't return any data back.
     }

     else if(body.error) 
     {
     callback('Unable to find location',undefined);
     }
     
     
    
    else
    {
    callback(undefined,`${body.daily.data[0].summary},There is a ${body.currently.precipProbability}% probability of rain`);
    }
    
    })
    };



module.exports = forecast;



















// const request = require('request');

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/b3bf363d6e8baed3d9e066cafe1aecaf/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + % chance of rain.`)
//         }
//     })
// }

// module.exports = forecast;