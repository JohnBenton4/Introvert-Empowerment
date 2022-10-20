'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
User.belongsToMany(models.Challenge, {
  as: 'challenges',
  through: models.UserChallenge,
  forignKey: 'userID',
  otherKey: 'challengeID',
});  }


  }

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};