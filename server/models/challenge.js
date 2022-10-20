'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    
    static associate(models) {
      Challenge.belongsTo(models.User, {
        through: models.UserChallenge,
        foreignKey: 'challengeId',
        otherKey: 'userId',
      });
    };
  }
Challenge.init({
  challenge: DataTypes.STRING,
  category: DataTypes.STRING,
  uniqueid: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Challenge',
});
return Challenge;
};