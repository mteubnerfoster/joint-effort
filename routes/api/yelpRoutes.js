const router = require('express').Router();

router.get('/', async (req, res) => {
    console.log(req.query)
    // todo
    // get yelp search using user input search term and location

    res.status(200).json('in api/yelp');
});



module.exports = router