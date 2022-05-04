const router = require('express').Router();
const {Member, PastWorkouts }= require("../models")

router.get('/', (req, res) => {

  res.render('landingpage')
})


router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup') 
  // res.sendFile(path.join(__dirname, '../views/layouts/main.handlebars'));

})

router.get('/past_workouts', async (req, res) => {
  try {
    const memberData = await Member.findByPk(req.session.member_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: PastWorkouts}],
    });
    // console.log(memberData)
    const member = memberData.get({plain: true});
    console.log(member)
    res.render('pastworkouts', member)
    // console.log(member)
  } catch (err) {
    res.status(500).json(err);
  }
})

// router.get('/randomexercise', (req, res) => {
//   try{
//     const exerciseData = await
//   }
//   res.render('randomExercise')
// })

module.exports = router