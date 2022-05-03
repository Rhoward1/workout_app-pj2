const router = require('express').Router();
const { PastWorkout } = require('../../models');

router.get('/', async(req, res)=> {
  try {
    const logData = await PastWorkout.findAll()
    // Log.findAll().then((logData) => {
      // res.json(logData);
    // });
    const logs = logData.map((log) => log.get({ plain: true}));
    res.render('pastWorkouts', {logs})
  }
    catch(err) {
    res.status(500).json(err);
  };
  
  
});

//create a new log
router.post('/', async(req, res) => {
  // console.log(req.body)
    try{
      const compWorkoutData = await PastWorkout.create({
        ...req.body,
        member_id: req.session.member_id,
        //        length: req.body.length,
        // rating: req.body.rating
      });
      console.log(compWorkoutData)

      res.status(200).json(compWorkoutData)
    }catch (err) {
      res.status(400).json(err);
    }});


module.exports = router;