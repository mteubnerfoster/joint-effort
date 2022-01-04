const router = require('express').Router();

const userRoutes = require('./userRoutes');

router.use('/User', userRoutes);

module.exports = router;