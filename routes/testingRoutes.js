'use strict';
const router = require('express').Router();
const yelp = require('yelp-fusion');
const client = yelp.client('ny7qDYbJxsMNJj5SPENk8V8dOBMpfFVacFqszDeSaICyu3Lla83Tv5EMqgvB83HZE_oM1_5FoljDNsdK9-mtHz2_1yCEviEmFuzl4uTCpNr77-eX1P4Cgc5xNE3FYXYx');
const fs = require('fs');
let userLat = '47.6055498';
let userLon = '-122.3587698';

router.get('/', async (req, res) => {

  // outputJSON();

  client.search({
    term: 'Food Truck',
    latitude: userLat,
    longitude: userLon,
    sort_by: 'distance',
  }).then(response => {
    // saveJSON(response.body)
    // console.log(response.body)
  }).catch(e => {
    console.log(e);
  });

  res.render('testingZone');
});

function saveJSON(response) {
  const data = JSON.stringify(response);
  fs.writeFile('sampleData.json', data, (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  })
}

function outputJSON() {
  let jsonSampleFile = require('../sampleData.json');
  let outputJson = JSON.parse(jsonSampleFile);
  console.log(outputJson)

}


module.exports = router;
