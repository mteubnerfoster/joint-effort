const router = require("express").Router();

router.post("/", async (req, res) => {
    req.session.save(() => {
        req.session.searchResults = req.body
        res.status(200).send('ok');
    });
});

router.get("/", async (req, res) => {
    console.log(req.session.searchResults)
    res.status(200).render("searchResults", { searchResults: req.session.searchResults, googleMapsApiKey: process.env.GOOGLEMAP_APIKEY });
});

module.exports = router;
