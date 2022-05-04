const router = require('express').Router();
const path = require('path');
const axios = require("axios");

router.get("/exercisedb", (req, res) => {

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffecbc0c5bmsh1b1e1f8931b2919p19bed9jsn020739a3d4e0'
  }
};


axios.request(options)
// .then(function (response) {
//  return response.data
  // })
  .then (function (exercises){
    // console.log(exercises)
    const workouts = getRandomWorkout(exercises.data)
    // console.log(workouts)
    res.render("home", {workouts})
    // res.json(workouts)
    // console.log(exercise)
  })
  .catch(function (error) {
	console.error(error);
});
})

const randomWorkoutArray=[]
function getRandomWorkout(exercises) {

  for (let i=0; i < 4; i++) {
  const indexNum = Math.floor(Math.random() * exercises.length)
  const randomWorkout = exercises[indexNum]
  const workoutBodypart = randomWorkout.bodyPart
  const workoutName = randomWorkout.name
  const workoutGif = randomWorkout.gifUrl
  const workoutTarget = randomWorkout.target
  randomWorkoutArray.push({workoutBodypart, workoutName, workoutGif, workoutTarget})
  }
  return randomWorkoutArray
}

// const newExerciseArray= options.filter(function(options) {
//   return options.name
  
// })
// console.log(newExerciseArray)
module.exports =router