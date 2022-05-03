const router = require('express').Router();
const exersiseRoutes = require("./exerciseRoutes")
const memberRoute = require('./memberRoute')
const logRoute= require('./logRoutes')


router.use ('/exercise', exersiseRoutes)
router.use('/member', memberRoute);
router.use('/logged-workout', logRoute);

module.exports = router;