const Member = require('./member');
const PastWorkouts = require('./pastWorkouts')

Member.hasMany(PastWorkouts, {
    foreignKey: 'member_id',
    onDelete: 'CASCADE'
});

PastWorkouts.belongsTo(Member, {
    foreignKey: 'member_id',
})

module.exports = { Member, PastWorkouts }

