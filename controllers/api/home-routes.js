const router = require('express').Router();
const path = require('path');

router.get('/', async(req, res) => {
  res.render('main')

})
module.exports= router