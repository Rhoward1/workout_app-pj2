const router = require('express').Router();
const path = require('path');
const axios = require("axios");


router.get('/exercise', (req, res) => {
  res.render('exercise')
})

router.get("/exercisedb", (req, res) => {

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/equipment/body%20weight',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffecbc0c5bmsh1b1e1f8931b2919p19bed9jsn020739a3d4e0'
  }
};

axios.request(options).then(function (response) {
	res.json(response.data);
  // res.json(newPastWorkout);
}).catch(function (error) {
	console.error(error);
});

router.post("/search", (req,res) => {
  console.log(req.body)
  const{search} =req.body
  router.get
})
})

module.exports =router