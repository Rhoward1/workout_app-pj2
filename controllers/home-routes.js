const router = require('express').Router();
const {Member, PastWorkouts }= require("../models")

router.get('/', (req, res) => {
  res.render('landingpage')
  // res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));
})

router.get('/past_workouts', async (req, res) => {
  try {
    const memberData = await Member.findByPk(req.session.member_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: PastWorkouts}],
    });
    console.log(memberData)
    const member = memberData.get({plain: true});
    res.render('pastworkouts')
    // console.log(member)
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/login', (req, res) => {
  // if (req.session.logged_in) {
  //   res.redirect('/pastworkouts');
  //   return;
  // }
  res.render('login')
 
})


router.get('/signup', (req, res) => {
  res.render('signup')
 
})

router.get('/randomexercise', (req, res) => {
  res.render('randomExercise')
})

router.get('/testpastworkout', (req, res) => {
  res.render('pastworkouts')
})
module.exports = router