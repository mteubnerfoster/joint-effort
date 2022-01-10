const router = require("express").Router();

router.post("/", async (req, res) => {
    req.session.save(async () => {
        req.session.searchResults = await req.body;
        res.status(200).send('ok');
    });
});

router.get("/", async (req, res) => {
    let searchResults = req.session.searchResults
    req.session.save(async () => {
        req.session.searchResults = [];
    });
    res.status(200).render("searchResults", { searchResults, googleMapsApiKey: process.env.GOOGLEMAP_APIKEY });
});

module.exports = router;
