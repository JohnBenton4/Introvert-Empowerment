'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pickuplines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pickuplines.init({
    line: DataTypes.STRING,
    lineid: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pickuplines',
  });
  return pickuplines;
};