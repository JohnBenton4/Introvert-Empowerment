'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessagesOfTheDay extends Model {
   
    static associate(models) {
    }
  }
  MessagesOfTheDay.init({
    text: DataTypes.STRING,
    author: DataTypes.STRING,
    messageId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MessagesOfTheDay',
  });
  return MessagesOfTheDay;
};