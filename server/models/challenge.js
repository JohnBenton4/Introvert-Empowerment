'use strict';
const {  Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    
  }
Challenge.init({
  challenge: DataTypes.STRING,
  category: DataTypes.STRING,
  uniqueId: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Challenge',
});
return Challenge;
};