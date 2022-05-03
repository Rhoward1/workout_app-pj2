const router = require('express').Router();
const exersiseRoutes = require("./exerciseRoutes")
const memberRoute = require('./memberRoute')
const workout_log= require('./workoutLogRoutes')


router.use ('/exercise', exersiseRoutes)
router.use('/member', memberRoute);
router.use('/completed-workout', workout_log)

module.exports = router;