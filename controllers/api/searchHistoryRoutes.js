const router = require("express").Router();
const { SearchHistory } = require("../../models");
const authWith = require('../../utils/auth')

router.post("/", authWith, (req, res) => {
    console.log(req.body)
    SearchHistory.create({
      truck_name: req.body.truck_name,
      dispensary_name: req.body.dispensary_name,
      image: req.body.image,
      user_id: req.session.userId
    })
    .then(dbdbUserData => {
        res.json(dbdbUserData);
      })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  module.exports = router