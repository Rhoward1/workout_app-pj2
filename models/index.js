const Member = require('./member');
const PastWorkout = require('./pastWorkout')

Member.hasMany(PastWorkout, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});

PastWorkout.belongsTo(Member, {
    foreignKey: 'member_id',
})

module.exports = { Member, PastWorkout }

