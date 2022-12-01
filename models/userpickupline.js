'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPickupLine extends Model {
   
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
    pickupLineId: {
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