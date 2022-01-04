const router = require("express").Router();
const yelp = require("yelp-fusion");

const client = yelp.client(process.env.YELP_APIKEY);
const fs = require("fs");

router.get("/", async (req, res) => {

    client.search({
        term: req.query.term,
        latitude: req.query.lat,
        longitude: req.query.long,
        categories: req.query.category,
        sort_by: 'distance',
        limit: 30,
    }).then(response => {
        // saveJSON(response.jsonBody.businesses)
        let yelpOutput = response.jsonBody.businesses
        console.log(yelpOutput)
        res.render("foodResults", { yelpOutput });

    }).catch(e => {
        console.log(e);
    });
});

// helper functions if we run out of api calls
function saveJSON(response) {
    const data = JSON.stringify(response);
    fs.writeFile("sampleData.json", data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
    });
};

function outputJSON() {
    let jsonSampleFile = require("../sampleData.json");
    let outputJson = JSON.parse(jsonSampleFile);
    console.log(outputJson);
    return outputJson;
};

module.exports = router;
