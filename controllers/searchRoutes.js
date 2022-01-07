const router = require("express").Router();
const fs = require("fs");

router.get("/", async (req, res) => {
    res.render("searchResults");
});


module.exports = router;
