'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserPickupLines',
      [
        {
          userId: 1,
          pickupLineId: 2,
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserPickupLines', null, {});
  },
};
