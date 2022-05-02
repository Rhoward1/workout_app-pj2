const router = require('express').Router();

// const userRoutes = require('./user-routes');
const exersiseRoutes = require("./exerciseRoutes")

// router.use('/users', userRoutes);
router.use ('/exercise', exersiseRoutes)

module.exports = router;