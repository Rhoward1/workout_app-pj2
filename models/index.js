const Member = require('./member');
const Log = require('./log')
// const Workout_log = require("./workoutLog")
// const CompWorkout = require('./compWorkout');
// const CompWorkout = require('./compWorkout')


// Log.belongsTo(Member, {
//     foreignKey: 'member_id',
// })
// Member.hasMany(Log, {
//     foreignKey: 'member_id',
// })


module.exports = { Member, Log }
    // Workout_log}
// CompWorkout };
