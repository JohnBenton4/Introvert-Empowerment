'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserConversations',
    {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      conversationId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Conversations',
          key: 'id',
        },
      },
    },
  );
},
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserConversations');
  }
};