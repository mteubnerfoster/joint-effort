const router = require('express').Router();
const yelp = require('yelp-fusion');
//tbd put in .env
const client = yelp.client('ny7qDYbJxsMNJj5SPENk8V8dOBMpfFVacFqszDeSaICyu3Lla83Tv5EMqgvB83HZE_oM1_5FoljDNsdK9-mtHz2_1yCEviEmFuzl4uTCpNr77-eX1P4Cgc5xNE3FYXYx');
const fs = require('fs');

router.get('/', async (req, res) => {
    console.log(req.query)

    client.search({
        term: req.query.food,
        latitude: req.query.lat,
        longitude: req.query.long,
        sort_by: 'distance',
        categories: 'foodtrucks',
        limit: 20,
    }).then(response => {
        saveJSON(response.jsonBody.businesses)
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
    // todo
    // get yelp search using user input search term and location

    res.status(200).json('in api/yelp');
});



// helper functions
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


module.exports = router