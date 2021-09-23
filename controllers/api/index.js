const router = require('express').Router();

const userRoutes = require('./user-routes');
const goalRoutes = require('./goal-routes');
const exercisesRoutes = require('./exercises-routes');

router.use('/users', userRoutes);
//tell express router which ones to use
//router.use('', exerciseRoutes);

module.exports = router;