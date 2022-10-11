'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ConversationEmpowerment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ConversationEmpowerment.init({
    text: DataTypes.STRING,
    author: DataTypes.STRING,
    conversationid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ConversationEmpowerment',
  });
  return ConversationEmpowerment;
};