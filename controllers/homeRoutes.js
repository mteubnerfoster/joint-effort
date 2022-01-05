const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/plant", async (req, res) => {
  res.render("choosePlant");
});

router.get("/final-results", async (req, res) => {
  res.render("finalResults", {googleMapsApiKey: process.env.GOOGLEMAP_APIKEY});
});

router.get("/login", async (req, res) => {
  res.render("login");
});

module.exports = router;
