const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const foodRoutes = require('./foodRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/food', foodRoutes);

module.exports = router;


