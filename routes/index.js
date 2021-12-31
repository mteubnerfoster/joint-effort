const router = require('express').Router();
<<<<<<< HEAD
const homeRoutes = require('./homeRoutes')
const testRoutes = require('./testingRoutes')

router.use('/', homeRoutes);
router.use('/test', testRoutes);

=======
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
>>>>>>> 08ca5fcef99b64ebe46ebfe3761720caa7461517

module.exports = router;


