const router = require('express').Router();
<<<<<<< HEAD
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
=======
const commentRoutes = require('./comment-routes');
const pizzaRoutes = require('./pizza-routes');

router.use('/comments', commentRoutes);
router.use('/pizzas', pizzaRoutes);
>>>>>>> 6c0bafd601027458e103e2b9569e976961730c36

module.exports = router;
