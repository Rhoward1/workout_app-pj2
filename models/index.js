const Member = require('./member');
const PastWorkout = require('./pastWorkout')
// const Workout_log = require("./workoutLog")
// const CompWorkout = require('./compWorkout');
// const CompWorkout = require('./compWorkout')

Member.hasMany(PastWorkout, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});

PastWorkout.belongsTo(Member, {
    foreignKey: 'member_id',
})



module.exports = { Member, PastWorkout }
    // Workout_log}
// CompWorkout };
