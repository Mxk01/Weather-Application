// 1. Write a geocode function  
// 2. Make 3 error case tests
// 3. Return longitude,latitude and location (in case there was no error)
// 4. Use your function in app.js
// 5. Test your work;

let request = require('request');
// geocode takes in two parameters  1: adress,2: callback
const geocode = (adress,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${adress}.json?access_token=pk.eyJ1Ijoic2VjcmV0Y29kZXJ6MSIsImEiOiJjazZuY2VyaTkwdDA2M3RsaWhnbHRtNzFrIn0._-SyqGXNbYmzVHOiLMnfWw&limit=1`;
    request({url,json:true},(error,{body})=>{ // {body} to select just body and use it as a variable instead of response
    
        if(error)
     {
     callback('Unable to connect',undefined);
     }
     else if(body.features.length==0)
     {
     callback('Unable to access the service',undefined);
     }
     else{
         callback(undefined,
            {
            latitude:body.features[0].center[1],
            longitude:body.features[0].center[0],
            location:body.features[0].place_name    
            })
     }
    })
}

module.exports= geocode;




























// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2VjcmV0Y29kZXJ6MSIsImEiOiJjazZuY2VyaTkwdDA2M3RsaWhnbHRtNzFrIn0._-SyqGXNbYmzVHOiLMnfWw&limit=1';

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode




/* const geocode (adress,callback) {
     request
}*/

