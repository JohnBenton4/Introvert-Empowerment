'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserConversation extends Model {
    
  }
  UserConversation.init(
    {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    conversationId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Conversations',
        key: 'id',
      }
    },
  },
  {
    sequelize,
    modelName: 'UserConversation',
  });
  return UserConversation;
};