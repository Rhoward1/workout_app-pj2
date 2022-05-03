const router = require('express').Router();
const path = require('path');
const axios = require("axios");


// router.get('/exercise', (req, res) => {
//   res.render('exercise')
// })

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
.then(function (response) {
 return response.data
  }).then (function (exercises){
    const workouts = getRandomWorkout(exercises)
    res.json(workouts)
    // console.log(exercise)
  })
  .catch(function (error) {
	console.error(error);
});
})

function getRandomWorkout(exercises) {
  const randomWorkoutArray=[]
  for (let i=0; i < 4; i++) {
    const indexNum = Math.floor(Math.random() * exercises.length)
  const randomWorkout = exercises[indexNum]
  randomWorkoutArray.push(randomWorkout)
  }
  return randomWorkoutArray
}

//create a function that picks random workouts from the api (at least 4)
//inclued in the pick is name of workout, target muscle, gifUrl
//.filter() the results to only take params that I desire
//use math.random()?
//create a model for the information?

module.exports =router