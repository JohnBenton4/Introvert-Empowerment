'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'challenges', 
      [
        {
      challenge: 'Sign up for dancing lessons',
      category: 'Social',
      uniqueid: 'id001',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Go to a dance club tonight',
      category: 'Social',
      uniqueid: 'id002',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Volunteer at your local food bank',
      category: 'Social',
      uniqueid: 'id003',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Volunteer at your local animal shelter',
      category: 'Social',
      uniqueid: 'id004',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Go to a movie in the park and sit close to people you don not know',
      category: 'Social',
      uniqueid: 'id005',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Host a movie night at your home/apartment with friends',
      category: 'Social',
      uniqueid: 'id006',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Make a short movie with firends',
      category: 'Social',
      uniqueid: 'id007',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up for a local book club and go to a meeting',
      category: 'Social',
      uniqueid: 'id008',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up to read a book aloud at a local library',
      category: 'Educational',
      uniqueid: 'id009',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Invite friends to go on a weekend trip',
      category: 'Social',
      uniqueid: 'id010',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Take a road trip with friends',
      category: 'Social',
      uniqueid: 'id011',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Take a photography class',
      category: 'Educational',
      uniqueid: 'id012',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Attend a yoga class',
      category: 'Social',
      uniqueid: 'id013',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Play a pick up sports game  at the park',
      category: 'Social',
      uniqueid: 'id014',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up for music instrument lessons',
      category: 'Educational',
      uniqueid: 'id015',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Start a conversation with a complete stranger at the grocery store',
      category: 'Social',
      uniqueid: 'id016',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Go speed dating',
      category: 'Social',
      uniqueid: 'id017',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Invite a co-worker to lunch',
      category: 'Work',
      uniqueid: 'id018',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Bring in donuts for the office and stick around to talk with everyone',
      category: 'Work',
      uniqueid: 'id019',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up for a coding bookcamp',
      category: 'Work',
      uniqueid: 'id020',
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], 
  {}
  );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('challenges', null, {});
  }
}; 
