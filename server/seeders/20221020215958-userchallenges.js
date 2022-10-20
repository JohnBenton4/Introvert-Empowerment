'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserStickers',
      [
        {
          userId: 1,
          challengeId: 1,
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserChallenges', null, {});
  },
};
