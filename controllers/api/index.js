const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const yelpRoutes = require('./yelpRoutes')

router.use('/users', userRoutes);
router.use('/yelp', yelpRoutes)

module.exports = router;