'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Challenges', 
      [
        {
      challenge: 'Sign up for dancing lessons and commit to going each time.',
      category: 'Social',
      uniqueId: 'id001',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Go to a dance club tonight and dance with at least 10 people.',
      category: 'Social',
      uniqueId: 'id002',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Volunteer at your local food bank and talk to everyone you come in contact with.',
      category: 'Social',
      uniqueId: 'id003',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Volunteer at your local animal shelter and talk to everyone you come in contact with.',
      category: 'Social',
      uniqueId: 'id004',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Go to a movie in the park and sit close to people you do not know. Start a conversation with them.',
      category: 'Social',
      uniqueId: 'id005',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Host a movie night at your home/apartment with friends. Be sure to engage in conversation before and after the movie.',
      category: 'Social',
      uniqueId: 'id006',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Make a short movie with firends. Be the protagonist who goes out of the way to be outgoing.',
      category: 'Social',
      uniqueId: 'id007',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up for a local book club and go to a meeting. While there, ask members of the group to grab coffee after a meeting.',
      category: 'Social',
      uniqueId: 'id008',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up to read a book aloud at a local library.',
      category: 'Educational',
      uniqueId: 'id009',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Invite friends to go on a weekend trip. Let everyone know that phones should be put away so everyone can connect on a social level.',
      category: 'Social',
      uniqueId: 'id010',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Take a road trip with friends. Put phones away so everyone can have meaningful conversations.',
      category: 'Social',
      uniqueId: 'id011',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Take a photography class. Ask members of the class to go out for coffee after class.',
      category: 'Educational',
      uniqueId: 'id012',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Attend a yoga class. Ask members of the class to go out for coffee after class.',
      category: 'Social',
      uniqueId: 'id013',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Play a pick up sports game at the park. Ask people to go out for coffee or drinks after the game.' ,
      category: 'Social',
      uniqueId: 'id014',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up for music instrument lessons. Use it as an opportunity to ask questions of your teacher to create good social dialog.',
      category: 'Educational',
      uniqueId: 'id015',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Start a conversation with a complete stranger at the grocery store.',
      category: 'Social',
      uniqueId: 'id016',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Go speed dating.',
      category: 'Social',
      uniqueId: 'id017',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Invite a co-worker to lunch. Put your phones away so you can have a good conversation during the meal.',
      category: 'Work',
      uniqueId: 'id018',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Bring in donuts for the office and stick around to talk with everyone.',
      category: 'Work',
      uniqueId: 'id019',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      challenge: 'Sign up for a coding bookcamp. Always be the one to check-in with your classmates and teachers.',
      category: 'Work',
      uniqueId: 'id020',
      createdAt: new Date(),
      updatedAt: new Date()
    },

  ], 
  {}
  );
  },
  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Challenges', null, {});
  }
}; 
