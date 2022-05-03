const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.render('home')
  // res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
})

router.get('/login', (req, res) => {
  res.render('login')
 
})

router.get('/signup', (req, res) => {
  res.render('signup')
 
})

module.exports = router