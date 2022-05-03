const router = require('express').Router();
const exersiseRoutes = require("./exerciseRoutes")
const memberRoute = require('./memberRoute')
const pastWorkoutRoutes= require('./pastWorkoutRoutes')


router.use ('/exercise', exersiseRoutes)
router.use('/member', memberRoute);
router.use('/past-workout', pastWorkoutRoutes);

module.exports = router;