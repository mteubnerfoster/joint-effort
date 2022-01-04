const router = require('express').Router();
const yelp = require('yelp-fusion');

const client = yelp.client(process.env.YELP_APIKEY);
const fs = require('fs');

router.get('/', async (req, res) => {
    console.log(req.query)

    client.search({
        term: req.query.food,
        latitude: req.query.lat,
        longitude: req.query.long,
        categories: req.query.category,
        sort_by: 'distance',
        limit: 20,
    }).then(response => {
        // saveJSON(response.jsonBody.businesses)
        let sampleOutput = response.jsonBody.businesses
        let i = 0;
        sampleOutput.forEach(element => {
            console.log(i)
            console.log(element)
            i++;
        });
    }).catch(e => {
        console.log(e);
    });


    res.status(200).json('in api/yelp');
});



// helper functions if we run out of api calls
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