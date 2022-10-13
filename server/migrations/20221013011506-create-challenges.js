'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('challenges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      challenge: {
        type: Sequelize.STRING
      },
      category: {
        type: Sequelize.STRING
      },
      uniqueid: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('challenges');
  }
};