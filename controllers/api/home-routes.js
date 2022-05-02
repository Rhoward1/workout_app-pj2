const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.render('home')
  // res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
})
module.exports = router