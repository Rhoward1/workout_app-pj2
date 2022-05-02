const router = require('express').Router();
const path = require('path');
const axios = require("axios");


router.get('/exercise', (req, res) => {
  res.render('exercise')

})

router.get("/exercisedb", (req, res) => {

const options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': 'ffecbc0c5bmsh1b1e1f8931b2919p19bed9jsn020739a3d4e0'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
})

module.exports =router