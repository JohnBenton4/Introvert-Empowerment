'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users', 
      [
        {
          email: 'omar@email.com',
          password: 'Password123',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'john@email.com',
          password: 'Password456',
          createdAt: new Date(),
          updatedAt: new Date()
        },
  ], 
  {}
  );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
}; 
