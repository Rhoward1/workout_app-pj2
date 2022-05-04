const router = require('express').Router();
const { PastWorkouts } = require('../../models');


//create a new log
router.post('/', async(req, res) => {
  // console.log(req.body)
    try{
      const compWorkoutData = await PastWorkouts.create({
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