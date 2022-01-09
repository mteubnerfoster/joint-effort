const router = require("express").Router();

router.get("/", async (req, res) => {
  res.render("home", {loggedIn: req.session.loggedIn});
});

// router.get("/plant", async (req, res) => {
//   res.render("choosePlant", {loggedIn: req.session.loggedIn});
// });

// router.get("/final-results", async (req, res) => {
//   res.render("finalResults", {googleMapsApiKey: process.env.GOOGLEMAP_APIKEY, loggedIn: req.session.loggedIn});
// });

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/userprofile", async (req, res) => {
  res.render("userprofile");
});


module.exports = router;
