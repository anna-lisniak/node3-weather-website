const request = require('request');

const geocode = (addres, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${addres}.json?access_token=pk.eyJ1IjoibWFsYWV2IiwiYSI6ImNrOWN5cm42ODA4dWwza2xtOTdxM283ZmQifQ.kh8LE7FncNsrZb8YZ7ChWA&limit=1`;
    request({url, json: true }, (error, {body}) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode;