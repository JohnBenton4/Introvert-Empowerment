'use strict';

const bcrypt = require('bcrypt');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.belongsToMany(models.Challenge, {
        as: 'challenges',
        through: models.UserChallenge,
        forignKey: 'userId',
        otherKey: 'challengeId',
      });
    }

    static associate(models) {
      User.belongsToMany(models.Conversation, {
        as: 'conversations',
        through: models.UserConversation,
        forignKey: 'userId',
        otherKey: 'conversationId',
      });
    }

    static associate(models) {
      User.belongsToMany(models.PickupLine, {
        as: 'pickuplines',
        through: models.UserPickupLine,
        forignKey: 'userId',
        otherKey: 'pickuplineId',
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