'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPickupLine extends Model {
   
    static associate(models) {
    }
  }
  UserPickupLine.init(
    {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    pickuplineID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'PickupLines',
        key: 'id',
      }
  },
}, 
  {
    sequelize,
    modelName: 'UserPickupLine',
  }
  );
  return UserPickupLine;
};