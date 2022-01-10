const { SearchHistory } = require("../models");
const { User } = require("../models");

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
  const userData = await SearchHistory.findAll({
    include: [
      {
        model: User,
        attributes: ['id'],
      }, 
    ],
    where: {
      user_id: req.session.userId,
    },
  })
  console.log(userData)
  res.render("userprofile", {
    userData
  });
});


module.exports = router;
