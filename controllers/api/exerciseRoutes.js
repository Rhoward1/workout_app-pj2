const router = require('express').Router();
const axios = require("axios");

router.get("/exercisedb/:bodypart?/:equipment?", (req, res) => {
console.log(req.params.bodypart)
if (req.params.bodypart) {


const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/'+ req.params.bodypart,
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': '887b3d8520msh47ace34cf1f5cc5p1409dejsn76d5666871fb'
  }
};
// console.log(req.params.bodypart)


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
}else {
  res.render('home')
}

})



function getRandomWorkout(exercises) {
  // console.log(exercises)
  const randomWorkoutArray=[]
  const filterByEquipment = exercises.filter(workout => {
    return workout.equipment === "barbell" || 
     workout.equipment === "body weight" ||
     workout.equipment === "band" 
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
// console.log(randomWorkoutArray)
  
 
  // console.log(filterByEquipment)

  }
  // console.log(randomWorkoutArray)
  return randomWorkoutArray
}

// const randomWorkoutArray=[]
// function getRandomWorkout(exercises) {

//   for (let i=0; i < 4; i++) {
//     const indexNum = Math.floor(Math.random() * exercises.length)
//   const randomWorkout = exercises[indexNum]
//   const workoutBodypart = randomWorkout.bodyPart
//   const workoutName = randomWorkout.name
//   const workoutGif = randomWorkout.gifUrl
//   const workoutTarget = randomWorkout.target
//   randomWorkoutArray.push({workoutBodypart, workoutName, workoutGif, workoutTarget})
//   }
//   conso
//   return randomWorkoutArray

// const newExerciseArray= options.filter(function(options) {
//   return options.name
  
// })
// console.log(newExerciseArray)
module.exports =router