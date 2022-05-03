const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Workout_log extends Model {}

Workout_log.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            defultValue: DataTypes.NOW,
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
        modelName: 'workout_log',
    }
);

module.exports= Workout_log;