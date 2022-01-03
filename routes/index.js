const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
const testRoutes = require('./testingRoutes')
const foodRoutes = require('./foodRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/test', testRoutes);
router.use('/food', foodRoutes);

module.exports = router;


