let request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/c1c79c93374cb0e0b5e2439d84fd12f5/${latitude},${longitude}`;
    request({url, json:true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location!', undefined);
        } else {
            callback(undefined, `It is currently ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability}% chance of rain.` )
        }
    })
}

module.exports = forecast;