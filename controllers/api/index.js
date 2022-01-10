const router = require('express').Router();

const userRoutes = require('./userRoutes.js');
const yelpRoutes = require('./yelpRoutes')
const searchHistoryRoutes = require('./searchHistoryRoutes')

router.use('/users', userRoutes);
router.use('/yelp', yelpRoutes)
router.use('/searchHistory', searchHistoryRoutes)

module.exports = router;