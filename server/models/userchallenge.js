'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserChallenge extends Model {

  }
  UserChallenge.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        }
      },
      challengeId: {
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