'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Users', 
      [
        {
          email: 'omar@email.com',
          password: await bcrypt.hash('Password123', 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: 'john@email.com',
          password: await bcrypt.hash('Password456', 10),
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
