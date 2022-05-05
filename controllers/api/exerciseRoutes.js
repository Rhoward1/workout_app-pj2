//required packages
const router = require('express').Router();
const axios = require("axios");

//renders the url when bodypart and equipment are passed in the dropdown menu
router.get("/exercisedb/:bodypart?/:equipment?", (req, res) => {

  //creates a variable to hold the parameter passed in equipment
const equipmentRequest = req.params.equipment

//when a parameter is passed for bodypart, it will take it from this api call
if (req.params.bodypart) {

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+ req.params.bodypart,
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '887b3d8520msh47ace34cf1f5cc5p1409dejsn76d5666871fb'
  }
};

//rednering the api call and calling getRandomWorkout function and then rendering it onto the homepage
axios.request(options)
  .then (function (exercises){
    const workouts = getRandomWorkout(exercises.data, equipmentRequest)
    // console.log(workouts)
    res.render("home", {workouts})
    // console.log(exercise)
  })
  .catch(function (error) {
	console.error(error);
});
}else {
  res.render('home')
}
});

//function that generates a random workout first filtered by equipment, then filtered by bodypart and pushes it into the randomworkoutArray
function getRandomWorkout(exercises, equipment) {
  const randomWorkoutArray=[]
  const filterByEquipment = exercises.filter(workout => {
    return workout.equipment === equipment
  })
  console.log(filterByEquipment)
  for (let i=0; i < 4; i++) {
    const indexNum = Math.floor(Math.random() * filterByEquipment.length)
  const randomWorkout = filterByEquipment[indexNum]
  const workoutBodypart = randomWorkout.bodyPart
  const workoutName = randomWorkout.name
  const workoutGif = randomWorkout.gifUrl
  const workoutTarget = randomWorkout.target
  const workoutEquipment = randomWorkout.equipment
  randomWorkoutArray.push({workoutBodypart, workoutName, workoutGif, workoutTarget,workoutEquipment })
  }
  return randomWorkoutArray
}


module.exports =router

