'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Conversation extends Model {
   
    static associate(models) {
    }
  }
  Conversation.init({
    conversationStarter: DataTypes.STRING,
    category: DataTypes.STRING,
    level: DataTypes.INTEGER,
    conversationId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Conversation',
  });
  return Conversation;
};