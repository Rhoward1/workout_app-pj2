const router = require('express').Router();
const exersiseRoutes = require("./exerciseRoutes")
const memberRoute = require('./memberRoute')
const workout_log= require('./logRoutes')


router.use ('/exercise', exersiseRoutes)
router.use('/member', memberRoute);
router.use('/completed-workout', workout_log)

module.exports = router;