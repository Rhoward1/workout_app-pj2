const router = require('express').Router();
// const userRoutes = require('./user-routes');
const exersiseRoutes = require("./exerciseRoutes")
const memberRoute = require('./memberRoute')

// router.use('/users', userRoutes);

router.use ('/exercise', exersiseRoutes)
router.use('/member', memberRoute);

module.exports = router;