const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Log extends Model {}

Log.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        // date: {
        //     type: DataTypes.DATEONLY,
        //     defultValue: DataTypes.NOW,
        // },
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
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'log',
    }
);

module.exports= Log;