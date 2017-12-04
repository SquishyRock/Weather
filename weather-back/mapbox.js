import './config.js';

const express = require('express'),
  app = express();
const bodyParser = require('body-parser');
const axios = require('axios');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.post('/', function(req, res) {
  console.log(req.body)
  let long,
    lat;
  let city = req.body.text;
  let apiKey1 = key1; // For mapbox.com
  let url1 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${apiKey1}`
  let apiKey2 = key2; // For darksky.net

  axios.get(url1)
    .then(function(response) {
      var result = (response.data);
      lat = result.features[0].center[1];
      long = result.features[0].center[0];
      console.log('working ' + lat + ' ' + long)
      let url2 = `https://api.darksky.net/forecast/${apiKey2}/${lat},${long}`
      return axios.get(url2)
    })
    .then((response) => {
      weather = response.data
      res.send(weather)
    })
    .catch(function(error) {
      console.log('Error!' + error)
      res.send(error + 'Error from DarkSky')


    })
})

app.listen(8080, function() {
  console.log('express listening on: Port 8080');
})
