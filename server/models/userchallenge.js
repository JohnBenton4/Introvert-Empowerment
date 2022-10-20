'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserChallenge extends Model {

    static associate(models) {
    }
  }
  UserChallenge.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        reference: {
          model: 'Users',
          key: 'id',
        }
      },
      challengeID: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Challenges',
          key: 'id',
        }
      },
    },
    {
      sequelize,
      modelName: 'UserChallenge',
    }
  );
  return UserChallenge;
};