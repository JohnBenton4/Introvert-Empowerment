'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserPickupLines',
      {
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        pickuplineId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'PickupLines',
            key: 'id',
          },
        },
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserPickupLines');
  }
};