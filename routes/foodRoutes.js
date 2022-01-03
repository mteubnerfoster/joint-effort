const router = require('express').Router();

router.get('/search', async (req, res) => {
    res.render('foodSearch');
});

module.exports = router;
