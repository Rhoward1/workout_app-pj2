const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class PastWorkouts extends Model {}

PastWorkouts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
          },

        sets: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reps: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        member_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "member",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pastWorkout',
    }
);

module.exports= PastWorkouts;