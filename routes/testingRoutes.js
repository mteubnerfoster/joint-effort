const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('kevin');
});
module.exports = router;
