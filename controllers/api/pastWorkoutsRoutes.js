//required packages
const router = require('express').Router();
const { PastWorkouts } = require('../../models');

//create a new log
router.post('/', async(req, res) => {
    try{
      const compWorkoutData = await PastWorkouts.create({
        ...req.body,
        member_id: req.session.member_id,
      });
      res.status(200).json(compWorkoutData)
    }catch (err) {
      res.status(400).json(err);
    }});

    router.delete('/:id', async (req, res) => {
      try {
        const workoutData = await PastWorkouts.destroy({
          where: {
            id: req.params.id,
            member_id: req.session.member_id,
          },
        });
    
        if (!workoutData) {
          res.status(404).json({ message: 'No project found with this id!' });
          return;
        }
    
        res.status(200).json(workoutData);
      } catch (err) {
        res.status(500).json(err);
      }
    });

module.exports = router;