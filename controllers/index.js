const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const foodRoutes = require('./foodRoutes')

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/food', foodRoutes);

module.exports = router;


