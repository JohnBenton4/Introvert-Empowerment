'use strict';

const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsToMany(models.Challenge, {
        as: 'challenges',
        through: models.UserChallenge,
        foreignKey: 'userId',
        otherKey: 'challengeId',
      });

      User.belongsToMany(models.Conversation, {
        as: 'conversations',
        through: models.UserConversation,
        foreignKey: 'userId',
        otherKey: 'conversationId',
      });

      User.belongsToMany(models.PickupLine, {
        as: 'pickuplines',
        through: models.UserPickupLine,
        foreignKey: 'userId',
        otherKey: 'pickupLineId',
      });
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING
  },
    {
      hooks: {
        async beforeCreate(user) {
          user.password = await bcrypt.hash(user.password, 10);
        },
      },
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};