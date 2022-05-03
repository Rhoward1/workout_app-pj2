const router = require('express').Router();
const { Log } = require('../../models');

// get the logged data
router.get('/', async(req, res)=> {
  try {
    const logData = await Log.findAll()
    // Log.findAll().then((logData) => {
    //   res.json(logData);
    // });
    const logs = logData.map((log) => log.get({ plain: true}));
    res.render('loggedWorkout', {logs})
  }
    catch(err) {
    res.status(500).json(err);
  };
  
  
});

//create a new log
router.post('/', async(req, res) => {
    try{
      const compWorkoutData = await Log.create( {
        length: req.body.length,
        rating: req.body.rating
      });
      res.status(200).json(compWorkoutData)
    }catch (err) {
      res.status(400).json(err);
    }});


module.exports = router;