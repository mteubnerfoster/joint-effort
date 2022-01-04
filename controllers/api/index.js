const router = require('express').Router();

const userRoutes = require('./userRoutes.js');

router.use('/User', userRoutes);

module.exports = router;