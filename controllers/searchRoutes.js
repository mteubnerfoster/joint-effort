const router = require("express").Router();
const fs = require("fs");

router.post("/", async (req, res) => {
    req.session.save(() => {
        req.session.foodTrucks = req.body
        res.status(200).send('ok');
    });
});

router.get("/", async (req, res) => {
    // console.log(req.body)
    // console.log(req.session.foodTrucks)
    res.status(200).render("searchResults", { foodTrucks: req.session.foodTrucks, googleMapsApiKey: process.env.GOOGLEMAP_APIKEY});
});

module.exports = router;
