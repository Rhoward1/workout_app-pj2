const router = require('express').Router();
const { Workout_log } = require('../../models');

router.post('/', async(req, res) => {
    try{
      const compWorkoutData = await Workout_log.create( {
        // date: req.body.date,
        length: req.body.length,
        rating: req.body.rating
      });
      res.status(200).json(compWorkoutData)
    }catch (err) {
      res.status(400).json(err);
    }});





// const path = require('path');
// router.get("/completed-workouts", (req,res) => {
//     const userInput =  CompWorkout.create({
//         date: "02.28.92",
//         length: "10mins",
//         rating: "10/10"
//     })
//     console.log("User work out: ", userInput)
// }) 

// const userInput = await CompWorkout.create({
//     date: "02.28.92",
//     length: "10mins",
//     rating: "10/10"
// })
// console.log("User work out: ", userInput)

// console.log(userInput.stringify(datelength.rating )

module.exports =router