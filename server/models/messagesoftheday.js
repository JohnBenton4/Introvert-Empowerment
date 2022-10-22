'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MessagesOfTheDay extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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