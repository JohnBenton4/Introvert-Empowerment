'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Challenge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
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