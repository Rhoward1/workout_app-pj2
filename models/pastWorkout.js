const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class PastWorkout extends Model {}

PastWorkout.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // date_created: {
        //     type: DataTypes.DATE,
        //     allowNull: false,
        //     defaultValue: DataTypes.NOW,
        //   },
        length: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        member_id: {
            type: DataTypes.INTEGER,
            references:{
                model: "memeber",
                key: "id",
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'log',
    }
);

module.exports= PastWorkout;