const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.render('main')

})
module.exports= router