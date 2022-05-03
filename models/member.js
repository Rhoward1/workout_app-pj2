const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connections');

class Member extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Member.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    member_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          isAlphanumeric: true,
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   len: [10],
      // },
    },
  },
  {
    hooks: {
      beforeCreate: async (newMember) => {
        newMember.password = await bcrypt.hash(newMember.password, 10);
        return newMember;
      },
      beforeUpdate: async (updateNewMember) => {
        updateNewMember.password = await bcrypt.hash(updateNewMember.password, 10);
        return updateNewMember;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'member',
  }
);

module.exports = Member;