'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserChallenges',
      {
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        challengeId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Challenges',
            key: 'id',
          },
        },
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserChallenges');
  }
};