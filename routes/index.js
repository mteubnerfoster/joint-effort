const router = require('express').Router();
const homeRoutes = require('./homeRoutes')
const testRoutes = require('./testingRoutes')

router.use('/', homeRoutes);
router.use('/test', testRoutes);


module.exports = router;


