const router = require('express').Router();
const apiRoutes = require('./api');
<<<<<<< HEAD
// const htmlRoutes = require('./html/html-routes');

router.use('/api', apiRoutes);
// router.use('/', htmlRoutes);
=======
const htmlRoutes = require('./html/html-routes');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
