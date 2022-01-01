'use strict';
const router = require('express').Router();
const yelp = require('yelp-fusion');
//tbd put in .env
const client = yelp.client('ny7qDYbJxsMNJj5SPENk8V8dOBMpfFVacFqszDeSaICyu3Lla83Tv5EMqgvB83HZE_oM1_5FoljDNsdK9-mtHz2_1yCEviEmFuzl4uTCpNr77-eX1P4Cgc5xNE3FYXYx');
const fs = require('fs');


//stuff required from user
//get through js of previous page
let userLat = '47.6055498';
let userLon = '-122.3587698';
//get through search bar
let searchTerm = 'chicken';

router.get('/', async (req, res) => {

  // outputJSON();

  client.search({
    term: searchTerm,
    latitude: userLat,
    longitude: userLon,
    sort_by: 'distance',
    categories: 'foodtrucks',
    limit: 20,
  }).then(response => {
    saveJSON(response.jsonBody.businesses)
    // console.log(response.body)
    // let sampleOutput = JSON.parse(response.body);
    // let sampleOutput = response.jsonBody.businesses
    // let i = 0;
    // sampleOutput.forEach(element => {
    //   console.log(i)
    //   console.log(element)
    //   i++;
    // });
    // console.log(sampleOutput)
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
