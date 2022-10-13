'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'messageofthedays', 
      [
        {
      text: 'Genius is one percent inspiration and ninety-nine percent perspiration.',
      author: 'Thomas Edison',
      messageid: 'id001',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'Difficulties increase the nearer we get to the goal.',
      author: 'Johann Wolfgang von Goethe',
      messageid: 'id002',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'Fate is in your hands and no one elses.',
      author: 'Byron Pulsifer',
      messageid: 'id003',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'Nothing happens unless first we dream.',
      author: 'Carl Sandburg',
      messageid: 'id004',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'Self-complacency is fatal to progress.',
      author: 'Margaret Sangster',
      messageid: 'id005',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'Life is change. Growth is optional. Choose wisely.',
      author: 'Karen Clark',
      messageid: 'id006',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      text: 'A rolling stone gathers no moss.',
      author: 'Publilius Syrus',
      messageid: 'id007',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  
  ], 
  {}
  );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('messageofthedays', null, {});
  }
};
