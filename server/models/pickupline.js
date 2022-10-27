'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PickupLine extends Model {
   
    static associate(models) {
    }
  }
  PickupLine.init({
    line: DataTypes.STRING,
    lineId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PickupLine',
  });
  return PickupLine;
};