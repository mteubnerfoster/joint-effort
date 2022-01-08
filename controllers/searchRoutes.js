const router = require("express").Router();

router.post("/", async (req, res) => {
    console.log('before session save', req.body)
    req.session.save(async () => {
        req.session.searchResults = await req.body;
        res.status(200).send('ok');
    });
});

router.get("/", async (req, res) => {
    console.log(req.session.searchResults)
    res.status(200).render("searchResults", { searchResults: req.session.searchResults, googleMapsApiKey: process.env.GOOGLEMAP_APIKEY });
});

module.exports = router;
