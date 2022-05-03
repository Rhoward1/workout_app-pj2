const Member = require('./member');
const Log = require('./log')
// const Workout_log = require("./workoutLog")
// const CompWorkout = require('./compWorkout');
// const CompWorkout = require('./compWorkout')


// CompWorkout.belongsTo(Member, {
//     foreignKey: 'member_id',
// })
// Member.hasMany(CompWorkout, {
//     foreignKey: 'member_id',
// })


module.exports = { Member, Log }
    // Workout_log}
// CompWorkout };
