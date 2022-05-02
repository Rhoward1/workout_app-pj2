const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class CompWorkout extends Model { }

CompWorkout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        length: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDecimal: true,
                isAlphanumeric: true,
            }
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isDecimal: true,
            }

        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comp_workouts',
    }
);

module.exports = CompWorkout;